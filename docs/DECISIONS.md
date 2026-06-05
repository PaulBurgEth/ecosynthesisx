# Decisions Log

A plain-language record of non-obvious changes, why they were made, and what to watch out for. Newest entries at the top.

---

## 2026-06-05 — Fix Ahrefs "Non-canonical page in sitemap" (3 URLs) + unblock Vercel deploy

### What changed and where
Three separate fixes, merged as PRs #1, #2, #3:

1. **Self-referencing canonical URLs** — `src/app/projects/page.tsx`, `src/app/team/page.tsx`, `src/app/endorsements/page.tsx`
   Added a small `metadata` export to each page with its own canonical URL (`/projects`, `/team`, `/endorsements`).

2. **Removed a broken image reference** — `src/app/page.tsx`
   Deleted a decorative "noise texture" overlay that pointed to `/noise.png`, an image file that was never added to the project.

3. **Pinned how Tailwind finds CSS classes** — `src/app/globals.css` + new `.vercelignore`
   Told Tailwind to only look inside the `src/` folder, and told Vercel not to upload leftover build folders.

### Why (and what the problem actually was)

1. **Canonical tags.** Ahrefs flagged 3 pages as "non-canonical pages in the sitemap." Root cause: in Next.js, a canonical URL set once in the shared layout (`src/app/layout.tsx`) is inherited by *every* page that doesn't set its own. So `/projects`, `/team`, and `/endorsements` were all telling Google "the real version of me is the homepage" — while still being listed individually in the sitemap. Search engines treat that as a contradiction. The homepage itself was fine (it correctly pointed to itself), which is why only 3 of the 4 sitemap URLs were flagged. The fix gives each page a canonical that points to itself and matches its sitemap entry exactly.

2. **Missing `/noise.png`.** While deploying, the Vercel build failed: it couldn't find `/noise.png`. The homepage CSS referenced that image for a subtle texture, but the image was never committed — so the overlay had never actually rendered. We removed the dead reference. (Alternative considered: generate and add a real noise texture. Rejected — it would mean inventing design content for a feature that was never live. Chosen with the owner's confirmation.)

3. **Tailwind re-injecting `/noise.png`.** Even after removing the reference, the Vercel build *still* failed on `/noise.png`. Root cause: Tailwind v4 (with the default `@import "tailwindcss"`) scans the whole project for class names and relies on Git to know which folders to skip. The Vercel command-line deploy uploads files *without* the `.git` folder, so Tailwind couldn't tell it should skip the old `out/` build folder — which still contained the old noise class — and re-added the broken image link to the compiled CSS. The local build never hit this because locally Git is present and `out/` is ignored. Fix: explicitly tell Tailwind to scan only `src/` (`source("../")`), and add `.vercelignore` so build folders aren't uploaded at all.

### Trade-offs accepted
- **`source("../")` must stay accurate.** Tailwind now scans only `src/`. If real source code (with Tailwind classes) is ever added *outside* `src/`, those styles won't be generated. Today all source lives in `src/`, so this is safe.
- We chose to delete the noise overlay rather than restore it. If the texture is wanted later, add a real `public/noise.png` and re-add the overlay class.

### What's fragile / likely to need revisiting
- **Deploying via the `vercel` command line vs. Git.** The Tailwind-scanning problem only appears on command-line deploys (no `.git` uploaded). A normal Git-based Vercel deploy wouldn't have hit it. The `source("../")` pin protects both paths, but it's worth knowing the two deploy methods behave slightly differently.
- **Canonical inheritance in Next.js.** Any *new* page added under `src/app/` will again inherit the homepage canonical unless it exports its own. New pages must set their own `alternates.canonical` and be added to `public/sitemap.xml`.

### Verification done
- Clean local build produced 67 KB of CSS with all styles and no `noise.png`.
- Production deploy succeeded (`readyState: READY`).
- Live check: `/`, `/projects`, `/team`, `/endorsements` all return HTTP 200 with self-referencing canonical tags matching the sitemap.
- **Pending (manual, owner action):** trigger an Ahrefs re-crawl to clear the original error.

# Known Issues / Fragile Areas

Things that currently work but are brittle, or edge cases not fully handled. Newest entries at the top.

---

## 2026-06-05

### Adding new pages requires two manual steps for SEO
When a new page is added under `src/app/`, two things must be done by hand or it will trigger SEO warnings:
1. Export a `metadata` object with `alternates: { canonical: "/the-new-path" }` (otherwise it inherits the homepage's canonical — the exact bug fixed this session).
2. Add the new URL to `public/sitemap.xml`.
There is no automated sitemap generation; the sitemap is a hand-maintained static file.

### Tailwind only scans `src/`
`src/app/globals.css` pins Tailwind's class scanning to `src/` via `source("../")`. This is intentional (it prevents stale build folders from corrupting the CSS), but it means **any source file placed outside `src/` will not have its Tailwind classes generated**. Keep all UI source under `src/`.

### `vercel` CLI deploys behave differently from Git deploys
Command-line deploys (`vercel --prod`) upload the local folder without `.git`, which previously caused Tailwind to scan stale build artifacts. This is now mitigated by `.vercelignore` and the Tailwind source pin. If a future build behaves differently between local and Vercel, suspect leftover build folders (`.next`, `out`, `.vercel/output`) being uploaded.

### TypeScript build errors are ignored
`next.config.js` sets `typescript.ignoreBuildErrors: true`. Type errors will **not** fail the build — they're silently skipped. Type safety is not enforced at build time.

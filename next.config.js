/** @type {import('next').NextConfig} */
const repo = 'ecosynthesisx.github.io'; // <-- set to your repo name

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '' : '', // No basePath needed for username.github.io repos
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '', // No assetPrefix needed for username.github.io repos
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'regenbazaar.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'fonts.googleapis.com' },
      { protocol: 'https', hostname: 'octant.build' },
      { protocol: 'https', hostname: 's2.coinmarketcap.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'giveth.io' },
      { protocol: 'https', hostname: 'metapool.app' },
      { protocol: 'https', hostname: 'docs.arbitrum.foundation' },
    ],
    unoptimized: true, // Required for static export
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 
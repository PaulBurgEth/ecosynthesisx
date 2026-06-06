const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'regenbazaar.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'octant.build' },
      { protocol: 'https', hostname: 's2.coinmarketcap.com' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: 'giveth.io' },
      { protocol: 'https', hostname: 'metapool.app' },
      { protocol: 'https', hostname: 'docs.arbitrum.foundation' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// Sentry wrap. Runtime capture is gated on the DSN env vars (no-op if unset); no auth token needed to build.
module.exports = withSentryConfig(nextConfig, {
  org: 'vitacrypt',
  project: 'ecosynthesisx',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
});

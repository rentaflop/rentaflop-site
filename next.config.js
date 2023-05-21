const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
	source: '/_next/static',
	destination: '/static/_next/static'
      }
    ]
  },
})

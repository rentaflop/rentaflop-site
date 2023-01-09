module.exports = {
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  async rewrites() {
    return [
      {
	source: '/_next/static',
	destination: '/static/_next/static'
      }
    ]
  }
}

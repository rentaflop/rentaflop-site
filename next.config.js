module.exports = {
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
}

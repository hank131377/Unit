/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
}

module.exports = nextConfig

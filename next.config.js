/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'html'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

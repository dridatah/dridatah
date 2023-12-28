/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    output: "export",
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "html"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crete-theta.vercel.app",
        port: "",
        pathname: "/_next/image/**",
      },
      {
        protocol: "https",
        hostname: "dridatah.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

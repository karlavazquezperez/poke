/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Desactiva SWC
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

export default nextConfig;


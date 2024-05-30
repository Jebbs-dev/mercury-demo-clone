/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-development.mercury.com',
        port: '',
      }
    ],
  },
};

export default nextConfig;

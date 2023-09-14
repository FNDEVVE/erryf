/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'BBB',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'BBB',
  // output: 'export', FOR BAD HOSTINGS WITHOUT NODE
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

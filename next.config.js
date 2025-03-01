/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'typera-1344290185.cos.ap-shanghai.myqcloud.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 
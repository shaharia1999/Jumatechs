/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nlplatform.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['rickandmortyapi.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
            },
        ],
    },
};

module.exports = nextConfig;

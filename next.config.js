/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_TMDB_BASEIMGURL,
            }
        ]
    }
}

module.exports = nextConfig

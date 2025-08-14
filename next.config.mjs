<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
=======
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'synthova.de',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
}

export default nextConfig
>>>>>>> 76c4d78 (add new project)

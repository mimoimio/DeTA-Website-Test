/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: 'export', // Comment this out for traditional Next.js
    // trailingSlash: true, // Comment this out for traditional Next.js
    images: {
        // unoptimized: true, // Comment this out for traditional Next.js
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/pw/**",
            },
            {
                protocol: "https",
                hostname: "media.licdn.com",
            },
        ],
    },
    
};

export default nextConfig;

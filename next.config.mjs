/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
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

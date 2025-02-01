/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["lucide-react"],
    // Required for hosting on docker vm
    output: "standalone"
};

export default nextConfig;

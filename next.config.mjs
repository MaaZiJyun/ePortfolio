/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // Export only when building in GitHub Actions
    output: process.env.GITHUB_ACTION ? 'export' : undefined,
    images: { unoptimized: true },
};

export default nextConfig;

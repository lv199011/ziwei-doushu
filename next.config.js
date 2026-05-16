/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 强行忽略 TypeScript 错误，允许打包
    ignoreBuildErrors: true,
  },
  eslint: {
    // 强行忽略 ESLint 检查，允许打包
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

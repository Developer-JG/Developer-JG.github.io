/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-v0-project',
  assetPrefix: '/my-v0-project/',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

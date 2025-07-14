/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // GitHub Pages에서 사용할 저장소 이름 설정
  // 예: username.github.io 저장소를 사용하는 경우 basePath 필요 없음
  // 예: username.github.io/repo-name 형식인 경우 basePath: '/repo-name' 설정
  // basePath: '/your-repo-name',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{repository-name}' : '',
  trailingSlash: true,
};

export default nextConfig;


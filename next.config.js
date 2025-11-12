const normalizeBasePath = (basePath) => {
  if (!basePath) return '';
  const trimmed = basePath.trim().replace(/^\/|\/$/g, '');
  return trimmed ? `/${trimmed}` : '';
};

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
const assetPrefix = basePath ? `${basePath}/` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
  distDir: 'out',
  ...(basePath && { basePath }),
  ...(assetPrefix && { assetPrefix }),
};

module.exports = nextConfig;



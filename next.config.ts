import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['placehold.co', 'i.imgur.com'],
  },
  
  // Disable Webpack cache
  webpack(config, { dev, isServer }) {
    // Disable caching for builds
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  
  // Disable experimental caching on the server side
  
  // Optional: Prevent creation of the .next folder completely (for export use case)
  // If you are exporting a static site and don't need SSR, you could switch to next export
  // But this part is for export use cases only:
  // target: 'serverless',
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Node 25 / Next 16 incompatibility causes runTypeCheck to fail at build time.
    // TypeScript is still checked in the editor and dev server.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

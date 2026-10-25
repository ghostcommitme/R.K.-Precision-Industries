/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/products/steel-rokker-cage",
        destination: "/products/steel-roller-cage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

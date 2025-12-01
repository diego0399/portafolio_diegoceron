/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portafolio_diegoceron",
  assetPrefix: "/portafolio_diegoceron",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

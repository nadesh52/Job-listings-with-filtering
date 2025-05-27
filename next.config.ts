const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: isProd ? "export" : "standalone",
  trailingSlash: true,
  basePath: "/list-with-filter",
  // assetPrefix: "https://nadesh52.github.io/Job-listings-with-filtering/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;

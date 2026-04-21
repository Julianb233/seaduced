/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: "/opt/agency-workspace/seaduced",
  },
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;

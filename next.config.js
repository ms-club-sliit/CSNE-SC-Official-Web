/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/2018/11/13/21/43/**",
      },
    ],
  },
};

module.exports = nextConfig;

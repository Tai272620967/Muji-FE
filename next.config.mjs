/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Tắt Strict Mode để kiểm tra lỗi gọi API 2 lần
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;

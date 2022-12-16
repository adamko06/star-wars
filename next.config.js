/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  sassOptions: {
    prependData: `@import "./styles/_variables.scss";`,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "./src/styles/_variables.scss";`,
  },
  env: {
    API_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://adamk-star-wars-api.herokuapp.com/graphql'
        : 'http://localhost:5002/graphql',
  },
};

module.exports = nextConfig;

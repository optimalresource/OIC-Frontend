/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "https://rccgoic.herokuapp.com/api"
        : "https://rccgoic.herokuapp.com/api",
    baseUrl:
      process.env.NODE_ENV === "development" ? "localhost:3000" : "rccgoic.com",
    publicBaseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://rccgoic.com",
    publicUrl:
      process.env.NODE_ENV === "development"
        ? "https://rccgoic.herokuapp.com/api"
        : "https://rccgoic.herokuapp.com/api",
  },
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

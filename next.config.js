/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl: "mongodb+srv://Metaltank-21:admin1234@cluster0.bkfsv.mongodb.net/?retryWrites=true&w=majority",
}
}

module.exports = nextConfig

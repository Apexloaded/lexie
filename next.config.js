/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    FAKE_API_HOST: "https://dummyjson.com",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "pk_test_51M42pzIYRsV8n2HlZxS77t13Kyd7siM1rgbBSrtZVuN9lZqllT1AL7396TrBOumqao5CLF6kTdXqfmTfRX0qI62W00xSHFFQcJ",
    STRIPE_SECRET_KEY: "sk_test_51M42pzIYRsV8n2HlNZ6n18wLyiiV8pn7049uyizLjiNxsFLNDOVoI0MzkmtT7WQS8jU5Fap734diIw9KXM8nHPmY00hlNeMmFF"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com"
      }
    ]
  }
}

module.exports = nextConfig

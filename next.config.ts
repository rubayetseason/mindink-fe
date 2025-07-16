import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "repsoft-dev-bucket.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
};
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {protocol: 'https',
        hostname: "placehold.co"
      },
      {protocol: 'https',
        hostname: "picsum.photos"},
      {protocol: 'https',
        hostname: "dummyimage.com"}
    ],
  },
}

export default nextConfig;

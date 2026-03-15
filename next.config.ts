import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "blog.ciraos.top",
    "files.seeusercontent.com"
  ],
  distDir: ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.ciraos.top",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.seeusercontent.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
  output: "standalone",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactCompiler: true,
  reactStrictMode: false
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

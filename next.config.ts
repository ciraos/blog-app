import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "https://blog.ciraos.top",
    "https://files.seeusercontent.com"
  ],
  distDir: ".next",
  output: "standalone",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactCompiler: true,
  reactStrictMode: false
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);

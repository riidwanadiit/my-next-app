import type { NextConfig } from "next";

const repo = "my-next-app";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/" + repo,
  assetPrefix: "/" + repo + "/",
};

export default nextConfig;

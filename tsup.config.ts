import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["esm"],
  outDir: "dist",
  clean: true,
  sourcemap: true,
  // Only treat openclaw as external; bundle other deps so --link install does not need plugin node_modules
  external: ["openclaw", "openclaw/plugin-sdk"],
  noExternal: ["fast-xml-parser", "zod"],
  target: "node18",
  esbuildOptions(options) {
    options.mainFields = ["module", "main"];
    // Resolve .js imports to .ts sources first (source uses .js extension in imports)
    options.resolveExtensions = [".ts", ".tsx", ".js", ".jsx", ".json"];
  },
});

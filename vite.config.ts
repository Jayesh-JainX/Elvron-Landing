import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import componentTagger from "vite-plugin-component-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: true,
    port: 3000,
    open: true,
    cors: true,
    allowedHosts: ["localhost", "127.0.0.1"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Fixed: Use function syntax for manualChunks to avoid build warnings
        manualChunks(id) {
          if (id.includes("react") || id.includes("react-dom")) {
            return "vendor-react";
          }
          if (id.includes("chart.js") || id.includes("react-chartjs-2")) {
            return "vendor-chart";
          }
        },
        format: "es",
        entryFileNames: "assets/js/[name]-[hash].js",
        chunkFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
      onwarn(warning, warn) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" ||
          warning.code === "CIRCULAR_DEPENDENCY" ||
          warning.code === "MISSING_NODE_BUILTINS" ||
          warning.code === "CASE_SENSITIVE_IMPORT"
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }],
        ],
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm": "silent",
      "unsupported-jsx-comment": "silent",
      "parse-error": "silent",
      "missing-module": "silent",
      "case-sensitivity": "silent",
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "chart.js",
      "react-chartjs-2",
    ],
  },
}));

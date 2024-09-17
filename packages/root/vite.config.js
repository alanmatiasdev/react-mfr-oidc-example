import { defineConfig } from "vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    handlebars({
      context: {
        isLocal: mode === "development",
      },
    }),
    vitePluginSingleSpa({
      type: "root",
      importMaps: {
        type: "systemjs-importmap",
        dev: ["src/dev/dev-apps.json"],
      },
      imo: "3.1.1",
    }),
  ],
  server: {
    host: "localhost",
    port: 9000,
  },
}));

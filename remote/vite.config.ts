import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./helloworld": "./src/components/HelloWorld.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    polyfillModulePreload: false,
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
       
        minifyInternalExports: false,
      },
    }
  },
});

import { readFileSync } from "fs";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { timeFormat } from "d3";
import { enhancedImages } from '@sveltejs/enhanced-img';
import dsv from "@rollup/plugin-dsv";

const { version } = JSON.parse(readFileSync("package.json", "utf8"));
const timestamp = timeFormat("%Y-%m-%d-%H:%M")(new Date());


export default defineConfig({
  define: {
		__VERSION__: JSON.stringify(version),
		__TIMESTAMP__: JSON.stringify(timestamp)
	},
	plugins: [enhancedImages(), sveltekit(), dsv()],
	optimizeDeps: {
    exclude: [
      '@duckdb/duckdb-wasm',
    ],
  },
  build: {
    target: 'esnext'
  }
});
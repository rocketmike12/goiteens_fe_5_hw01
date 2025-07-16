import path from "path";
import { defineConfig } from "vite";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "https://rocketmike12.github.io/goiteens_fe_5_hw01/",
	plugins: [react()],
	build: {
		minify: false,
		rollupOptions: {
			input: {
				...Object.fromEntries(
				glob
					.sync(["./*.html", "./pages/**/*.html"])
					.map((file) => [path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)), fileURLToPath(new URL(file, import.meta.url))])
				),
				...{author: path.resolve("author", "index.html")}
			},
			output: {
				assetFileNames: "assets/[name].[ext]",
			},
		},
	},
});

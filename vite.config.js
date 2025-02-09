import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
	root: "./",
	build: {
		outDir: "dist",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index-dark.html"),
				light: resolve(__dirname, "index.html"),
			},
			external: ["jquery", "skrollr"],
			output: {
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split(".")
					const extType = info[info.length - 1]
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return `assets/img/[name][extname]`
					}
					return `assets/${extType}/[name][extname]`
				},
				entryFileNames: `assets/js/[name].js`,
				chunkFileNames: `assets/js/[name].js`,
				manualChunks: undefined,
			},
		},
		assetsInlineLimit: 0,
		copyPublicDir: true,
	},
	publicDir: "public",
	server: {
		open: true,
		port: 3000,
	},
})

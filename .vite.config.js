import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				light: resolve(__dirname, "index.html"),
				dark: resolve(__dirname, "index-dark.html"),
			},
		},
	},
})

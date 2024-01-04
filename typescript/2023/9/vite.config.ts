// managed-by-autotool

import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: 'es2022',
		lib: {
			entry: [],
			formats: ['es'],
		},
	},
	plugins: [],
});

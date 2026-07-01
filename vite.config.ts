import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
	// Check if we are building for cPanel production
	const isProd = process.env.VITE_DEPLOY_ENV === 'prod';

	return {
		base: isProd ? '/' : '/the-tile-theory/',
		plugins: [react()],
	};
});
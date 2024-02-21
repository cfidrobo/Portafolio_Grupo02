import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Cristian Idrobo/",
  build: {
    outDir: 'build', // Specify the output directory for the build
  },
});

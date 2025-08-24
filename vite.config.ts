import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  css: {
preprocessorOptions: {
  scss: {
 additionalData: `
 @use '@/styles/index.scss';
 `,
 },
 },
 },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
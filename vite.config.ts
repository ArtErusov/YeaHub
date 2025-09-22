/// <reference types="vitest/config" />
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `
 @use '@shared/styles/index.scss';
 @use '@shared/styles/media.scss' as *;
 `,
         },
      },
   },
   plugins: [react(), svgr()],
   server: {
      port: 3000,
      open: true,
   },
   resolve: {
      alias: {
         '@app': path.resolve(__dirname, 'src/app'),
         '@shared': path.resolve(__dirname, 'src/shared'),
         '@entities': path.resolve(__dirname, 'src/entities'),
         '@features': path.resolve(__dirname, 'src/features'),
         '@widgets': path.resolve(__dirname, 'src/widgets'),
         '@pages': path.resolve(__dirname, 'src/pages'),
         '@processes': path.resolve(__dirname, 'src/processes'),
         '@': path.resolve(__dirname, 'src'),
      },
   },
});

/// <reference types="vitest/config" />
import { fileURLToPath } from 'node:url';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
const dirname =
   typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
   plugins: [react()],
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
   test: {
      projects: [
         {
            extends: true,
            plugins: [
               // The plugin will run tests for the stories defined in your Storybook config
               // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
               storybookTest({
                  configDir: path.join(dirname, '.storybook'),
               }),
            ],
            test: {
               name: 'storybook',
               browser: {
                  enabled: true,
                  headless: true,
                  provider: 'playwright',
                  instances: [
                     {
                        browser: 'chromium',
                     },
                  ],
               },
               setupFiles: ['.storybook/vitest.setup.ts'],
            },
         },
      ],
   },
});

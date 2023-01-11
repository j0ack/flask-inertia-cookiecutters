import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: '/dist'
  };

  let buildConfig = {
    outDir: '../dist/',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/main.ts',
    }
  };

  if (mode === 'development') {
    buildConfig.rollupOptions.output = {
      entryFileNames: '[name].js',
      assetFileNames: 'assets/[name].[ext]'
    };
  } else {
    buildConfig.manifest = true;
  }

  return {
    ...config,
    build: buildConfig
  }
})

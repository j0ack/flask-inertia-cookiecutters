import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: '/dist'
  }

  let buildConfig = {
    outDir: '../dist/',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/main.tsx',
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

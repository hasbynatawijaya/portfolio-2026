import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import { resolve } from 'path';

export default defineConfig({
  base: '/portfolio-2026/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          animations: [
            './src/components/animations/TextScramble.ts',
            './src/components/animations/ScrollReveal.ts',
            './src/components/animations/MagneticButton.ts',
            './src/components/animations/ParallaxEffect.ts',
          ],
          services: [
            './src/services/ThemeService.ts',
            './src/services/PerformanceMonitor.ts',
            './src/services/StorageService.ts',
          ],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  preview: {
    port: 4173,
  },
  plugins: [
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@services': resolve(__dirname, './src/services'),
      '@utils': resolve(__dirname, './src/utils'),
      '@data': resolve(__dirname, './src/data'),
      '@styles': resolve(__dirname, './src/styles'),
      '@core': resolve(__dirname, './src/core'),
    },
  },
  css: {
    devSourcemap: true,
  },
});

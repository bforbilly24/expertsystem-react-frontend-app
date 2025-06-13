import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
      autoCodeSplitting: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  build: {
    rollupOptions: {
      // Force use of JS version instead of native binary
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
    // Disable native optimizations that might cause issues
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['@tanstack/react-router', '@tanstack/react-query'],
  },
  // Add esbuild fallback configuration
  esbuild: {
    target: 'node14',
  },
})
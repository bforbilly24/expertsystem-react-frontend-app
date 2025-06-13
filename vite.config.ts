import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      // Add explicit configuration to help with import resolution
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
      // Disable auto-generation during build if causing issues
      autoCodeSplitting: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // fix loading all icon chunks in dev mode
      // https://github.com/tabler/tabler-icons/issues/1233
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  // Add build configuration to help with module resolution
  build: {
    rollupOptions: {
      external: [],
    },
  },
  // Ensure proper module resolution
  optimizeDeps: {
    include: ['@tanstack/react-router', '@tanstack/react-query'],
  },
})

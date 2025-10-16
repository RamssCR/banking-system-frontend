import { defineConfig } from 'vitest/config'
import paths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      react(),
      tailwindcss(),
      paths(),
      visualizer({ open: false, filename: 'build.html' })
    ],
    server: {
      open: true,
    },
    build: {
      minify: !isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          advancedChunks: {
            groups: [{ name: 'vendor', test: /\bnode_modules\b/ }]
          },
        }
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      include: ['test/**/*.{ts,tsx}'],
      reporters: ['default', 'html'],
      coverage: {
        reporter: ['lcov', 'text'],
        exclude: [
          'node_modules',
          '**/*.config.*',
          'src/main.tsx',
          'src/App.tsx',
          'html/**',
          'coverage/**',
          'dist/**'
        ]
      }
    }
  }
})
import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import { loadEnv } from 'vite'
import paths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_VERSION || 'development'),
      __IS_STAGING__: JSON.stringify(mode === 'staging'),
    },
    plugins: [
      react(),
      tailwindcss(),
      paths(),
      visualizer({ open: false, filename: 'build.html' }),
    ],
    server: {
      open: true,
    },
    build: {
      minify: !isProduction ? 'oxc' : false,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          advancedChunks: {
            groups: [{ name: 'vendor', test: /\bnode_modules\b/ }],
          },
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: 'test/setupTest.ts',
      include: ['test/**/*.test.{ts,tsx}'],
      reporters: ['default', 'html'],
      coverage: {
        reporter: ['lcov', 'text'],
        exclude: [
          'node_modules',
          '**/*.config.*',
          'src/main.tsx',
          'src/App.tsx',
          'src/shared/variants/**',
          'src/shared/utils/constants.ts',
          'src/shared/plugins/axios.ts',
          'html/**',
          'coverage/**',
          'dist/**',
          ...coverageConfigDefaults.exclude,
        ],
      },
    },
  }
})

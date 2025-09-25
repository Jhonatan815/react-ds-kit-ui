import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['src/**/*.{test,spec}.{ts,tsx}'],
          setupFiles: ['.storybook/vitest.setup.ts'],
          globals: true,
          environment: 'jsdom',
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
          globals: true,
          environment: 'jsdom',
        },
      },
    ],
    coverage:{
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/index.ts','src/**/index.ts'],
      thresholds:{
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  },
})

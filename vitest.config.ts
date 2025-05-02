import { defineConfig } from 'vitest/config';

const excludeFromTestingAndCoverage = [
  'build/',
  'terraform',
  '.docusaurus',
  'vitest.config.ts',
  'node_modules/'
]

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        functions: 0,
      },
      enabled: true,
      provider: 'istanbul',
      exclude: excludeFromTestingAndCoverage,
    },
    exclude: excludeFromTestingAndCoverage,
  },
})
import type { UserConfig } from 'tsdown'

const envRetentions: Record<string, string> = {}
;['DEV', 'PROD', 'APP_VERSION', 'CI'].forEach((key) => {
  envRetentions[`import.meta.env.${key}`] = `import.meta.env.${key}`
})

export const baseConfig: UserConfig = {
  define: envRetentions,
  dts: {
    sourcemap: true,
    tsconfig: './tsconfig.build.json',
  },
  entry: ['./src/*/index.ts', './src/*/index.tsx', './src/*.ts', './src/*.tsx'],
  exports: {
    all: true,
    devExports: true,
  },
  external: (id) => {
    if (id.includes('node_modules')) return true
    if (id.startsWith('@') && !id.startsWith('@/')) return true
    if (!id.startsWith('.') && !id.startsWith('/')) return true
    return false
  },
  format: 'esm',
  platform: 'neutral',
  sourcemap: true,
  target: 'esnext',
  treeshake: false,
  unbundle: true,
}

import { rimraf } from 'rimraf'

await rimraf('./packages/*/dist/**/*.{d.ts,d.ts.map}')

// remove incremental build metadata - as it is no longer valid.
await rimraf('./**/tsconfig.tsbuildinfo')

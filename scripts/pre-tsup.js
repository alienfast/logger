import { rimraf } from 'rimraf'

await rimraf('./packages/*/dist/**/*.{js,js.map}', { glob: true })

// remove incremental build metadata - as it is no longer valid.
await rimraf('./**/tsconfig.tsbuildinfo', { glob: true })

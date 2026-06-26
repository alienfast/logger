import { $ } from 'execa'
import { rimraf as r } from 'rimraf'

// TODO: promote this as a script to @alienfast/ci once it is stable

export default {}
console.log('Cleaning dependencies...')

await $`pnpm exec tsc -b --clean`

await Promise.all([
  r('./{packages,cloud}/*/node_modules', { glob: true }),
  r('pnpm-lock.yaml'),
  r('node_modules'),
]).then(async () => {
  await $`pnpm store prune`
})

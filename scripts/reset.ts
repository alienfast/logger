import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { $ } from 'execa'

export default {}
const $$ = $({ stdio: 'inherit' })
// TODO: promote this as a script to @alienfast/ci once it is stable

console.log('Resetting...')

const dir = dirname(fileURLToPath(import.meta.url))

await Promise.all([$$`tsx ${dir}/clean.ts`, $$`tsx ${dir}/clean-yarn.ts`])

console.log('Installing...')
await $$`yarn install`

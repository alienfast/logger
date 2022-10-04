import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

// const customAliasResolver = (
//   this: PluginContext,
//   source: string,
//   importer: string | undefined,
//   options: { custom?: CustomPluginOptions; isEntry: boolean },
// ) => {
//   console.log(this)
// }

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // setupFiles: ['../config/src/jest/testSetup.js'],  // this is causing
      // Error: Cannot find module '/Users/kross/projects/tools/node_modules/@alienfast/common/dist/index.cjs'
      // ❯ Object.<anonymous> ../../node_modules/@alienfast/logger/dist/index.cjs:1:721
      // ❯ Object.<anonymous> ../../node_modules/@alienfast/logger-node/dist/index.cjs:1:660
      // ❯ Users/kross/projects/tools/packages/config/src/jest/testSetup.js:53:1
    },
  }),
)

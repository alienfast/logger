import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    minifyIdentifiers: false, // don't mangle const names
  },
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['es'],
      fileName: '[name]',
    },
    sourcemap: true,
    rollupOptions: {
      external: (id) => {
        // console.log(id)
        return !id.startsWith('.') && !id.includes(`${process.cwd()}/src`)
      },
      // https://github.com/vitejs/vite/issues/5174#issuecomment-1432231710
      preserveEntrySignatures: 'strict',
      output: {
        preserveModules: true,
      },
      treeshake: false,

      //https://github.com/vitejs/vite/issues/5174#issuecomment-1536546402
      // preserveEntrySignatures: 'strict',
      // input: ['./src/index.ts'],
      // output: [
      //   {
      //     dir: 'dist',
      //     format: 'esm',
      //     preserveModules: true,
      //     preserveModulesRoot: './src',
      //     entryFileNames: ({ name: fileName }) => {
      //       return `${fileName}.js`
      //     },
      //   },
      // ],
    },
  },
  plugins: [
    react(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      // need to transform path because it is taking it relative to the config file, not cwd
      beforeWriteFile: (filePath, content) => {
        // filePath: /Users/kross/projects/js/packages/concepts/dist/packages/concepts/src/index.d.ts.map
        // filePath: /Users/kross/projects/js/packages/i18n/packages/i18n/src/defaultI18nextOptions.d.ts.map
        const name = path.basename(process.cwd())
        const search =
          filePath.includes('dist') && filePath.includes('src')
            ? `dist/packages/${name}/src`
            : `packages/${name}/src`
        const replacement = `${filePath.replace(search, 'dist')}`
        // console.log('filePath:', filePath, 'search:', search, 'replacement:', replacement)
        return {
          filePath: replacement,
          content,
        }
      },
    }),
  ],
})

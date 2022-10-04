// import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   outDir: 'build',
  //   sourcemap: true,
  //   chunkSizeWarningLimit: 99999,
  // },
  plugins: [
    // react(),
    // https://github.com/aleclarson/vite-tsconfig-paths
    // tsconfigPaths({ root: '..' }), // this path is relative to the cwd/package itself e.g. `yarn test` in the package's dir.
    tsconfigPaths({}), // this path is relative to the cwd/package itself e.g. `yarn test` in the package's dir.
  ],
})

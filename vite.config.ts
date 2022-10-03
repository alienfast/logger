import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/aleclarson/vite-tsconfig-paths
    tsconfigPaths({ root: '..' }), // this path is relative to the cwd/package itself e.g. `yarn test` in the package's dir.
  ],
})

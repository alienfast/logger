import rimraf from 'rimraf'

rimraf('./packages/*/dist/**/*.{js,js.map}', (error) => {
  if (error) {
    throw error
  }
})

// remove incremental build metadata - as it is no longer valid.
rimraf('./**/tsconfig.tsbuildinfo', (error) => {
  if (error) {
    throw error
  }
})

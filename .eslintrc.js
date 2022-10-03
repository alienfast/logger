require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['@alienfast'],
  rules: {
    // 'import/no-unresolved': 'error'
    // 'import/extensions': 'off',
    // 'n/file-extension-in-import': 'error', // one time run only, doesn't work for @apollo/client/core and yargs/helpers
    // 'n/no-missing-import': ["error", {
    //         "allowModules": ["react-dev-utils", "@apollo/client"]
    //     }],
  },
}

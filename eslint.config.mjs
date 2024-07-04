import af from '@alienfast/eslint-config'
import tseslint from 'typescript-eslint'

/**
 * Project eslint configuration.
 *
 * View config with `npx @eslint/config-inspector`
 */
export default tseslint.config({
  name: 'project',
  extends: [...af.configs.recommended],
  // languageOptions: {
  //   parserOptions: {
  //     // project: true, // find the closest tsconfig file. ['./tsconfig*.json', './packages/*/tsconfig.json'],
  //     // project: [
  //     //   //
  //     //   './tsconfig*.json',
  //     //   './packages/*/tsconfig.json',
  //     // ],

  //     warnOnUnsupportedTypeScriptVersion: true,
  //     EXPERIMENTAL_useProjectService: true,
  //     // tsconfigRootDir: import.meta.dirname,
  //   },
  // },
})

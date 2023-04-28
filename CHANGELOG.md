# v11.0.12 (Fri Apr 28 2023)

#### 🐛 Bug Fix

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - update all, switch to reused @alienfast/tsconfig package, remove iter… [#5](https://github.com/alienfast/logger/pull/5) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.11 (Wed Nov 09 2022)

#### ⚠️ Pushed to `main`

- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - add debug location and update warning message ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.10 (Fri Nov 04 2022)

#### ⚠️ Pushed to `main`

- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - remove cjs build ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.9 (Fri Nov 04 2022)

#### ⚠️ Pushed to `main`

- ignore finalized artifacts ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - cleanup, add back release:finalize ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.8 (Fri Nov 04 2022)

#### 🐛 Bug Fix

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - Add cjs, standardize package exports, add clean-package to kill typings [#4](https://github.com/alienfast/logger/pull/4) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.7 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - Bump to see if packages are properly listed on repo page ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.6 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - apply env variables to entire job ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.5 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - standardize repository entries and add optional lerna-lite package ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.4 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- use yarn immutable and pass env to every command ([@rosskevin](https://github.com/rosskevin))
- explicitly pass env to each command ([@rosskevin](https://github.com/rosskevin))
- no more check-in of cache ([@rosskevin](https://github.com/rosskevin))
- clean:yarn ([@rosskevin](https://github.com/rosskevin))
- update build config to use actions/setup-node with yarn caching ([@rosskevin](https://github.com/rosskevin))
- update actions versions ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger`
  - type safety around process ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.3 (Tue Oct 25 2022)

#### ⚠️ Pushed to `main`

- yarn set version latest ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-node`
  - stop using tsup-node - it is bundling dependencies together ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.2 (Tue Oct 25 2022)

#### ⚠️ Pushed to `main`

- fresh yarn ([@rosskevin](https://github.com/rosskevin))
- clean:yarn - get rid of cache for platform specific files ([@rosskevin](https://github.com/rosskevin))
- stop minimizing build, unnecessary. ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.1 (Tue Oct 25 2022)

#### ⚠️ Pushed to `main`

- require tests to pass for a release!!! ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-node`
  - fix chalk usage after major update ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - ncu && npm-check ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.0 (Thu Oct 13 2022)

#### 💥 Breaking Change

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - Change distribution to ESM only bundles [#3](https://github.com/alienfast/logger/pull/3) ([@rosskevin](https://github.com/rosskevin))

#### 🐛 Bug Fix

- initial setup of auto for ci [#1](https://github.com/alienfast/logger/pull/1) ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger`
  - Remove @af dependencies and make fully independent packages [#2](https://github.com/alienfast/logger/pull/2) ([@rosskevin](https://github.com/rosskevin))

#### ⚠️ Pushed to `main`

- Delete .env ([@rosskevin](https://github.com/rosskevin))
- Move tsup.config.ts to top level, make it easier to lint, more obvious for the build process. ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-node`, `@alienfast/logger`
  - ncu ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - bring over build:ide and related scripts ([@rosskevin](https://github.com/rosskevin))
  - delegate build to individual packages, use tsup-node for logger-node ([@rosskevin](https://github.com/rosskevin))
  - initial commit - from tools 8.0.27 ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger`
  - update dependencies and lock file ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v10.0.0 (Thu Oct 06 2022)

#### 💥 Breaking Change

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - Change distribution to ESM only bundles [#3](https://github.com/alienfast/logger/pull/3) ([@rosskevin](https://github.com/rosskevin))

#### ⚠️ Pushed to `main`

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - bring over build:ide and related scripts ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v9.0.4 (Thu Oct 06 2022)

#### ⚠️ Pushed to `main`

- `@alienfast/logger`
  - update dependencies and lock file ([@rosskevin](https://github.com/rosskevin))
- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - delegate build to individual packages, use tsup-node for logger-node ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v9.0.3 (Tue Oct 04 2022)

#### ⚠️ Pushed to `main`

- Move tsup.config.ts to top level, make it easier to lint, more obvious for the build process. ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v9.0.2 (Tue Oct 04 2022)

#### 🐛 Bug Fix

- `@alienfast/logger-browser`, `@alienfast/logger`
  - Remove @af dependencies and make fully independent packages [#2](https://github.com/alienfast/logger/pull/2) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v9.0.1 (Mon Oct 03 2022)

#### 🐛 Bug Fix

- initial setup of auto for ci [#1](https://github.com/alienfast/logger/pull/1) ([@rosskevin](https://github.com/rosskevin))

#### ⚠️ Pushed to `main`

- `@alienfast/logger-browser`, `@alienfast/logger-node`, `@alienfast/logger`
  - initial commit - from tools 8.0.27 ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

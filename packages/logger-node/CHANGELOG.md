# v12.1.2 (Thu Oct 02 2025)

#### ⚠️ Pushed to `main`

- revert biome-changed check for isNode ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.1.1 (Wed Oct 01 2025)

#### 🐛 Bug Fix

- Migrate tooling: ESLint/Prettier → Biome, Vite → tsdown [#21](https://github.com/alienfast/logger/pull/21) ([@rosskevin](https://github.com/rosskevin))

#### ⚠️ Pushed to `main`

- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.1.0 (Mon Sep 15 2025)

#### 🚀 Enhancement

- perf: optimize logging performance without API changes [#20](https://github.com/alienfast/logger/pull/20) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.7 (Mon Sep 15 2025)

#### 🐛 Bug Fix

- feat: update dependencies with critical security fixes [#19](https://github.com/alienfast/logger/pull/19) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.6 (Wed Sep 03 2025)

#### ⚠️ Pushed to `main`

- add build:prep for license and npmignore ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.5 (Wed Sep 03 2025)

#### ⚠️ Pushed to `main`

- don’t ship tsconfigs as it errors in ide downstream ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.4 (Tue Sep 02 2025)

#### ⚠️ Pushed to `main`

- ncu ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.2 (Fri Mar 07 2025)

#### ⚠️ Pushed to `main`

- ncu ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.1 (Tue Feb 11 2025)

#### ⚠️ Pushed to `main`

- fix diagnostics logging function instead of value ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v12.0.0 (Tue Feb 11 2025)

#### 💥 Breaking Change

- fix build cycle error, move system configs to globalThis [#18](https://github.com/alienfast/logger/pull/18) ([@rosskevin](https://github.com/rosskevin))

#### 🐛 Bug Fix

- fix build cycle error, move global system default configs to globalThis to prevent chunk mismatches ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.33 (Fri Feb 07 2025)

#### 🐛 Bug Fix

- ncu, remove private org requirement, scripts to ts [#17](https://github.com/alienfast/logger/pull/17) ([@rosskevin](https://github.com/rosskevin))
- ncu, remove private org requirement, scripts to ts ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.32 (Wed Jan 22 2025)

#### 🐛 Bug Fix

- Fix monorepo npm release, bring in incompatible nodenext timestamp fn [#16](https://github.com/alienfast/logger/pull/16) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.31 (Wed Jan 22 2025)

#### 🐛 Bug Fix

- ncu and yarn update, switch to nodenext and add extensions [#15](https://github.com/alienfast/logger/pull/15) ([@rosskevin](https://github.com/rosskevin))
- ncu and yarn update, switch to nodenext and add extensions ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.30 (Mon Dec 16 2024)

#### 🐛 Bug Fix

- update [#14](https://github.com/alienfast/logger/pull/14) ([@rosskevin](https://github.com/rosskevin))
- update ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.29 (Thu Jul 04 2024)

#### 🐛 Bug Fix

- Update dependencies, eslint 9 [#13](https://github.com/alienfast/logger/pull/13) ([@rosskevin](https://github.com/rosskevin))
- update dependencies, eslint 9x is working ([@rosskevin](https://github.com/rosskevin))
- update all dependencies, new eslint config, new prettier config, update vscode/settings ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.28 (Sat Jan 27 2024)

#### 🐛 Bug Fix

- update yarn and all packages [#12](https://github.com/alienfast/logger/pull/12) ([@rosskevin](https://github.com/rosskevin))
- update yarn and all packages ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.24 (Wed Aug 09 2023)

#### ⚠️ Pushed to `main`

- Switch to using globalThis to maintain the logWriter instead of the error prone static expected to be in a singleton package ([@rosskevin](https://github.com/rosskevin))
- ncu and add reset script ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.23 (Mon Jul 31 2023)

#### ⚠️ Pushed to `main`

- ncu, fix lint/type errors - no code changes ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.20 (Tue Jun 27 2023)

#### 🐛 Bug Fix

- Switch to vite [#10](https://github.com/alienfast/logger/pull/10) ([@rosskevin](https://github.com/rosskevin))
- Move over vite.lib config as well as reused scripts ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.19 (Fri Jun 23 2023)

#### ⚠️ Pushed to `main`

- use tsup-node for paranoia’s sake ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.18 (Fri Jun 23 2023)

#### ⚠️ Pushed to `main`

- Fix dist and bundling of monorepo deps due to tsup using/including code from project references ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.17 (Thu Jun 22 2023)

#### ⚠️ Pushed to `main`

- ncu && tsup do not include externals (required self log writer to get around releaseFinalize peerDep error) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.16 (Thu Jun 01 2023)

#### 🐛 Bug Fix

- switch to yarn workspace versioning, ncu [#9](https://github.com/alienfast/logger/pull/9) ([@rosskevin](https://github.com/rosskevin))
- switch to yarn workspace versioning, ncu ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.15 (Sun Apr 30 2023)

#### ⚠️ Pushed to `main`

- Don’t clean before running tsup (workaround for dts generation with project references) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.13 (Sat Apr 29 2023)

#### 🐛 Bug Fix

- Fix type exports/add back workaround [#7](https://github.com/alienfast/logger/pull/7) ([@rosskevin](https://github.com/rosskevin))
- Apply yarn.lock changes ([@rosskevin](https://github.com/rosskevin))
- Add back unfortunate workaround for types, add back releaseFinalize for cleaner packages ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.12 (Fri Apr 28 2023)

#### 🐛 Bug Fix

- Update CHANGELOG.md \[skip ci\] ([@rosskevin](https://github.com/rosskevin))
- update all, switch to reused @alienfast/tsconfig package, remove iter… [#5](https://github.com/alienfast/logger/pull/5) ([@rosskevin](https://github.com/rosskevin))
- update all, switch to reused @alienfast/tsconfig package, remove iterators.ts due to ts errors (simpler without) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.12 (Fri Apr 28 2023)

#### 🐛 Bug Fix

- update all, switch to reused @alienfast/tsconfig package, remove iter… [#5](https://github.com/alienfast/logger/pull/5) ([@rosskevin](https://github.com/rosskevin))
- update all, switch to reused @alienfast/tsconfig package, remove iterators.ts due to ts errors (simpler without) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.11 (Wed Nov 09 2022)

#### ⚠️ Pushed to `main`

- add debug location and update warning message ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.10 (Fri Nov 04 2022)

#### ⚠️ Pushed to `main`

- remove cjs build ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.9 (Fri Nov 04 2022)

#### ⚠️ Pushed to `main`

- cleanup, add back release:finalize ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.8 (Fri Nov 04 2022)

#### 🐛 Bug Fix

- Add cjs, standardize package exports, add clean-package to kill typings [#4](https://github.com/alienfast/logger/pull/4) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.7 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- Bump to see if packages are properly listed on repo page ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.6 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- apply env variables to entire job ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.5 (Fri Oct 28 2022)

#### ⚠️ Pushed to `main`

- standardize repository entries and add optional lerna-lite package ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

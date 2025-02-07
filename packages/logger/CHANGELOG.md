# v11.0.33 (Fri Feb 07 2025)

#### 🐛 Bug Fix

- ncu, remove private org requirement, scripts to ts [#17](https://github.com/alienfast/logger/pull/17) ([@rosskevin](https://github.com/rosskevin))
- ncu, remove private org requirement, scripts to ts ([@rosskevin](https://github.com/rosskevin))

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

# v11.0.26 (Sun Aug 13 2023)

#### ⚠️ Pushed to `main`

- debug message change ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.25 (Sun Aug 13 2023)

#### ⚠️ Pushed to `main`

- cleanup LogConfig, rename to simply Options ([@rosskevin](https://github.com/rosskevin))
- move some types to explicit to avoid eslint corner case ([@rosskevin](https://github.com/rosskevin))
- move log configuration to globalThis to prevent multi-library inclusion conflict ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.24 (Wed Aug 09 2023)

#### ⚠️ Pushed to `main`

- accidental typo when committing? ([@rosskevin](https://github.com/rosskevin))
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
- update, remove comment after verifying ncu behavior ([@rosskevin](https://github.com/rosskevin))
- update all, switch to reused @alienfast/tsconfig package, remove iterators.ts due to ts errors (simpler without) ([@rosskevin](https://github.com/rosskevin))

#### Authors: 1

- Kevin Ross ([@rosskevin](https://github.com/rosskevin))

---

# v11.0.12 (Fri Apr 28 2023)

#### 🐛 Bug Fix

- update all, switch to reused @alienfast/tsconfig package, remove iter… [#5](https://github.com/alienfast/logger/pull/5) ([@rosskevin](https://github.com/rosskevin))
- update, remove comment after verifying ncu behavior ([@rosskevin](https://github.com/rosskevin))
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

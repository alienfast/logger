# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript monorepo for AlienFast logger packages, managed with Lerna and built with tsdown. The project provides logging functionality across three main packages:

- `@alienfast/logger` - Core logging interfaces and functionality
- `@alienfast/logger-browser` - Browser-specific logging implementation
- `@alienfast/logger-node` - Node.js-specific logging implementation with colored output

## Commands

### Development

- `yarn build` - Build all packages (clean → prep → individual builds)
- `yarn check-types` - TypeScript type-checking only (`tsc -p tsconfig.json --pretty`)
- `yarn test` - Run all tests across packages (type-checks first, then runs tests in parallel)
- `yarn lint-fix` - Run Biome with auto-fix for code formatting and linting

### Quality Checks

- `yarn check` - Run all quality checks (types, Biome, circular dependencies, markdown)
- `yarn check-types` - TypeScript type-checking without emitting files
- `yarn check-biome` - Run Biome checks with auto-fixing
- `yarn check-circular` - Detect circular dependencies using madge
- `yarn check-markdown` - Lint markdown files with markdownlint

### Package Management

- `yarn clean` - Clean build artifacts across all packages
- `yarn reset` - Complete reset (clean + yarn cache clear)

### Individual Package Commands

All packages support these commands (run from package directory or with `lerna exec`):

- `yarn build` - Build individual package using shared tsdown config
- `yarn test` - Run package-specific tests with Vitest

## Architecture

### Monorepo Structure

- **Workspace Root**: Contains shared configuration and build tools
- **packages/logger**: Core logging abstractions (`Logger`, `Log`, `LogWriter`, etc.)
  - Includes `diagnostics.ts` module for circular dependency diagnostic utilities
- **packages/logger-browser**: Browser-specific implementations (`BrowserLogWriter`)
- **packages/logger-node**: Node.js implementations with colored console output (`NodeLogWriter`)

### Build System

- **tsdown** for library builds with TypeScript declaration generation
- **Shared configuration** in `tsdown.config.base.ts` used by all packages
- **ESM-only unbundled** output format with automatic exports generation
- **Type preservation** with source maps for debugging
- **Vite** still used for testing via Vitest
- Each package has `tsconfig.build.json` for build-specific configuration
- Root `tsconfig.json` has `noEmit: true` for type-checking only

### Key Dependencies

- Core package has minimal dependencies (`@types/node` only)
- Browser package has peer dependency on core logger
- Node package adds `chalk` for colored output
- All packages use `clean-package` for publishing optimizations

### Code Quality

- **Biome** for code formatting and linting (replaces ESLint/Prettier)
- **markdownlint** for markdown file linting
- **madge** for circular dependency detection
- **TypeScript** strict mode with comprehensive type-checking

### Testing

- **Vitest** for unit testing across all packages
- Tests run in parallel after TypeScript type-checking
- Individual package testing supported

### Release Process

- **Auto** for automated releases with conventional commits
- **Lerna** for coordinated package versioning
- **GitHub Packages** registry for publishing
- Pre-commit hooks with lint-staged running Biome checks

## Development Workflow

1. Make changes in relevant package(s) under `packages/`
2. Run `yarn check-types` for quick type checking
3. Run `yarn test` to ensure all tests pass (includes type-checking)
4. Use `yarn lint-fix` to format code with Biome
5. Run `yarn check` to verify all quality checks pass
6. Commit follows conventional commit format for auto-releases

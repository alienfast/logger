# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript monorepo for AlienFast logger packages, managed with Lerna and built with Vite. The project provides logging functionality across three main packages:

- `@alienfast/logger` - Core logging interfaces and functionality
- `@alienfast/logger-browser` - Browser-specific logging implementation
- `@alienfast/logger-node` - Node.js-specific logging implementation with colored output

## Commands

### Development

- `yarn build` - Build all packages (clean → prep → individual builds)
- `yarn build:ide` - TypeScript compilation only (`tsc -b`)
- `yarn test` - Run all tests across packages (builds first, then runs in parallel)
- `yarn lint:fix` - Run ESLint with auto-fix

### Package Management

- `yarn clean` - Clean build artifacts across all packages
- `yarn reset` - Complete reset (clean + yarn cache clear)

### Individual Package Commands

All packages support these commands (run from package directory or with `lerna exec`):

- `yarn build` - Build individual package using shared Vite config
- `yarn test` - Run package-specific tests with Vitest

## Architecture

### Monorepo Structure

- **Workspace Root**: Contains shared configuration and build tools
- **packages/logger**: Core logging abstractions (`Logger`, `Log`, `LogWriter`, etc.)
- **packages/logger-browser**: Browser-specific implementations (`BrowserLogWriter`)
- **packages/logger-node**: Node.js implementations with colored console output (`NodeLogWriter`)

### Build System

- **Vite** for library builds with TypeScript declaration generation
- **Shared configuration** in `vite.config.lib.ts` used by all packages
- **ESM-only** output format with tree-shaking support
- **Type preservation** with source maps for debugging

### Key Dependencies

- Core package has minimal dependencies (`@types/node` only)
- Browser package has peer dependency on core logger
- Node package adds `chalk` for colored output
- All packages use `clean-package` for publishing optimizations

### Testing

- **Vitest** for unit testing across all packages
- Tests run in parallel after TypeScript compilation
- Individual package testing supported

### Release Process

- **Auto** for automated releases with conventional commits
- **Lerna** for coordinated package versioning
- **GitHub Packages** registry for publishing
- Pre-commit hooks with lint-staged for code quality

## Development Workflow

1. Make changes in relevant package(s) under `packages/`
2. Run `yarn build:ide` for quick type checking
3. Run `yarn test` to ensure all tests pass
4. Use `yarn lint:fix` to format code
5. Commit follows conventional commit format for auto-releases

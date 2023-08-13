import { LogWriter } from './LogWriter'

// Augment the globalThis interface
// @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-8.html#example-6
// @see https://stackoverflow.com/a/68452689/2363935

// Ensure this is treated as a module.
export {}

declare global {
  // NOTE: global variables declared with let and const don’t show up on globalThis.
  // eslint-disable-next-line no-var
  var logWriter: LogWriter
  var logs: Record<string, Log>
}

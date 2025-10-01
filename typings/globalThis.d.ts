import { Log, LogWriter, LoggerConfig } from '@alienfast/logger'

declare global {
  // NOTE: global variables declared with let and const don’t show up on globalThis.
  // eslint-disable-next-line no-var
  var logWriter: LogWriter
  var logs: Record<string, Log>
  var loggerConfig: LoggerConfig
}

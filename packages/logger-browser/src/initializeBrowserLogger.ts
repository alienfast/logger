import { configureLoggers, type LoggersConfig } from '@alienfast/logger'

import { BrowserLogWriter } from './BrowserLogWriter.js'

export function initializeBrowserLogger(loggersConfig?: LoggersConfig) {
  globalThis.logWriter = new BrowserLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

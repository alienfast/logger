import { configureLoggers, LoggersConfig } from '@alienfast/logger'

import { BrowserLogWriter } from './BrowserLogWriter'

export function initializeBrowserLogger(loggersConfig?: LoggersConfig) {
  globalThis.logWriter = new BrowserLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

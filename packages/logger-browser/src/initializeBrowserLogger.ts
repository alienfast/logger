import { configureLoggers, Logger, LoggersConfig } from '@alienfast/logger'

import { BrowserLogWriter } from './BrowserLogWriter'

export function initializeBrowserLogger(loggersConfig?: LoggersConfig) {
  Logger.writer = new BrowserLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

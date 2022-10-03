import { configureLoggers, Logger, LoggersConfig } from '@alienfast/logger'

import { NodeLogWriter } from './NodeLogWriter'

export function initializeNodeLogger(loggersConfig?: LoggersConfig) {
  Logger.writer = new NodeLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

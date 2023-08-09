import { configureLoggers, LoggersConfig } from '@alienfast/logger'

import { NodeLogWriter } from './NodeLogWriter'

export function initializeNodeLogger(loggersConfig?: LoggersConfig) {
  globalThis.logWriter = new NodeLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

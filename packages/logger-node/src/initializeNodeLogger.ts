import { configureLoggers, type LoggersConfig } from '@alienfast/logger'

import { NodeLogWriter } from './NodeLogWriter.js'

export function initializeNodeLogger(loggersConfig?: LoggersConfig) {
  globalThis.logWriter = new NodeLogWriter()
  if (loggersConfig) {
    configureLoggers(loggersConfig)
  }
}

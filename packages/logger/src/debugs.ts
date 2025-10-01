import type { LoggersConfig } from './configureLoggers.js'
import { Level } from './Level.js'

export const debugs = (classes: string[]): LoggersConfig => {
  const loggers: LoggersConfig = {}
  classes.forEach((name) => {
    loggers[name] = Level.DEBUG
  })
  return loggers
}

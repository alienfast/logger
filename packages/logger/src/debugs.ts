import type { LoggersConfig } from './configureLoggers.ts'
import { Level } from './Level.ts'

export const debugs = (classes: string[]): LoggersConfig => {
  const loggers: LoggersConfig = {}
  classes.forEach((name) => {
    loggers[name] = Level.DEBUG
  })
  return loggers
}

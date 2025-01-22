import { LoggersConfig } from './configureLoggers.js'

export const debugs = (classes: string[]): LoggersConfig => {
  const loggers: LoggersConfig = {}
  classes.forEach((name) => {
    loggers[name] = 'debug'
  })
  return loggers
}

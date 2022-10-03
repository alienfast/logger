import { LoggersConfig } from './configureLoggers'

export const debugs = (classes: string[]): LoggersConfig => {
  const loggers: LoggersConfig = {}
  classes.forEach((name) => {
    loggers[name] = 'debug'
  })
  return loggers
}

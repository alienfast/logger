import type { Level } from './Level.ts'
import { Logger } from './Logger.ts'
import { type LevelString, toLevel } from './toLevel.ts'

export interface LoggersConfig {
  [key: string | symbol]: LevelString | Level
}

// Initialize the logger first.  We need to set the default and clear
//  any loggers that were initialized prior to this point.
export function configureLoggers(loggers: LoggersConfig) {
  for (const component of Reflect.ownKeys(loggers)) {
    const threshold = loggers[component]
    Logger.get(
      component as string,
      toLevel(threshold as LevelString | Level, Logger.getDefaultThreshold()),
      true,
    )
  }
}

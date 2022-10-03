import { iterator } from '@alienfast/common'

import { Level } from './Level'
import { Logger } from './Logger'
import { LevelString, toLevel } from './toLevel'

export interface LoggersConfig {
  [key: string]: LevelString | Level
}

// Initialize the logger first.  We need to set the default and clear
//  any loggers that were initialized prior to this point.
export function configureLoggers(loggers: LoggersConfig) {
  for (const [component, threshold] of iterator(loggers)) {
    Logger.get(
      component as string,
      toLevel(threshold as LevelString | Level, Logger.defaultThreshold),
      true,
    )
  }
}

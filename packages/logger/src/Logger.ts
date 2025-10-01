import { dumpConfiguration as dumpConfig } from './diagnostics.js'
import { Level } from './Level.js'
import { Log } from './Log.js'
import { objectName } from './objects.js'
import { type LevelOrBoolean, toLevel } from './toLevel.js'

export interface LoggerConfig {
  /**
   * The default threshold for any new Log
   */
  defaultThreshold: Level

  /**
   * The minimum threshold for the system
   */
  systemThreshold: Level
}

if (!globalThis.loggerConfig) {
  globalThis.loggerConfig = {
    defaultThreshold: Level.INFO,
    systemThreshold: Level.DEBUG,
  }
}

if (!globalThis.logs) {
  globalThis.logs = {}
}

export class Logger {
  /**
   * The default threshold for any new Log
   */
  public static setDefaultThreshold(level: Level) {
    globalThis.loggerConfig.defaultThreshold = level
  }

  public static getDefaultThreshold() {
    return globalThis.loggerConfig.defaultThreshold
  }

  /**
   * The minimum threshold for the system
   */
  public static setSystemThreshold(level: Level) {
    globalThis.loggerConfig.systemThreshold = level
  }

  public static getSystemThreshold() {
    return globalThis.loggerConfig.systemThreshold
  }

  /**
   * Resolve a logger
   * @param object
   * @param threshold - string for threshold or true for 'debug'
   * @returns {Log}
   */
  public static get(object: string | object, threshold?: LevelOrBoolean, overwrite = false): Log {
    const _level: Level = toLevel(threshold)

    if (!object) {
      throw new Error('An object (instance|class|string) must be specified.')
    }
    const name = objectName(object)

    let log: Log | undefined = globalThis.logs[name]
    if (!log) {
      // need to delay resolution of LogWriter, so pass this in.
      log = new Log({
        name,
        systemThreshold: Logger.getSystemThreshold(),
        threshold: toLevel(threshold, Logger.getDefaultThreshold()),
      })
      globalThis.logs[name] = log
      // console.log(`Log [${name}] set to ${threshold || this.defaultThreshold}`)
    } else if (overwrite) {
      log.options.threshold = threshold as Level
      // console.log(
      //   `Log [${name}] (override) set to ${String(
      //     log.threshold,
      //   )} debug? ${log.isDebugEnabled()}`,
      // )
    }

    return log
  }

  public static dumpConfiguration() {
    dumpConfig()
  }
}

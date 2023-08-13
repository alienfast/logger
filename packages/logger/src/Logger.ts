/* eslint-disable no-console */
import { Level } from './Level'
import { Log } from './Log'
import { objectName } from './objects'
import { LevelOrBoolean, toLevel } from './toLevel'

if (!globalThis.logs) {
  globalThis.logs = {}
}

export class Logger {
  // public static logs: { [key: string]: Log } = {}

  /**
   * The default threshold for any new Log
   */
  public static defaultThreshold: Level = Level.INFO

  /**
   * The minimum threshold for the system
   */
  public static systemThreshold: Level = Level.DEBUG

  /**
   * Resolve a logger
   * @param object
   * @param threshold - string for threshold or true for 'debug'
   * @returns {Log}
   */
  public static get(object: string | object, threshold?: LevelOrBoolean, overwrite = false) {
    const level: Level = toLevel(threshold)

    if (!object) {
      throw new Error('An object (instance|class|string) must be specified.')
    }
    const name = objectName(object)

    let logWriter = globalThis.logs[name]
    if (!logWriter) {
      // need to delay resolution of LogWriter, so pass this in.
      logWriter = new Log({
        name,
        systemThreshold: this.systemThreshold,
        threshold: toLevel(threshold, this.defaultThreshold),
      })
      globalThis.logs[name] = logWriter
      // console.log(`Log [${name}] set to ${threshold || this.defaultThreshold}`)
    } else if (overwrite) {
      logWriter.logConfig.threshold = threshold as Level
      // console.log(
      //   `Log [${name}] (override) set to ${String(
      //     logWriter.threshold,
      //   )} debug? ${logWriter.isDebugEnabled()}`,
      // )
    }

    return logWriter
  }

  public static dumpConfiguration() {
    // window.logWriter = null
    console.info('Loggers configured:')
    console.info('\tglobalThis.logWriter', globalThis.logWriter)
    // console.info('\tFORCE_LOG_WRITER', process && process.env && process.env.FORCE_LOG_WRITER)
    console.info('\tlocation', import.meta.url)
    console.info('\tsystemThreshold', this.systemThreshold)
    console.info('\tdefaultThreshold', this.defaultThreshold)
    console.info('\tDEBUG is', Level.DEBUG)
    console.info('\tINFO is', Level.INFO)
    console.info('\tConfigurations:')
    const sortedKeys = Object.keys(globalThis.logs).sort()
    for (const key of sortedKeys) {
      console.info(`\t\t${key}: ${Logger.get(key).logConfig.threshold}`)
    }
  }
}

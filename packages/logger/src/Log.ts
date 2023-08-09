/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */

import { jsonify } from './jsonify'
import { Level } from './Level'
import { LogConfig } from './LogConfig'
import { Logger } from './Logger'

const NOLOG = typeof process !== 'undefined' && process.env.NOLOG

// class SelfBuildLogWriter implements LogWriter {
//   public write(name: string, level: Level, ...args: any[]) {
//     console.log(...args)
//   }
// }

export class Log {
  public logConfig: LogConfig
  constructor(logConfig: LogConfig) {
    this.logConfig = logConfig
  }

  public dump(o: object, force = false, truncate = -1) {
    if (force || this.isDebugEnabled()) {
      let result = jsonify(o)
      if (truncate > 0) {
        result = result.substring(0, Math.min(truncate, result.length)) + '...'
      }
      return result
    }
    return '(empty)'
  }

  // notes on flow implementation of logging signature without coercion errors:
  // https://github.com/facebook/flow/issues/2138#issuecomment-235405380
  public debug(...args: any[]) {
    if (this.isDebugEnabled()) {
      this.writeLog(Level.DEBUG, ...args)
    }
  }

  public info(...args: any[]) {
    if (this.isInfoEnabled()) {
      this.writeLog(Level.INFO, ...args)
    }
  }

  public warn(...args: any[]) {
    if (this.isWarnEnabled()) {
      this.writeLog(Level.WARN, ...args)
    }
  }

  public error(...args: any[]) {
    if (this.isErrorEnabled()) {
      this.writeLog(Level.ERROR, ...args)
    }
  }

  public isEnabled(level: number): boolean {
    // console.log('threshold', this.threshold)
    // console.log('level', level)
    // console.log('configuration.systemThreshold', configuration.systemThreshold)
    return !NOLOG && level >= this.logConfig.threshold && level >= this.logConfig.systemThreshold
  }

  public isDebugEnabled() {
    return this.isEnabled(Level.DEBUG)
  }

  public isInfoEnabled() {
    return this.isEnabled(Level.INFO)
  }

  public isWarnEnabled() {
    return this.isEnabled(Level.WARN)
  }

  public isErrorEnabled() {
    return this.isEnabled(Level.ERROR)
  }

  public group(name: string, threshold: Level = Level.ERROR) {
    if (!this.isEnabled(threshold)) {
      return
    }
    if (this.logConfig.name) {
      console.group(`[${this.logConfig.name}] ${name}`)
    } else {
      console.group(name)
    }
  }

  public groupEnd() {
    console.groupEnd()
  }

  private writeLog(level: Level, ...args: any[]) {
    if (!globalThis.logWriter) {
      // if in fact we are building our own logger repo, we need to force this setting because elsewhere we rely on peer dependency
      // if (process && process.env && process.env.FORCE_LOG_WRITER === 'node') {
      //   console.warn('Forcing globalThis.logWriter to SelfBuildLogWriter')
      //   globalThis.logWriter = new SelfBuildLogWriter()
      //   return
      // }

      Logger.dumpConfiguration()
      throw new Error(
        'globalThis.logWriter was not set prior to attempt to write log.  Please use @alienfast/logger-browser or @alienfast/logger-node to initialize a writer at the entry point.',
      )
    }
    globalThis.logWriter.write(this.logConfig.name, level, ...args)
  }
}

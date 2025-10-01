/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */
import { Level, type LogWriter } from '@alienfast/logger'
import chalk, { type ChalkInstance } from 'chalk'

import { timestamp } from './timestamp.js'

// chalk.enabled = true

export class NodeLogWriter implements LogWriter {
  public write(name: string, level: Level, ...args: any[]) {
    // If debugging is enabled and this browser has a console
    if (console && args) {
      switch (level) {
        case Level.DEBUG:
          // use info to avoid the 'All Levels' selection in the chrome console
          console.info(...this.toArgs(name, 'debug', chalk.blue, args))
          break
        case Level.INFO:
          console.info(...this.toArgs(name, 'info ', chalk.grey, args))
          break
        case Level.WARN:
          console.warn(...this.toArgs(name, 'warn ', chalk.yellow, args))
          break
        case Level.ERROR:
          console.error(...this.toArgs(name, 'error', chalk.red, args))
          break
        default:
          throw new Error(`Unable to print to console for unknown level: ${String(level)}`)
      }
    }
  }

  private toArgs(name: string, levelName: string, levelColor: ChalkInstance, args: any[]): any[] {
    return [
      `${chalk.grey(timestamp('HH:mm:ss'))}`,

      `${levelColor(levelName)} ${chalk.inverse(levelColor(` ${name} `))}`,
      ...args,
    ]
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */
import { browser, isNode } from '@alienfast/common'
import { jsonify, Level, LogWriter } from '@alienfast/logger'

const DEBUG = false
const OBJECT = 'font-size: 9px; background: grey; color: #fff; padding: 0 3px;'
const END_SPAN = 'background: none; color: #000;'
// const NO_CHALK = (style: string) => {}
const LevelStyle = {
  [Level.DEBUG]: {
    // chalk: NO_CHALK,
    label: 'debug',
    level: 'background: #303da5; color: #fff; padding: 0 5px;',
    text: '',
  },
  [Level.ERROR]: {
    // chalk: NO_CHALK,
    label: 'error',
    level: 'background: #d9534f; color: #fff; padding: 0 5px;',
    text: 'color: #d9534f;',
  },
  [Level.INFO]: {
    // chalk: NO_CHALK,
    label: 'info',
    level: 'background: #1795de; color: #fff; padding: 0 8px;',
    text: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  prefix: (name: string, style: any): string => `[${name}][${style.label}]`,
  [Level.WARN]: {
    // chalk: NO_CHALK,
    label: 'warn',
    level: 'background: #f0ad4e; color: #fff; padding: 0 8px;',
    text: 'color: #f0ad4e;',
  },
}

const isHeadlessChrome = browser.isHeadlessChrome()
const isAlienFastChrome = browser.isAlienFastChrome()
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const isMocha = typeof (global as any).it === 'function'
const isDumbTerminal = isHeadlessChrome || isMocha || isNode || isAlienFastChrome

// function dump() {
//   browser.dump()
//   console.info(`isNode?: ${isNode}`)
//   console.info(`isMocha?: ${isMocha}`)
//   console.info(`isDumbTerminal?: ${isDumbTerminal}`)
// }

// if (DEBUG) {
//   dump()
// }

// in jest instead import @alienfast/logger-node to get this behavior
// if (isMocha || isNode) {
//   // do a dynamic require of chalk only if we are in the node environment
//   const chalk = require('chalk')
//   chalk.enabled = true
//   LevelStyle.prefix = (name: string, style) => {
//     // return `        ${chalk.inverse(' ' + name + ' ')} ${String(style.chalk(style.label))}`
//     return `${chalk.inverse(chalk.grey(' ' + name + ' '))} ${style.chalk(style.label)}`
//   }
//   LevelStyle[Level.DEBUG].chalk = chalk.blue
//   LevelStyle[Level.INFO].chalk = chalk.grey
//   LevelStyle[Level.WARN].chalk = chalk.yellow
//   LevelStyle[Level.ERROR].chalk = chalk.red
// }

export class BrowserLogWriter implements LogWriter {
  public write(name: string, level: Level, ...args: any[]) {
    // If debugging is enabled and this browser has a console
    if (console && args) {
      const style = LevelStyle[level]

      // webkit doesn't stringify all args, so do that so we can see in the log, otherwise use the more powerful one below
      let msg
      if (isDumbTerminal) {
        const jsonifiedArgs = args.map((value) => {
          if (typeof value === 'object') {
            return jsonify(value)
          } else {
            return value
          }
        })

        // msg must be an array, but we only want one string so that it can be captured in remote selenium.
        msg = [[LevelStyle.prefix(name, style), ...jsonifiedArgs].join(' ')]
      } else {
        // browser - write the stylized output for better visuals
        msg = [`%c${name}%c`, OBJECT, END_SPAN, ...args]
      }

      switch (level) {
        case Level.DEBUG:
          // use info to avoid the 'All Levels' selection in the chrome console
          console.info(...msg)
          break
        case Level.INFO:
          console.info(...msg)
          break
        case Level.WARN:
          console.warn(...msg)
          break
        case Level.ERROR:
          console.error(...msg)
          break
        default:
          throw new Error(`Unable to print to console for unknown level: ${String(level)}`)
      }
    }
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable no-console */
import { browser, isNode, jsonify, Level, type LogWriter } from '@alienfast/logger'

// console-log-colors could be a good alternative here that implements chalk api on the browser

const _DEBUG = false
const LevelStyle = {
  [Level.DEBUG]: {
    label: 'debug', // #303da5
    level: 'font-size: 9px; background: #1795de; color: #fff; padding: 0 3px;',
    text: 'color: #1795de;',
  },
  [Level.ERROR]: {
    label: 'error',
    level: 'font-size: 9px; background: #d9534f; color: #fff; padding: 0 3px;',
    text: 'color: #d9534f;',
  },
  [Level.INFO]: {
    label: 'info',
    level: 'font-size: 9px; background: grey; color: #fff; padding: 0 3px;',
    text: 'color: grey;',
  },

  prefix: (name: string, style: any): string => `[${name}][${style.label}]`,
  [Level.WARN]: {
    label: 'warn',
    level: 'font-size: 9px; background: #f0ad4e; color: #fff; padding: 0 3px;',
    text: 'color: #f0ad4e;',
  },
}

const isHeadlessChrome = browser.isHeadlessChrome()
const isAlienFastChrome = browser.isAlienFastChrome()

const isDumbTerminal = isHeadlessChrome || isNode || isAlienFastChrome

// function dump() {
//   browser.dump()
//   console.info(`isNode?: ${isNode}`)
//   console.info(`isDumbTerminal?: ${isDumbTerminal}`)
// }

// if (DEBUG) {
//   dump()
// }

export class BrowserLogWriter implements LogWriter {
  public write(name: string, level: Level, ...args: any[]) {
    // If debugging is enabled and this browser has a console
    if (console && args) {
      const style = LevelStyle[level]

      // webkit doesn't stringify all args, so do that so we can see in the log, otherwise use the more powerful one below
      let msg: unknown[]
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
        msg = [`%c${name}%c %s`, LevelStyle[level].level, LevelStyle[level].text, ...args]
      }

      switch (level) {
        case Level.DEBUG:
          isDumbTerminal ? console.info(...msg) : console.debug(...msg) // note: logging prefs must be set in capybara to see these.
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

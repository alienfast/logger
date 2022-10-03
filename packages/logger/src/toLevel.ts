import { Level } from './Level'

export type LevelString = 'debug' | 'info' | 'warn' | 'error'
export type LevelOrBoolean = LevelString | Level | boolean

// export const enum LevelName {
//   DEBUG = 'debug',
//   INFO = 'info',
//   WARN = 'warn',
//   ERROR = 'error',
// }
export function toLevel(levelOrBoolean?: LevelOrBoolean, defaultLevel: Level = Level.INFO) {
  // console.log(typeof levelOrBoolean)
  if (typeof levelOrBoolean === 'boolean') {
    return levelOrBoolean ? Level.DEBUG : defaultLevel
  } else if (typeof levelOrBoolean !== 'number' && !levelOrBoolean) {
    return defaultLevel
  } else {
    if (typeof levelOrBoolean !== 'string') {
      // console.log('not a string so returning', levelOrBoolean)
      return levelOrBoolean as Level
    } else {
      switch (levelOrBoolean) {
        case 'debug':
          return Level.DEBUG
        case 'info':
          return Level.INFO
        case 'warn':
          return Level.WARN
        case 'error':
          return Level.ERROR
        default:
          throw new Error(`Unrecognized log level ${String(levelOrBoolean)}`)
      }
    }
  }
}

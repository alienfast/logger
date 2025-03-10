import { Level } from './Level.js'
import { Log } from './Log.js'

type WithLog = (log: Log) => void

/**
 * Fabricate a new logger for the scoped callback from an existing logger with a new
 * threshold without affecting the registered logger.
 *
 *
 * @param log
 * @param threshold
 * @param callback
 */
export const withLog = (log: Log, threshold: Level, callback: WithLog) => {
  const scopedLog = new Log({ ...log.options, threshold })
  callback(scopedLog)
}

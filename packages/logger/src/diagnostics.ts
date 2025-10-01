/* eslint-disable no-console */

import { Level } from './Level.js'

/**
 * Dumps the current logger configuration to console.
 * Used for diagnostic purposes when logging fails.
 */
export function dumpConfiguration(): void {
  console.info('Loggers configured:')
  console.info('\tglobalThis.logWriter', globalThis.logWriter)
  console.info('\tlocation', import.meta.url)
  console.info('\tsystemThreshold', globalThis.loggerConfig?.systemThreshold)
  console.info('\tdefaultThreshold', globalThis.loggerConfig?.defaultThreshold)
  console.info('\tDEBUG is', Level.DEBUG)
  console.info('\tINFO is', Level.INFO)
  console.info('\tConfigured logs:')
  const sortedKeys = Object.keys(globalThis.logs || {}).sort()
  for (const key of sortedKeys) {
    const log = globalThis.logs[key]
    console.info(`\t\t${key}: ${log?.options?.threshold}`)
  }
}

import { Logger } from '@alienfast/logger'
import { describe, expect, test } from 'vitest'

import { initializeBrowserLogger } from './initializeBrowserLogger.js'

describe('BrowserLogWriter', () => {
  test.concurrent('initializeBrowserLogger', () => {
    initializeBrowserLogger()
    expect(globalThis.logWriter).toBeDefined()
    Logger.dumpConfiguration()

    const log = Logger.get('NodeLogWriter.test', 'debug')
    log.debug('This is a debug message')
    log.info('This is an info message')
    log.warn('This is a warn message')
    log.error('This is an error message')
  })
})

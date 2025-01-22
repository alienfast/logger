import { Logger } from '@alienfast/logger'
import { describe, expect, test } from 'vitest'

import { initializeNodeLogger } from './initializeNodeLogger.js'

describe('NodeLogWriter', () => {
  test.concurrent('initializeNodeLogger', () => {
    initializeNodeLogger()
    expect(globalThis.logWriter).toBeDefined()
    Logger.dumpConfiguration()

    const log = Logger.get('NodeLogWriter.test', 'debug')
    log.debug('This is a debug message')
    log.info('This is an info message')
    log.warn('This is a warn message')
    log.error('This is an error message')
  })
})

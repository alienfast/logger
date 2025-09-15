import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Level, Logger } from '../index.js'
import { LogWriter } from '../LogWriter.js'

// Mock LogWriter to track method calls
class MockLogWriter implements LogWriter {
  public writeCalls: Array<{ name: string; level: Level; args: any[] }> = []
  private systemThreshold: Level = Level.DEBUG

  public write(name: string, level: Level, ...args: any[]): void {
    this.writeCalls.push({ name, level, args })
  }

  public setSystemThreshold(systemThreshold: Level): void {
    this.systemThreshold = systemThreshold
  }

  public clear() {
    this.writeCalls = []
  }
}

describe('Lazy Evaluation Performance Optimization', () => {
  let mockLogWriter: MockLogWriter

  beforeEach(() => {
    mockLogWriter = new MockLogWriter()
    globalThis.logWriter = mockLogWriter
    // Clear any cached loggers
    globalThis.logs = {}
  })

  it('should not process arguments when log level is disabled (lazy evaluation)', () => {
    // Set up logger with WARN level (disables debug and info)
    const log = Logger.get('test', Level.WARN)

    // Create a spy on an expensive operation
    const expensiveOperation = vi.fn(() => {
      // Simulate expensive serialization
      return JSON.stringify({ large: 'object' })
    })

    // This debug call should NOT trigger the expensive operation using lazy evaluation
    log.debugLazy(() => 'Message', expensiveOperation)

    // Verify the expensive operation was never called
    expect(expensiveOperation).not.toHaveBeenCalled()
    expect(mockLogWriter.writeCalls).toHaveLength(0)
  })

  it('should process arguments when log level is enabled (lazy evaluation)', () => {
    // Set up logger with DEBUG level (enables all levels)
    const log = Logger.get('test', Level.DEBUG)

    // Create a spy on an expensive operation
    const expensiveOperation = vi.fn(() => {
      return JSON.stringify({ important: 'data' })
    })

    // This debug call SHOULD trigger the expensive operation using lazy evaluation
    log.debugLazy(() => 'Message', expensiveOperation)

    // Verify the expensive operation was called and log was written
    expect(expensiveOperation).toHaveBeenCalledTimes(1)
    expect(mockLogWriter.writeCalls).toHaveLength(1)
    expect(mockLogWriter.writeCalls[0].args).toEqual(['Message', '{"important":"data"}'])
  })

  it('should avoid function execution when logs are disabled (lazy evaluation)', () => {
    // Set up logger with ERROR level (disables debug, info, warn)
    const log = Logger.get('test', Level.ERROR)

    // Create mock functions to track if they're called
    const fn1 = vi.fn(() => 'result1')
    const fn2 = vi.fn(() => 'result2')
    const fn3 = vi.fn(() => 'result3')

    // These calls should not execute the functions using lazy evaluation
    log.debugLazy(() => 'Debug:', fn1, fn2, fn3)
    log.infoLazy(() => 'Info:', fn1, fn2, fn3)
    log.warnLazy(() => 'Warn:', fn1, fn2, fn3)

    // Verify none of the functions were called
    expect(fn1).not.toHaveBeenCalled()
    expect(fn2).not.toHaveBeenCalled()
    expect(fn3).not.toHaveBeenCalled()
    expect(mockLogWriter.writeCalls).toHaveLength(0)
  })

  it('should maintain backward compatibility with existing API', () => {
    // Set up logger with DEBUG level
    const log = Logger.get('test', Level.DEBUG)

    // Test various argument types that should work the same as before
    log.debug('string')
    log.info('string', 123)
    log.warn('string', { object: true }, [1, 2, 3])
    log.error('string', null, undefined, true, false)

    // Verify all calls were made with correct arguments
    expect(mockLogWriter.writeCalls).toHaveLength(4)
    expect(mockLogWriter.writeCalls[0].args).toEqual(['string'])
    expect(mockLogWriter.writeCalls[1].args).toEqual(['string', 123])
    expect(mockLogWriter.writeCalls[2].args).toEqual(['string', { object: true }, [1, 2, 3]])
    expect(mockLogWriter.writeCalls[3].args).toEqual(['string', null, undefined, true, false])
  })

  it('should demonstrate performance improvement with disabled levels (lazy evaluation)', () => {
    // Set up logger with ERROR level only
    const log = Logger.get('perfTest', Level.ERROR)

    // Simulate expensive operations that would happen in real code
    const startTime = performance.now()

    // These should be very fast since they don't execute using lazy evaluation
    for (let i = 0; i < 1000; i++) {
      log.debugLazy(
        () => 'Iteration',
        () => i,
        () => JSON.stringify({ data: new Array(100).fill(i) }),
      )
    }

    const endTime = performance.now()
    const duration = endTime - startTime

    // Should complete very quickly (under 5ms for 1000 iterations)
    expect(duration).toBeLessThan(5)
    expect(mockLogWriter.writeCalls).toHaveLength(0)
  })

  it('should handle level changes correctly (lazy evaluation)', () => {
    // Start with debug logging
    const log = Logger.get('levelTest', Level.DEBUG)

    const expensiveOp = vi.fn(() => 'expensive result')

    // This should call the expensive operation using lazy evaluation
    log.debugLazy(() => 'Test', expensiveOp)
    expect(expensiveOp).toHaveBeenCalledTimes(1)
    expect(mockLogWriter.writeCalls).toHaveLength(1)

    // Change threshold to WARN (disables debug)
    log.options.threshold = Level.WARN
    mockLogWriter.clear()
    expensiveOp.mockClear()

    // This should NOT call the expensive operation using lazy evaluation
    log.debugLazy(() => 'Test2', expensiveOp)
    expect(expensiveOp).not.toHaveBeenCalled()
    expect(mockLogWriter.writeCalls).toHaveLength(0)

    // But warn should still work using lazy evaluation
    log.warnLazy(() => 'Test3', expensiveOp)
    expect(expensiveOp).toHaveBeenCalledTimes(1)
    expect(mockLogWriter.writeCalls).toHaveLength(1)
  })

  it('should optimize regular methods by avoiding spread operator overhead', () => {
    // Set up logger with ERROR level (disables debug, info, warn)
    const log = Logger.get('test', Level.ERROR)

    // Regular methods should not cause expensive argument processing at the method call
    const startTime = performance.now()

    // While these still evaluate arguments, they shouldn't do spread operation until after level check
    for (let i = 0; i < 1000; i++) {
      log.debug('Fast because no spread operation', i)
    }

    const endTime = performance.now()
    const duration = endTime - startTime

    // Should be fast because we avoid spread overhead in writeLog
    expect(duration).toBeLessThan(50) // More lenient since args are still evaluated
    expect(mockLogWriter.writeCalls).toHaveLength(0)
  })
})

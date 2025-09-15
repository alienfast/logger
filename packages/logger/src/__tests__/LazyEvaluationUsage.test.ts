import { beforeEach, describe, expect, it } from 'vitest'

import { Level, Logger } from '../index.js'
import { LogWriter } from '../LogWriter.js'

// Mock LogWriter for demonstration
class DemoLogWriter implements LogWriter {
  public logs: string[] = []

  write(name: string, level: Level, ...args: any[]): void {
    this.logs.push(`[${name}][${Level[level]}] ${args.join(' ')}`)
  }

  clear() {
    this.logs = []
  }
}

describe('Lazy Evaluation Usage Examples', () => {
  let demoLogWriter: DemoLogWriter

  beforeEach(() => {
    demoLogWriter = new DemoLogWriter()
    globalThis.logWriter = demoLogWriter
    globalThis.logs = {}
  })

  it('demonstrates the performance benefit of lazy evaluation', () => {
    // Set up logger with WARN level (disables debug and info)
    const log = Logger.get('performance-demo', Level.WARN)

    // ORIGINAL APPROACH (less optimal):
    // This evaluates expensive operations even when debug is disabled
    const expensiveData = JSON.stringify({ data: new Array(1000).fill('data') })
    log.debug('Expensive data:', expensiveData) // expensiveData is already computed!

    // NEW LAZY APPROACH (optimal):
    // This only evaluates expensive operations when debug logging is enabled
    log.debugLazy(
      () => 'Expensive data:',
      () => JSON.stringify({ data: new Array(1000).fill('data') }),
    )

    // Neither call produces output since debug is disabled
    expect(demoLogWriter.logs).toHaveLength(0)
  })

  it('demonstrates lazy evaluation for complex debugging scenarios', () => {
    // Set up logger with DEBUG level
    const log = Logger.get('complex-demo', Level.DEBUG)

    const userState = { id: 123, name: 'John', permissions: ['read', 'write'] }
    const requestData = { endpoint: '/api/users', method: 'POST' }

    // Traditional approach - arguments are always evaluated
    log.debug(
      'Processing request:',
      `User: ${userState.name}`,
      `Endpoint: ${requestData.endpoint}`,
      `Permissions: ${userState.permissions.join(', ')}`,
    )

    // Lazy approach - arguments are only evaluated when needed
    log.debugLazy(
      () => 'Processing request (lazy):',
      () => `User: ${userState.name}`,
      () => `Endpoint: ${requestData.endpoint}`,
      () => `Permissions: ${userState.permissions.join(', ')}`,
    )

    // Both approaches produce the same output when logging is enabled
    expect(demoLogWriter.logs).toHaveLength(2)
    expect(demoLogWriter.logs[0]).toContain('Processing request:')
    expect(demoLogWriter.logs[1]).toContain('Processing request (lazy):')
  })

  it('demonstrates mixed usage patterns', () => {
    const log = Logger.get('mixed-demo', Level.DEBUG)

    // Simple static strings - use regular methods
    log.info('Application started')
    log.warn('This is a warning')

    // Complex computations - use lazy methods
    log.debugLazy(
      () => 'Complex calculation result:',
      () => Math.pow(2, 20).toString(),
      () => new Date().toISOString(),
    )

    expect(demoLogWriter.logs).toHaveLength(3)
    expect(demoLogWriter.logs[0]).toContain('Application started')
    expect(demoLogWriter.logs[1]).toContain('This is a warning')
    expect(demoLogWriter.logs[2]).toContain('Complex calculation result:')
  })

  it('demonstrates error handling with lazy evaluation', () => {
    const log = Logger.get('error-demo', Level.ERROR)

    const error = new Error('Something went wrong')
    const context = { userId: 123, action: 'updateProfile' }

    // Safe error logging with lazy evaluation
    log.errorLazy(
      () => 'Error occurred:',
      () => error.message,
      () => `Stack: ${error.stack}`,
      () => `Context: ${JSON.stringify(context)}`,
    )

    expect(demoLogWriter.logs).toHaveLength(1)
    expect(demoLogWriter.logs[0]).toContain('Error occurred:')
    expect(demoLogWriter.logs[0]).toContain('Something went wrong')
  })

  it('shows that lazy evaluation prevents side effects', () => {
    const log = Logger.get('side-effect-demo', Level.ERROR) // Only ERROR level enabled

    let sideEffectCounter = 0

    const functionWithSideEffect = () => {
      sideEffectCounter++
      return `Counter: ${sideEffectCounter}`
    }

    // Regular method - side effect occurs even though debug is disabled
    log.debug('Side effect test:', functionWithSideEffect())
    expect(sideEffectCounter).toBe(1) // Side effect happened!

    // Reset counter
    sideEffectCounter = 0

    // Lazy method - side effect is prevented when debug is disabled
    log.debugLazy(() => 'Side effect test (lazy):', functionWithSideEffect)
    expect(sideEffectCounter).toBe(0) // No side effect!

    // Enable debug logging and try again
    log.options.threshold = Level.DEBUG
    log.debugLazy(() => 'Side effect test (lazy enabled):', functionWithSideEffect)
    expect(sideEffectCounter).toBe(1) // Side effect only happens when logging is enabled

    expect(demoLogWriter.logs).toHaveLength(1) // Only the last call produced output
  })
})

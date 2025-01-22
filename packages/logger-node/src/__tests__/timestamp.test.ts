import { describe, expect, it } from 'vitest'

import { timestamp } from '../timestamp.js'

describe('timestamp', () => {
  const date = new Date('2025-01-02T03:04:05.006Z')
  it('should format date', () => {
    expect(timestamp('YYYY-MM-DD HH:mm:ss.ms', false, date)).toBe('2025-01-01 21:04:05.006')
    expect(timestamp('YYYY-MM-DD HH:mm:ss.ms', true, date)).toBe('2025-01-02 03:04:05.006')
    expect(timestamp('HH:mm:ss', false, date)).toBe('21:04:05')
    expect(timestamp('HH:mm:ss', true, date)).toBe('03:04:05')
  })
})

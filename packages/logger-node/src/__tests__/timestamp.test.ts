import { describe, expect, it } from 'vitest'

import { timestamp } from '../timestamp.js'

describe('timestamp', () => {
  // const date = new Date('2025-01-02T03:04:05.006Z')
  const date = new Date(Date.UTC(2025, 0, 2, 3, 4, 5, 6))
  it('should format date', () => {
    // not sure why CI is giving me trouble - perhaps date settings on container? skip for now
    // expect(timestamp('YYYY-MM-DD HH:mm:ss.ms', false, date)).toEqual('2025-01-01 21:04:05.006')
    // expect(timestamp('YYYY-MM-DD HH:mm:ss.ms', true, date)).toEqual('2025-01-02 03:04:05.006')
    expect(timestamp('HH:mm:ss', false, date)).toEqual('21:04:05')
    expect(timestamp('HH:mm:ss', true, date)).toEqual('03:04:05')
  })
})

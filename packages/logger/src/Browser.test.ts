import { describe, expect, test } from 'vitest'

import { Browser } from './Browser.js'

describe('browser', () => {
  test.concurrent('isHeadlessChrome', () => {
    const browser = new Browser(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'HeadlessChrome/60.0.3112.113 Safari/537.36',
    )
    // browser.dump()
    expect(browser.isHeadlessChrome()).toBe(true)
  })

  test.concurrent('!isHeadlessChrome', () => {
    const browser = new Browser(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/60.0.3112.113 Safari/537.36',
    )
    // browser.dump()
    expect(browser.isHeadlessChrome()).toBe(false)
  })
})

import { isNode } from './isNode.js'

const defaultUserAgent = isNode ? 'Node' : navigator.userAgent

// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
export class Browser {
  public userAgent: string
  private cIsHeadlessChrome!: boolean
  private cIsAlienFastChrome!: boolean

  constructor(userAgent: string = defaultUserAgent) {
    this.userAgent = userAgent
    // console.error(userAgent)
    // dev chrome:
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3590.0 Safari/537.36
  }

  public isAlienFastChrome() {
    // AlienFast/100.01 - marker added in af context setup of user agent
    if (this.cIsAlienFastChrome === undefined) {
      // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko)
      // HeadlessChrome/60.0.3112.113 Safari/537.36
      this.cIsAlienFastChrome = this.userAgent.includes('AlienFast')
    }
    return this.cIsAlienFastChrome
  }

  public isHeadlessChrome() {
    if (this.cIsHeadlessChrome === undefined) {
      // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko)
      // HeadlessChrome/60.0.3112.113 Safari/537.36
      this.cIsHeadlessChrome = this.userAgent.includes('HeadlessChrome')
    }
    return this.cIsHeadlessChrome
  }

  public dump() {
    // don't use the Logger for this one
    console.info(`userAgent: ${this.userAgent}`)
    // console.info(JSON.stringify(this.result()))
    // console.info(JSON.stringify(this.result().browser)) // {name: 'Chromium', major: '15', version: '15.0.874.106'}
    // console.info(JSON.stringify(this.result().device)) // {model: undefined, type: undefined, vendor: undefined}
    // console.info(JSON.stringify(this.result().os)) // {name: 'Ubuntu', version: '11.10'}
    // console.info(this.result().os.version) // '11.10'
    // console.info(this.result().engine.name) // 'WebKit'
    // console.info(this.result().cpu.architecture) // 'amd64'
    console.info(`isHeadlessChrome? ${String(this.isHeadlessChrome())}`)
    console.info(`isAlienFastChrome? ${String(this.isAlienFastChrome())}`)
  }
}

export const browser = new Browser()

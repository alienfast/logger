/*!
 * time-stamp <https://github.com/jonschlinkert/time-stamp>
 *
 * Copyright (c) 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
const dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:/]*)/g
const timespan = {
  DD: ['getDate', 2],
  HH: ['getHours', 2],
  MM: ['getMonth', 2, 1], // getMonth is zero-based, thus the extra increment field
  mm: ['getMinutes', 2],
  ms: ['getMilliseconds', 3],
  ss: ['getSeconds', 2],
  YY: ['getFullYear', 2],
  YYYY: ['getFullYear', 4],
} as const

type timespanKeys = keyof typeof timespan

export const timestamp = (format: string, utc: boolean = false, date?: Date) => {
  // if (typeof format !== 'string') {
  //   date = format
  //   format = 'YYYY-MM-DD'
  // }
  if (!date) date = new Date()
  return format.replace(dateRegex, (_match: string, key: timespanKeys, rest) => {
    const args = timespan[key]
    let name: string = args[0]
    const chars = args[1]
    if (utc === true) name = `getUTC${name.slice(3)}`
    const val = `00${String((date as any)[name]() + (args[2] || 0))}`
    return val.slice(-chars) + (rest || '')
  })
}

// timestamp.utc = function (str, date) {
//   return timestamp(str, date, true)
// }

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { objectName } from './objects.js'

function jsonSimplify(v: any, except: string[] = []) {
  const result: any = {}
  Object.getOwnPropertyNames(v).forEach((key) => {
    if (except && !except.includes(key)) {
      result[key] = v[key]
    }
  })
  return result
}

function simplifySyntheticEvent(v: any, name: string) {
  const {
    _dispatchInstances,
    _dispatchListeners,
    _targetInst,
    dispatchConfig,
    nativeEvent,
    view,
    target,
    currentTarget,
    relatedTarget,
    ...rest
  } = v
  return {
    currentTarget: simplifyDom(currentTarget),
    name,
    relatedTarget: simplifyDom(relatedTarget),
    target: simplifyDom(target),
    ...rest,
  }
}

export interface SimplifiedDom {
  id?: string
  name: string
}

function simplifyDom(d?: SimplifiedDom) {
  if (!d) {
    return d
  }
  const result: SimplifiedDom = { name: d.name } // , className: d.className
  if (d.id && d.id.length > 0) {
    result.id = d.id
  }
  return result
}

/**
 * prevents `JSON.stringify cannot serialize cyclic structures`  and tries to prevent `toISOString is not a function`
 * @param o
 */
export function jsonify(o: object): string {
  const seen = new Set<object>()
  return JSON.stringify(o, (k, v) => {
    if (!v) {
      return v
    }

    if (v instanceof Error) {
      seen.add(v)
      return jsonSimplify(v)
    } else if (typeof v === 'function') {
      seen.add(v)
      return '()'
    } else if (typeof v === 'object') {
      const name = objectName(v)
      if (
        name &&
        typeof name === 'string' &&
        name.startsWith('Synthetic') &&
        name.includes('Event')
      ) {
        return simplifySyntheticEvent(v, name)
      } else if (name && v.children) {
        const { children, ...rest } = v
        return { ...rest, children: '{...}' }
      } else {
        if (seen.has(v)) {
          return `__[${name}]__`
        }
        seen.add(v)
      }
    }
    return v
  })
}

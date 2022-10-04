/**
 * Object generators that create various {Iterator}s.
 */

/**
 * This is a generator for a generic hash/object to use in a for..of loop
 * The asterisk after `function` means that it is a generator
 *
 * for (let [key,value] of iterator(obj)) {
 *   console.log(`${key}: ${value}`)
 * }
 *
 * @param obj
 * @returns Iterator<any>
 * @see http:*www.2ality.com/2015/03/es6-generators.html
 * @see https:*github.com/microsoft/TypeScript/blob/main/lib/lib.es2015.iterable.d.ts#L41
 */
export function* iterator(obj: object) {
  const propKeys = Reflect.ownKeys(obj)

  for (const propKey of propKeys) {
    // * `yield` returns a value and then pauses the generator. Later, execution continues where it was previously paused.
    yield [propKey, obj[propKey]]
  }
}

/**
 * This is a generator for a generic hash/object to use in a for..of loop
 * The asterisk after `function` means that it is a generator
 *
 * @param obj
 * @returns Iterator<string | symbol>
 * @see http:*www.2ality.com/2015/03/es6-generators.html
 * @see https:*github.com/microsoft/TypeScript/blob/main/lib/lib.es2015.iterable.d.ts#L41
 */
export function* keys(obj: object): Iterator<string | symbol> {
  const propKeys = Reflect.ownKeys(obj)

  for (const propKey of propKeys) {
    // * `yield` returns a value and then pauses the generator. Later, execution continues where it was previously paused.
    yield propKey
  }
}

/**
 * This is a generator for a generic hash/object to use in a for..of loop
 * The asterisk after `function` means that it is a generator
 *
 * @param obj
 * @returns Iterator<any>
 * @see http:*www.2ality.com/2015/03/es6-generators.html
 * @see https:*github.com/microsoft/TypeScript/blob/main/lib/lib.es2015.iterable.d.ts#L41
 */
export function* values(obj: object) {
  const propKeys = Reflect.ownKeys(obj)

  for (const propKey of propKeys) {
    // * `yield` returns a value and then pauses the generator. Later, execution continues where it was previously paused.
    yield obj[propKey]
  }
}

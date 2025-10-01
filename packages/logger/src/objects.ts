/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export function objectName(object: object | string): string {
  // if (!object) {
  //   return String(object)
  // }

  if (typeof object === 'string' || object instanceof String) {
    return object as string
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (object as any).displayName || (object as any).name || object.constructor?.name
  }
}

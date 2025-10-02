/** biome-ignore-all lint/complexity/useOptionalChain: this needs to carefully run in both node and browser environments */
export const isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node

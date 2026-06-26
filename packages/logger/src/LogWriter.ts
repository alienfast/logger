import type { Level } from './Level.ts'

export interface LogWriter {
  write(name: string, level: Level, ...args: any[]): void
}

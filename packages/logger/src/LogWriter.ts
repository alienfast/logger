import { Level } from './Level.js'

export interface LogWriter {
  write(name: string, level: Level, ...args: any[]): void
}

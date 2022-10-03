import { Level } from './Level'

export interface LogWriter {
  write(name: string, level: Level, ...args: any[]): void
}

import { redactPersonalData } from "./redact";

export type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<LogLevel, number> = { debug: 10, info: 20, warn: 30, error: 40 };

export interface LogSink {
  write(line: string): void;
}

export class Logger {
  constructor(
    private readonly minLevel: LogLevel,
    private readonly sink: LogSink = { write: (line) => process.stdout.write(line + "\n") },
    private readonly baseFields: Record<string, unknown> = {},
  ) {}

  child(fields: Record<string, unknown>): Logger {
    return new Logger(this.minLevel, this.sink, { ...this.baseFields, ...fields });
  }

  log(level: LogLevel, message: string, fields: Record<string, unknown> = {}): void {
    if (LEVEL_ORDER[level] < LEVEL_ORDER[this.minLevel]) return;
    const entry = {
      ts: new Date().toISOString(),
      level,
      msg: message,
      ...(redactPersonalData({ ...this.baseFields, ...fields }) as Record<string, unknown>),
    };
    this.sink.write(JSON.stringify(entry));
  }

  debug(message: string, fields?: Record<string, unknown>): void {
    this.log("debug", message, fields);
  }

  info(message: string, fields?: Record<string, unknown>): void {
    this.log("info", message, fields);
  }

  warn(message: string, fields?: Record<string, unknown>): void {
    this.log("warn", message, fields);
  }

  error(message: string, fields?: Record<string, unknown>): void {
    this.log("error", message, fields);
  }
}

export const rootLogger = new Logger((process.env.HARBOR_LOG_LEVEL as LogLevel) ?? "info");

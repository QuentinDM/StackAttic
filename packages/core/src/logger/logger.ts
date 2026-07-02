import type { ReadonlyRecord } from "../types";

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogContext extends ReadonlyRecord {}

export interface Logger {
  debug(message: string, context?: LogContext): void;
  info(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  error(message: string, context?: LogContext): void;
}

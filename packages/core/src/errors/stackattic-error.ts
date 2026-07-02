export interface StackAtticErrorOptions {
  readonly code: string;
  readonly cause?: unknown;
  readonly details?: unknown;
}

export class StackAtticError extends Error {
  readonly code: string;
  readonly details?: unknown;

  constructor(message: string, options: StackAtticErrorOptions) {
    super(message, { cause: options.cause });
    this.name = new.target.name;
    this.code = options.code;
    this.details = options.details;
  }
}

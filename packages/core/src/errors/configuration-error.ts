import { StackAtticError } from "./stackattic-error";

export class ConfigurationError extends StackAtticError {
  constructor(message: string, cause?: unknown) {
    super(message, {
      cause,
      code: "configuration_error",
    });
  }
}

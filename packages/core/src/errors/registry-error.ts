import { StackAtticError } from "./stackattic-error";

export class RegistryError extends StackAtticError {
  constructor(message: string, cause?: unknown) {
    super(message, {
      cause,
      code: "registry_error",
    });
  }
}

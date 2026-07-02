import { StackAtticError } from "./stackattic-error";

export class ModuleError extends StackAtticError {
  constructor(
    message: string,
    cause?: unknown,
    code = "module_error",
  ) {
    super(message, {
      cause,
      code,
    });
  }
}

export class ModuleRegistrationError extends ModuleError {
  constructor(message: string, cause?: unknown) {
    super(message, cause, "module_registration_error");
  }
}

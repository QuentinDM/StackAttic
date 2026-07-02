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

export class ModuleBootError extends ModuleError {
  constructor(message: string, cause?: unknown) {
    super(message, cause, "module_boot_error");
  }
}

export class ModuleShutdownError extends ModuleError {
  constructor(message: string, cause?: unknown) {
    super(message, cause, "module_shutdown_error");
  }
}

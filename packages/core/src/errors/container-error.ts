import { StackAtticError } from "./stackattic-error";

export class ContainerError extends StackAtticError {
  constructor(
    message: string,
    cause?: unknown,
    code = "container_error",
  ) {
    super(message, {
      cause,
      code,
    });
  }
}

export class DependencyResolutionError extends ContainerError {
  constructor(message: string, cause?: unknown) {
    super(message, cause, "dependency_resolution_error");
  }
}

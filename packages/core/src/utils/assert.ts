import { StackAtticError } from "../errors";

export function assert(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new StackAtticError(message, {
      code: "assertion_error",
    });
  }
}

import { StackAtticError } from "./stackattic-error";

export class EventBusError extends StackAtticError {
  constructor(message: string, cause?: unknown) {
    super(message, {
      cause,
      code: "event_bus_error",
    });
  }
}

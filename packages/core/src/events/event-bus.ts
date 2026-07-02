import type { MaybePromise, ReadonlyRecord } from "../types";

export interface StackAtticEvent<TPayload extends ReadonlyRecord = ReadonlyRecord> {
  readonly name: string;
  readonly payload: TPayload;
  readonly occurredAt: Date;
}

export type EventHandler<TEvent extends StackAtticEvent = StackAtticEvent> = (
  event: TEvent,
) => MaybePromise<void>;

export interface EventSubscription {
  unsubscribe(): void;
}

export interface EventBus {
  publish<TEvent extends StackAtticEvent>(event: TEvent): MaybePromise<void>;
  subscribe<TEvent extends StackAtticEvent>(
    eventName: TEvent["name"],
    handler: EventHandler<TEvent>,
  ): EventSubscription;
}

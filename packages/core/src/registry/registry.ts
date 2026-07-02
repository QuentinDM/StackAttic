import type { StackAtticId } from "../types";

export interface RegistryEntry<TValue = unknown> {
  readonly id: StackAtticId;
  readonly value: TValue;
}

export interface Registry<TValue = unknown> {
  has(id: StackAtticId): boolean;
  get(id: StackAtticId): TValue | undefined;
  list(): readonly RegistryEntry<TValue>[];
}

export interface MutableRegistry<TValue = unknown> extends Registry<TValue> {
  register(entry: RegistryEntry<TValue>): void;
}

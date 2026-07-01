export type EntityId = string;

export type ISODateString = string;

export type Result<TValue, TError = string> =
  | { ok: true; value: TValue }
  | { ok: false; error: TError };

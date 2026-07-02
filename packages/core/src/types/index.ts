export type StackAtticId = string;

export type MaybePromise<TValue> = TValue | Promise<TValue>;

export type Constructor<TInstance = unknown> = new (...args: never[]) => TInstance;

export type ReadonlyRecord<TValue = unknown> = Readonly<Record<string, TValue>>;

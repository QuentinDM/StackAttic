import type { MaybePromise, ReadonlyRecord, StackAtticId } from "../types";

export type ModuleName = StackAtticId;

export interface StackAtticModuleMetadata {
  readonly name: ModuleName;
  readonly version?: string;
  readonly dependencies?: readonly ModuleName[];
}

export interface StackAtticModule<TContext = unknown> {
  readonly metadata: StackAtticModuleMetadata;
  register?(context: TContext): MaybePromise<void>;
  boot?(context: TContext): MaybePromise<void>;
  shutdown?(context: TContext): MaybePromise<void>;
}

export interface ModuleDefinition<TOptions extends ReadonlyRecord = ReadonlyRecord> {
  readonly metadata: StackAtticModuleMetadata;
  readonly defaultOptions?: TOptions;
}

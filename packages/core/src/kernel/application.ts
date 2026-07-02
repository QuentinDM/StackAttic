import {
  ModuleBootError,
  ModuleRegistrationError,
  ModuleShutdownError,
} from "../errors";
import type { StackAtticModule } from "../modules";

export type ApplicationState =
  | "idle"
  | "booting"
  | "booted"
  | "shutting-down"
  | "shutdown";

export interface StackAtticApplication<TContext = undefined> {
  readonly state: ApplicationState;
  register(module: StackAtticModule<TContext>): this;
  boot(): Promise<void>;
  shutdown(): Promise<void>;
  getModules(): readonly StackAtticModule<TContext>[];
}

export interface StackAtticKernelOptions<TContext = undefined> {
  readonly context?: TContext;
}

export function createStackAttic<TContext = undefined>(
  options: StackAtticKernelOptions<TContext> = {},
): StackAtticApplication<TContext> {
  return new ApplicationKernel(options.context as TContext);
}

class ApplicationKernel<TContext = undefined>
  implements StackAtticApplication<TContext>
{
  readonly #context: TContext;
  readonly #modules = new Map<string, StackAtticModule<TContext>>();
  #state: ApplicationState = "idle";

  constructor(context: TContext) {
    this.#context = context;
  }

  get state() {
    return this.#state;
  }

  register(module: StackAtticModule<TContext>) {
    if (this.#state !== "idle") {
      throw new ModuleRegistrationError(
        "Modules can only be registered before the application boots.",
      );
    }

    const { name } = module.metadata;

    if (this.#modules.has(name)) {
      throw new ModuleRegistrationError(
        `A module named "${name}" is already registered.`,
      );
    }

    this.#modules.set(name, module);

    return this;
  }

  async boot() {
    if (this.#state === "booted") {
      return;
    }

    if (this.#state !== "idle") {
      throw new ModuleBootError(
        `Application cannot boot from "${this.#state}" state.`,
      );
    }

    this.#assertDependencies();
    this.#state = "booting";

    try {
      for (const module of this.#modules.values()) {
        await module.register?.(this.#context);
      }

      for (const module of this.#modules.values()) {
        await module.boot?.(this.#context);
      }

      this.#state = "booted";
    } catch (error) {
      this.#state = "idle";
      throw new ModuleBootError("Application failed to boot.", error);
    }
  }

  async shutdown() {
    if (this.#state === "shutdown" || this.#state === "idle") {
      this.#state = "shutdown";
      return;
    }

    if (this.#state !== "booted") {
      throw new ModuleShutdownError(
        `Application cannot shutdown from "${this.#state}" state.`,
      );
    }

    this.#state = "shutting-down";

    try {
      const modules = [...this.#modules.values()].reverse();

      for (const module of modules) {
        await module.shutdown?.(this.#context);
      }

      this.#state = "shutdown";
    } catch (error) {
      this.#state = "booted";
      throw new ModuleShutdownError("Application failed to shutdown.", error);
    }
  }

  getModules() {
    return [...this.#modules.values()];
  }

  #assertDependencies() {
    for (const module of this.#modules.values()) {
      for (const dependency of module.metadata.dependencies ?? []) {
        if (!this.#modules.has(dependency)) {
          throw new ModuleBootError(
            `Module "${module.metadata.name}" depends on missing module "${dependency}".`,
          );
        }
      }
    }
  }
}

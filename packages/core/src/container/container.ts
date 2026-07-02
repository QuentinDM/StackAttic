export type ServiceToken<TService = unknown> = symbol | string;

export interface ServiceDescriptor<TService = unknown> {
  readonly token: ServiceToken<TService>;
  readonly factory: (container: DependencyContainer) => TService;
  readonly lifetime?: ServiceLifetime;
}

export type ServiceLifetime = "singleton" | "transient";

export interface DependencyContainer {
  has<TService>(token: ServiceToken<TService>): boolean;
  resolve<TService>(token: ServiceToken<TService>): TService;
}

export interface MutableDependencyContainer extends DependencyContainer {
  register<TService>(descriptor: ServiceDescriptor<TService>): void;
}

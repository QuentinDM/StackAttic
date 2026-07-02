# @stackattic/core

Core framework contracts for StackAttic.

This package contains no business logic and has no dependency on Next.js or React.

## Scope

- module contracts
- dependency container contracts
- registry contracts
- event bus contracts
- logger contracts
- framework error hierarchy
- shared utility types

Concrete implementations will be added progressively by dedicated packages or future core iterations.

## Application Kernel

```ts
import { createStackAttic } from "@stackattic/core";

const app = createStackAttic();

app.register(myModule);

await app.boot();
await app.shutdown();
```

The Kernel only orchestrates module lifecycle hooks. It does not know any concrete module and contains no business logic.

# Architecture StackAttic

StackAttic est organise en monorepo pour separer clairement l'application, les packages partages et les futurs modules.

## Principes

- Les apps consomment les packages publics `@stackattic/*`.
- Les features applicatives vivent dans `apps/web/src/features`.
- Les composants UI reutilisables vivent dans `packages/ui`.
- Les conventions partagees vivent dans `packages/config`.
- L'acces Prisma est centralise dans `packages/db`.

## Evolution vers les modules

Les domaines importants pourront migrer progressivement vers des packages dedies comme `@stackattic/auth`, `@stackattic/billing` ou `@stackattic/notifications`.

La regle actuelle est simple : une feature reste dans l'app tant qu'elle depend fortement du produit. Elle devient un package quand son API est stable et utile a plusieurs apps.

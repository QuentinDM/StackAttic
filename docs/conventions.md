# Conventions de developpement

## TypeScript

Le projet utilise TypeScript strict partout. Les packages partagent la configuration depuis `@stackattic/config`.

## Features

Une feature peut contenir :

- `components`
- `hooks`
- `actions`
- `services`
- `schemas`
- `types`
- `utils`

Eviter les dossiers globaux par type de fichier dans l'application.

## Validation

Les entrees utilisateur et les variables d'environnement doivent etre validees avec Zod.

Le secret BetterAuth de developpement permet de lancer le projet sans `.env`.
En production, `BETTER_AUTH_SECRET` doit toujours etre defini avec une valeur longue et aleatoire.

## Dependances

Avant d'ajouter une dependance, verifier si Next.js, React ou une API deja presente permet de resoudre le besoin simplement.

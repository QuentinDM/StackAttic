# StackAttic

StackAttic est une fondation open source pour creer des applications SaaS modernes avec Next.js, TypeScript, Prisma et une architecture modulaire.

## Demarrage

```bash
corepack enable
pnpm install
pnpm dev
```

L'application web demarre dans `apps/web`.

Node.js 20 LTS ou 22 LTS est recommande pour rester aligne avec Prisma et Next.js.

## Structure

```text
apps/
  web/
packages/
  config/
  db/
  types/
  ui/
  utils/
docs/
```

Les fonctionnalites applicatives doivent etre organisees par domaine dans `features/*`.

## Base technique

- Next.js App Router
- TypeScript strict
- Tailwind CSS
- shadcn/ui compatible via `packages/ui`
- Prisma et PostgreSQL
- BetterAuth
- TurboRepo et pnpm workspaces

## Base de donnees locale

```bash
docker compose up -d
cp .env.example .env
pnpm db:generate
pnpm db:migrate
```

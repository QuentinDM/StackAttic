import { ArrowRight, Boxes, Layers3, LockKeyhole, Sparkles } from "lucide-react";

import { Button } from "@stackattic/ui/button";

const foundations = [
  {
    title: "Monorepo modulaire",
    description:
      "Apps et packages sont separes pour preparer les futurs modules @stackattic/*.",
    icon: Boxes,
  },
  {
    title: "Feature-first",
    description:
      "Chaque domaine peut posseder ses composants, schemas, actions et services.",
    icon: Layers3,
  },
  {
    title: "Production-ready",
    description:
      "TypeScript strict, validation Zod, Prisma, BetterAuth et conventions partagees.",
    icon: LockKeyhole,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6">
        <header className="flex items-center justify-between border-b border-border pb-5">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-md bg-foreground text-background">
              <Sparkles className="size-4" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold tracking-normal">
              StackAttic
            </span>
          </div>
          <Button variant="outline" size="sm">
            GitHub
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        </header>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Fondation open source pour SaaS modernes
            </p>
            <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
              Construire des applications metier sans repartir de zero.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              StackAttic pose une architecture Next.js claire, testable et
              evolutive pour CRM, ERP, LMS, outils internes et plateformes SaaS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                Explorer la base
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="ghost">Lire la documentation</Button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-4 shadow-sm">
            <div className="grid gap-3">
              {foundations.map((item) => (
                <article
                  className="rounded-md border border-border bg-background p-4"
                  key={item.title}
                >
                  <div className="mb-3 flex size-9 items-center justify-center rounded-md bg-muted">
                    <item.icon className="size-4" aria-hidden="true" />
                  </div>
                  <h2 className="text-sm font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

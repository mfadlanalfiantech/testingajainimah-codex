import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredWorks } from "@/lib/data";

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const work = featuredWorks.find((item) => item.slug === params.slug);
  if (!work) return { title: "Work" };
  return {
    title: work.title,
    description: work.description
  };
}

export default function WorkDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const work = featuredWorks.find((item) => item.slug === params.slug);
  if (!work) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <ScrollReveal>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Case Study
            </p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">
              {work.title}
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          <Link href="/work" className={buttonVariants({ variant: "outline" })}>
            Back to Work
          </Link>
        </div>
      </ScrollReveal>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <Card className="p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Role
          </p>
          <p className="mt-3 text-sm font-semibold">{work.role}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Timeframe
          </p>
          <p className="mt-3 text-sm font-semibold">{work.timeframe}</p>
        </Card>
        <Card className="p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Metrics
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {work.metrics.map((metric) => (
              <Badge key={metric} className="bg-primary/10 text-primary">
                {metric}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-12 space-y-8">
        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Problem
            </p>
            <p className="mt-3 text-base text-muted-foreground">{work.problem}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Constraints
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {work.constraints.map((constraint) => (
                <li key={constraint}>{constraint}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Approach
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {work.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Wireframe
              </p>
              <div className="mt-4 h-48 rounded-xl bg-gradient-to-br from-muted via-background to-muted" />
              <p className="mt-3 text-sm text-muted-foreground">
                Placeholder wireframe untuk struktur layout utama.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Final UI
              </p>
              <div className="mt-4 h-48 rounded-xl bg-gradient-to-br from-primary/30 via-muted to-background" />
              <p className="mt-3 text-sm text-muted-foreground">
                Visual final yang menekankan trust cues dan fokus aksi.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Results
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
              {work.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

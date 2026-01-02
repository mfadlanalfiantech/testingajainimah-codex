import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { featuredWorks, processSteps, worksGallery } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              UI/UX Portfolio
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Editorial showcase untuk produk digital yang elegan, cepat, dan
              relevan.
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="max-w-xl text-base text-muted-foreground">
              Studio Nira menghadirkan pengalaman end-to-end dari discovery
              sampai delivery. Setiap case study menampilkan proses, insight,
              dan dampak bisnis yang terukur.
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex flex-wrap items-center gap-4">
            <Link href="/work" className={buttonVariants({ size: "lg" })}>
              Lihat karya
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Mulai kolaborasi
            </Link>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-muted p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Availability
              </p>
              <p className="mt-4 text-2xl font-semibold">Now booking Q3</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Fokus pada produk SaaS, marketplace, dan fintech.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Capabilities
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>UX Research · Journey Mapping</p>
                <p>Design Systems · Component Strategy</p>
                <p>Motion Prototyping · UX Writing</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mt-20 space-y-8">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Featured Works
              </p>
              <h2 className="font-display text-3xl font-semibold">
                Karya unggulan terbaru
              </h2>
            </div>
            <Link href="/work" className={buttonVariants({ variant: "ghost" })}>
              View all
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredWorks.map((work) => (
            <ProjectCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-8">
        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Works Gallery
            </p>
            <h2 className="font-display text-3xl font-semibold">
              Eksplorasi visual & modul desain
            </h2>
          </div>
        </ScrollReveal>
        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {worksGallery.map((item) => (
            <ScrollReveal key={item}>
              <div
                className=\"break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated\"
              >
                <p className="text-sm text-muted-foreground">{item}</p>
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-br from-muted via-background to-muted" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mt-20 space-y-8">
        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Process
            </p>
            <h2 className="font-display text-3xl font-semibold">
              Framework kerja berulang untuk hasil konsisten
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <ScrollReveal key={step.title}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  {step.title}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About",
  description: "Tentang Studio Nira dan pendekatan UI/UX editorial."
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <ScrollReveal>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Merancang sistem visual yang terasa manusiawi.
          </h1>
          <p className="text-base text-muted-foreground">
            Studio Nira adalah practice UI/UX dengan fokus pada editorial layout,
            sistem desain modular, dan motion yang subtle. Kami bekerja bersama
            tim produk untuk mengubah kompleksitas menjadi pengalaman yang
            sederhana.
          </p>
        </div>
      </ScrollReveal>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal>
          <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-2xl font-semibold">
              Core focus
            </h2>
            <p className="text-sm text-muted-foreground">
              Kami percaya bahwa desain terbaik hadir dari kolaborasi lintas
              fungsi. Setiap proyek berangkat dari data dan insight nyata.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Design Systems",
                "Product Strategy",
                "UX Writing",
                "Motion Design"
              ].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-4 rounded-2xl border border-border bg-muted p-6">
            <h2 className="font-display text-2xl font-semibold">Principles</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Clarity over ornament.</li>
              <li>Speed with craft.</li>
              <li>Accessibility by default.</li>
              <li>Measured outcomes.</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Kontak Studio Nira untuk kolaborasi UI/UX."
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <ScrollReveal>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Mari bangun pengalaman yang berkesan.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Bagikan brief, scope, dan target KPI. Kami akan merespons dalam 48
            jam kerja.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <form className="mt-12 space-y-6 rounded-2xl border border-border bg-card p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Nama
              <input
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Nama lengkap"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Email
              <input
                type="email"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="email@company.com"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium">
            Project brief
            <textarea
              className="min-h-[140px] w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Ceritakan kebutuhan desain, timeline, dan target KPI"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>Anda juga bisa mengirim brief langsung ke hello@studionira.com</p>
            <Button type="submit">Kirim brief</Button>
          </div>
        </form>
      </ScrollReveal>
    </div>
  );
}

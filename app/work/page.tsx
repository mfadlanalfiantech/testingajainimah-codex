import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WorkList } from "@/components/work-list";

export const metadata: Metadata = {
  title: "Work",
  description: "Case study UI/UX, filterable work list, dan hasil design impact."
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <ScrollReveal>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Work
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Studi kasus dengan hasil terukur
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Setiap proyek fokus pada value bisnis dan pengalaman pengguna yang
            lebih intuitif. Gunakan filter untuk melihat kategori yang relevan.
          </p>
        </div>
      </ScrollReveal>
      <div className="mt-12">
        <WorkList />
      </div>
    </div>
  );
}

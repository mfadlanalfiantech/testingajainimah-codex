import type { Metadata } from "next";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ScrollReveal } from "@/components/scroll-reveal";
import { systemDesignCases } from "@/lib/data";

export const metadata: Metadata = {
  title: "System Design",
  description: "Design case dengan diagram Mermaid dan tradeoff table."
};

export default function SystemDesignPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <ScrollReveal>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            System Design
          </p>
          <h1 className="font-display text-4xl font-semibold md:text-5xl">
            Architecture thinking untuk produk berskala
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Dua studi sistem design untuk memperlihatkan bagaimana keputusan
            arsitektural memengaruhi pengalaman pengguna dan operasi design.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-12">
        {systemDesignCases.map((designCase) => (
          <ScrollReveal key={designCase.title}>
            <section className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {designCase.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {designCase.summary}
                </p>
              </div>
              <MermaidDiagram chart={designCase.diagram} />
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Decision</th>
                      <th className="px-4 py-3">Upside</th>
                      <th className="px-4 py-3">Tradeoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designCase.tradeoffs.map((tradeoff) => (
                      <tr key={tradeoff.decision} className="border-t border-border">
                        <td className="px-4 py-3 font-medium">
                          {tradeoff.decision}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {tradeoff.upside}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {tradeoff.downside}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

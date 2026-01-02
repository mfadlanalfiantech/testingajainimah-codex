"use client";

import { useEffect, useId, useRef } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      if (!isMounted || !containerRef.current) return;

      mermaid.initialize({ startOnLoad: false, theme: "neutral" });
      containerRef.current.innerHTML = chart;
      await mermaid.run({ nodes: [containerRef.current] });
    }

    render();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      id={`mermaid-${id}`}
      ref={containerRef}
      className="mermaid rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground"
    />
  );
}

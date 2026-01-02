"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { featuredWorks } from "@/lib/data";

const filters = ["All", "Mobile", "SaaS", "EdTech", "E-commerce", "B2B"];

export function WorkList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const works = useMemo(() => {
    if (activeFilter === "All") return featuredWorks;
    return featuredWorks.filter((work) => work.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              activeFilter === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-muted"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {works.map((work) => (
          <ProjectCard key={work.slug} work={work} />
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Filter aktif:
          <Badge className="ml-3 bg-primary/10 text-primary">
            {activeFilter}
          </Badge>
        </p>
      </div>
    </div>
  );
}

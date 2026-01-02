"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Work } from "@/lib/data";

export function ProjectCard({ work, className }: { work: Work; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Link href={`/work/${work.slug}`} className="group block h-full">
        <Card className="flex h-full flex-col transition duration-300 group-hover:-translate-y-1 group-hover:shadow-elevated">
          <div className="h-40 rounded-t-2xl bg-gradient-to-br from-muted via-background to-muted px-6 py-5">
            <div className="flex h-full flex-col justify-between">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {work.role}
              </p>
              <div>
                <p className="text-sm text-muted-foreground">{work.preview}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 px-6 py-6">
            <div>
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{work.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              {work.metrics.map((metric) => (
                <Badge key={metric} className="bg-primary/10 text-primary">
                  {metric}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

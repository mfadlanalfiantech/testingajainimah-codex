"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { navigationLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const defaultCommands = navigationLinks.map((link) => ({
  label: link.label,
  shortcut: link.label === "Home" ? "H" : link.label[0],
  href: link.href
}));

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCmdK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isCmdK) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const commands = useMemo(() => {
    if (!query) return defaultCommands;
    return defaultCommands.filter((command) =>
      command.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 px-4 py-20"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-border bg-card shadow-elevated"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-border px-5 py-4">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari halaman..."
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
            aria-label="Search command"
          />
        </div>
        <div className="max-h-72 overflow-y-auto px-3 py-2">
          {commands.length === 0 ? (
            <p className="px-3 py-6 text-sm text-muted-foreground">
              Tidak ada hasil. Coba kata kunci lain.
            </p>
          ) : (
            <ul className="space-y-1">
              {commands.map((command) => (
                <li key={command.href}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    )}
                    onClick={() => {
                      router.push(command.href);
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span>{command.label}</span>
                    <span className="rounded-lg bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {command.shortcut}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
          <span>Tekan Esc untuk menutup</span>
          <span>Cmd/Ctrl + K</span>
        </div>
      </div>
    </div>
  );
}

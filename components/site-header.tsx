import Link from "next/link";
import { navigationLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Studio Nira
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted-foreground md:block">
            Cmd/Ctrl + K
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

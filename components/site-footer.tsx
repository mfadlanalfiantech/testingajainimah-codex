export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row">
        <div>
          <p className="text-sm font-semibold">Studio Nira</p>
          <p className="text-xs text-muted-foreground">
            UI/UX portfolio crafted for modern product teams.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2024 Studio Nira. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

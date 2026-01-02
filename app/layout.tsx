import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CommandPalette } from "@/components/command-palette";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: {
    default: "Studio Nira · UI/UX Portfolio",
    template: "%s · Studio Nira"
  },
  description:
    "Portfolio UI/UX showcase dengan studi kasus, sistem desain, dan proses kreatif.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Studio Nira · UI/UX Portfolio",
    description:
      "Editorial portfolio dengan karya UI/UX, studi kasus sistem desain, dan galeri proses.",
    url: "https://example.com",
    siteName: "Studio Nira",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "UI/UX portfolio preview"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Nira · UI/UX Portfolio",
    description:
      "Editorial portfolio dengan karya UI/UX, studi kasus sistem desain, dan galeri proses.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}

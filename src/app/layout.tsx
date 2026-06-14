import type { Metadata } from "next";
import { Sora, Fraunces } from "next/font/google";
import "./globals.css";
import { org } from "@/data/site";

// Display: Fraunces — a warm, high-contrast serif that reads as humane and
// trustworthy (not the default Inter/Playfair pairing). Body: Sora — a
// geometric sans with personality for clean, modern reading.
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});
const sans = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kashimariyouthsociety.org"),
  title: {
    default: `${org.name} — ${org.tagline}`,
    template: `%s — ${org.name}`,
  },
  description:
    "Kashimari Youth Society is a youth-led social welfare organization preventing child marriage, drug abuse and harassment while promoting education and positive social change.",
  keywords: ["NGO", "youth society", "social welfare", "Kashimari", "Bangladesh", "child marriage prevention", "community development"],
  openGraph: {
    title: `${org.name} — ${org.tagline}`,
    description: "A youth-led social welfare organization building a safe, educated and progressive society.",
    type: "website",
    locale: "en_US",
    siteName: org.name,
  },
  twitter: { card: "summary_large_image", title: org.name, description: org.tagline },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

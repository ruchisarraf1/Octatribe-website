import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import prisma from "@/lib/prisma";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export async function generateMetadata(): Promise<Metadata> {
  let settings = null;
  try {
    settings = await (prisma as any).siteSettings?.findFirst({ where: { id: 1 } });
  } catch (e) {
    console.error("SEO Metadata fetch failed:", e);
  }

  const title = settings?.metaTitle || "OctaTribe | Transforming Business With Technology";
  const description = settings?.metaDescription || "Cutting-edge digital solutions to transform your business.";

  return {
    title,
    description,
    keywords: ["App Development", "AI Agents", "Digital Marketing", "OctaTribe", "Software Solutions"],
    authors: [{ name: "OctaTribe Team" }],
    openGraph: {
      title,
      description,
      url: "https://octatribe.com",
      siteName: "OctaTribe",
      locale: "en_US",
      type: "website",
    },
  };
}

import { ThemeProvider } from "@/components/theme-provider";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

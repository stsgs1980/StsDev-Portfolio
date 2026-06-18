import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "StsDev — Stanislav Graur | AI Enthusiast",
  description:
    "Portfolio of Stanislav Graur (StsDev). AI-энтузиаст с 20+ годами в бизнесе. Мультиагентные системы, автоматизация, дизайн-системы.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${jetbrainsMono.variable} ${cormorantGaramond.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
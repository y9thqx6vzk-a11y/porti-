import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eyal Granot | Data-Driven Operations Manager & Process Architect",
  description:
    "Explore the professional portfolio of Eyal Granot, a Data-Driven Operations Manager & Process Architect bridging the gap between complex physical logistics and digital automation using AI and system architecture.",
  keywords: [
    "Eyal Granot",
    "Portfolio",
    "Operations Manager",
    "Process Architect",
    "Data-Driven Operations",
    "System Architecture",
    "Logistics Automation",
    "Ben-Gurion University Mathematics",
    "B2B Operations",
  ],
  authors: [{ name: "Eyal Granot" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent theme flashing on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

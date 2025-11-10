import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Velocity - Ship Faster, Scale Smarter",
  description: "Velocity helps teams ship MVPs faster with AI-powered code generation. Build production-ready apps in minutes, not months.",
  keywords: ["MVP development", "AI code generation", "rapid prototyping", "developer platform", "startup tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-body text-body antialiased`} style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}

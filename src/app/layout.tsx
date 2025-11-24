import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZDevStudio - Lean, AI-Powered Apps",
  description: "Building lean, AI-powered applications for real people. Modern tech studio creating innovative solutions.",
  keywords: ["ZDevStudio", "AI apps", "software development", "tech studio", "lean apps"],
  authors: [{ name: "ZDevStudio LLC" }],
  openGraph: {
    title: "ZDevStudio - Lean, AI-Powered Apps",
    description: "Building lean, AI-powered applications for real people.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

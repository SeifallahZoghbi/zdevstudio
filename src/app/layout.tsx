import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZDevStudio – Apps for everyday life",
  description:
    "ZDevStudio is a small studio that builds calm, thoughtful apps based on what our team feels genuinely adds value to everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

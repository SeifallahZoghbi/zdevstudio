"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#what-we-build", label: "What we build" },
  { href: "#how-we-decide", label: "How we decide" },
  { href: "#apps", label: "Examples" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <Image
              src="/logo-zdev.svg"
              alt="ZDevStudio logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              ZDevStudio
            </span>
            <span className="text-xs text-slate-500">Apps for everyday life</span>
          </div>
        </Link>

        <button
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
          <span className="text-slate-400">{open ? "–" : "+"}</span>
        </button>

        <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-slate-50 px-4 pb-3 pt-2 text-sm text-slate-700 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

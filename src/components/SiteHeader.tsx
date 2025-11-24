"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#how-we-work", label: "How We Work" },
  { href: "#what-we-build", label: "What We Build" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: '#FFFFFF',
      borderBottom: '1px solid #DEE2E6',
      padding: '20px 40px',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#212529',
          textDecoration: 'none'
        }}>
          ZDevStudio
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          display: 'flex',
          gap: '30px'
        }} className="hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: '16px',
                color: '#6C757D',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0D6EFD'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6C757D'}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px'
          }}
          className="md:hidden block"
        >
          <span style={{ width: '25px', height: '2px', background: '#212529' }}></span>
          <span style={{ width: '25px', height: '2px', background: '#212529' }}></span>
          <span style={{ width: '25px', height: '2px', background: '#212529' }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #DEE2E6'
        }} className="md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '16px',
                color: '#6C757D',
                textDecoration: 'none'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

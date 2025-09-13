"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import BrandAnimation from "./BrandAnimation";

const links = [
  { href: "/", label: "Home" },
  { href: "/ai-chat", label: "AI Chat" },
  { href: "/meddata", label: "MedData" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Sync dark mode with system preference and persist across reloads
  const [darkMode, setDarkMode] = useState(true);
  const [showBrandAnim, setShowBrandAnim] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme-dark", "true");
    }
  }, []);

  return (
    <>
      {showBrandAnim && <BrandAnimation onClose={() => setShowBrandAnim(false)} />}
      <nav className="bg-night border-b border-brand/20 px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-brand"
          style={{ fontFamily: 'Arial, Helvetica, sans-serif', cursor: 'pointer' }}
          onDoubleClick={() => setShowBrandAnim(true)}
        >
          MedSecure AI
        </h1>
        {/* Links in black box with semi-circular sides */}
        <div className="flex items-center">
          <div className="bg-black rounded-full px-8 py-2 flex space-x-8 shadow-md" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            {links.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold text-lg flex items-center gap-2 transition navbar-feature-link ${
                  pathname === link.href
                    ? "text-brand border-b-2 border-brand"
                    : "text-gray-100 hover:text-brand"
                } pb-1`}
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                {/* SVG logo before each link */}
                {idx === 0 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10L10 4L17 10" stroke="#00ff88" strokeWidth="2" fill="none" />
                    <rect x="6" y="10" width="8" height="6" fill="#00ff88" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="12" height="12" rx="3" fill="#001a66" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,3 17,17 3,17" fill="#ededed" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" fill="#22c55e" />
                    <text x="10" y="14" textAnchor="middle" fontSize="10" fill="#fff">AI</text>
                  </svg>
                )}
                {link.label}
              </Link>
            ))}
          </div>
          {/* Theme fixed to dark; toggle removed */}
        </div>

        {/* Login Button */}
        <Link href="/login">
          <button className="px-4 py-2 bg-brand hover:bg-brand-dark rounded-xl shadow-glow transition" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            Login
          </button>
        </Link>
      </nav>
    </>
  );
}

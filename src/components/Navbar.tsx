"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/values", label: "About" },
  { href: "/offer", label: "What We Offer" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/brand/logo-mark.png"
            alt="BridgeCare Collective"
            width={288}
            height={139}
            className="h-10 w-auto object-contain transition group-hover:scale-105"
            priority
          />
          <div className="leading-tight">
            <p className="font-bold text-charcoal">BridgeCare</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-green">
              Collective
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-teal text-white"
                    : "text-charcoal/70 hover:bg-teal/10 hover:text-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="http://localhost:3001/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Launch App
          </a>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-teal/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-teal text-white"
                      : "bg-sand text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="http://localhost:3001/login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-coral px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Launch App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

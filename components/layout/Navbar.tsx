"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { companyInfo, navLinks } from "@/lib/site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b backdrop-blur-sm transition ${
        isScrolled
          ? "border-slate-200/70 bg-white/95 shadow-sm"
          : "border-transparent bg-white/85"
      }`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <Link href="/" className="text-base font-bold text-[#0F1E2E] sm:text-lg">
          MNCK Property Maintenance
        </Link>

        <ul className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition ${
                  pathname === link.href
                    ? "text-[#0F1E2E]"
                    : "text-slate-600 hover:text-[#0F1E2E]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={companyInfo.phoneHref}
            className="cta-pulse hidden rounded-xl bg-[#1C4EFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163fd3] lg:inline-flex"
          >
            Call Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-slate-200 p-2 text-[#0F1E2E] xl:hidden"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-slate-200 bg-white xl:hidden"
        >
          <ul className="section-container flex flex-col gap-4 py-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium transition ${
                    pathname === link.href
                      ? "text-[#0F1E2E]"
                      : "text-slate-700 hover:text-[#0F1E2E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={companyInfo.phoneHref}
                className="inline-flex rounded-xl bg-[#1C4EFF] px-4 py-2 text-sm font-semibold text-white"
              >
                Call Now
              </Link>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}

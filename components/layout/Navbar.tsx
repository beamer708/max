"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { companyInfo, navLinks, serviceDropdownLinks } from "@/lib/site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isServicesRoute = pathname.startsWith("/services");
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
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
      <nav
        className={`section-container flex items-center justify-between transition-all ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="MNCK Property Maintenance home"
        >
          <Image
            src="/MNCKLogo.svg"
            alt="MNCK Property Maintenance"
            width={220}
            height={70}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <li key={link.href} className="relative pt-2">
                  <div
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={closeServices}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={`flex items-center gap-1 text-sm font-medium transition ${
                        isServicesRoute
                          ? "text-[#0F1E2E]"
                          : "text-slate-600 hover:text-[#0F1E2E]"
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      Services
                      <FiChevronDown
                        className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen ? (
                        <motion.div
                          key="services-dropdown"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"
                        >
                          {serviceDropdownLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[#0F1E2E]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </li>
              );
            }
            return (
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
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={companyInfo.phoneHref}
            className="cta-pulse hidden rounded-xl bg-[#1C4EFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163fd3] md:inline-flex"
          >
            Call Now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-slate-200 p-2 text-[#0F1E2E] lg:hidden"
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
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="section-container flex flex-col gap-4 py-5">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between text-sm font-medium text-slate-700"
                    >
                      Services
                      <FiChevronDown
                        className={`transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen ? (
                      <div className="mt-2 space-y-1 border-l-2 border-slate-200 pl-4">
                        {serviceDropdownLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setMobileServicesOpen(false);
                              setMenuOpen(false);
                            }}
                            className="block py-2 text-sm text-slate-600 hover:text-[#0F1E2E]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </li>
                );
              }
              return (
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
              );
            })}
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

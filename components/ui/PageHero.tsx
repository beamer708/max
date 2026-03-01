"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyInfo } from "@/lib/site-data";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Request a Quote", href: "/contact" },
  secondaryCta = { label: "Call Now", href: companyInfo.phoneHref },
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0F1E2E] py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,78,255,0.3),transparent_45%)]" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-100">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className="cta-pulse inline-flex items-center justify-center rounded-xl bg-[#1C4EFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

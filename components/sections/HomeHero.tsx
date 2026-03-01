"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { companyInfo } from "@/lib/site-data";

export function HomeHero() {
  const [zip, setZip] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!zip.trim()) return;
    window.location.href = `/contact?zip=${encodeURIComponent(zip.trim())}`;
  };

  return (
    <section
      className="relative overflow-hidden py-24 text-white sm:py-32"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(15,30,46,0.86), rgba(15,30,46,0.62)), url('/projects/project-1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Reliable Property Maintenance Done Right
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-100 sm:text-lg">
            Residential & Commercial • Fast, Reliable Service
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="cta-pulse inline-flex items-center justify-center rounded-xl bg-[#1C4EFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              Request a Quote
            </Link>
            <Link
              href={companyInfo.phoneHref}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </Link>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-8 flex max-w-xl flex-col gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm sm:flex-row"
          >
            <input
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              placeholder="Enter Your ZIP for a Free Estimate"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-slate-800 outline-none ring-[#1C4EFF] transition focus:ring-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#1C4EFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              Check
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

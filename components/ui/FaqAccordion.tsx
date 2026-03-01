"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaqItem } from "@/lib/site-data";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            key={item.question}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-[var(--card-shadow)] sm:p-5"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-[#0F1E2E]">{item.question}</span>
              <FiChevronDown
                className={`shrink-0 text-[#1C4EFF] transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden pt-3 text-sm leading-7 text-slate-600"
                >
                  {item.answer}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ProjectItem } from "@/lib/site-data";

type GalleryLightboxProps = {
  items: ProjectItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelected(item)}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-[var(--card-shadow)]"
          >
            <div className="relative h-56 w-full shrink-0 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={420}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2E]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="flex flex-col gap-1 p-4">
              <h3 className="text-base font-semibold text-[#0F1E2E]">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0F1E2E]/85 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
              className="absolute right-3 top-3 z-10 rounded-lg bg-white/90 p-2 text-[#0F1E2E]"
            >
              <FiX size={18} />
            </button>
            <Image
              src={selected.image}
              alt={selected.title}
              width={1200}
              height={780}
              className="h-[60vh] w-full object-cover"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#0F1E2E]">{selected.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{selected.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { audiences } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Property maintenance solutions tailored to homeowners, HOAs, apartment communities, and commercial clients.",
};

export default function WhoWeServePage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Client Segments"
        title="Who We Serve"
        subtitle="Flexible maintenance services for a broad range of residential and commercial property types."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <FadeIn key={audience.title} delay={index * 0.05}>
              <article className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[var(--card-shadow)]">
                <Image
                  src={audience.image}
                  alt={audience.title}
                  width={640}
                  height={420}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#0F1E2E]">{audience.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {audience.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not Sure If We Service Your Property Type?"
        description="Reach out and we will confirm the right service approach for your site."
      />
    </main>
  );
}

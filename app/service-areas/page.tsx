import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areaGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "View the cities and counties covered by MNCK Property Maintenance service teams.",
};

export default function ServiceAreasPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Coverage"
        title="Service Areas"
        subtitle="Serving multiple cities and counties with responsive field support and reliable scheduling."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              title="Cities & Counties We Serve"
              description="Coverage may vary by service type and urgency. Contact us to confirm availability."
              centered={false}
            />
            <div className="mt-6 space-y-5">
              {areaGroups.map((area) => (
                <article key={area.county} className="rounded-lg bg-slate-50 p-4">
                  <h2 className="text-base font-semibold text-[#0F1E2E]">{area.county}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {area.cities.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              title="Coverage Map"
              description="Map placeholder for service coverage visualization."
              centered={false}
            />
            <div className="mt-6 flex h-[340px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50">
              <p className="text-center text-sm text-slate-500">
                Interactive map placeholder
                <br />
                Replace with embedded map when ready.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Check Availability in Your Area"
        description="Send your address or ZIP code and we will confirm service coverage quickly."
      />
    </main>
  );
}

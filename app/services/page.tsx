import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore MNCK Property Maintenance services for residential and commercial properties.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="MNCK Services"
        title="Our Services"
        subtitle="Professional maintenance and repair solutions designed for long-term property performance."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <article className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[var(--card-shadow)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={640}
                    height={420}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1C4EFF]">
                      <Icon size={22} />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-[#0F1E2E]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex text-sm font-semibold text-[#1C4EFF] hover:text-[#163fd3]"
                    >
                      Request details
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="Need a Custom Service Plan?"
        description="We can bundle recurring and on-demand services to match your property goals."
      />
    </main>
  );
}

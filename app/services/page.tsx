import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { companyInfo, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial maintenance services in Delaware County, PA. Call MNCK Property Maintenance for a quote.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="MNCK Services"
        title="Our Services"
        subtitle="Professional property maintenance solutions for homes and businesses in Delaware County."
      />

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"} py-20 sm:py-24`}
        >
          <div className="section-container grid items-center gap-8 lg:grid-cols-2">
            <FadeIn className={index % 2 === 1 ? "lg:order-2" : ""}>
              <Image
                src={service.image}
                alt={service.title}
                width={880}
                height={520}
                className="h-72 w-full rounded-xl border border-slate-200 object-cover shadow-[var(--card-shadow)] sm:h-80"
              />
            </FadeIn>
            <FadeIn delay={0.06} className={index % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F1E2E] sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#1C4EFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={companyInfo.phoneHref}
                className="cta-pulse mt-7 inline-flex rounded-xl bg-[#1C4EFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
              >
                Call for a Quote
              </Link>
              <Link
                href={`/services/${service.id}`}
                className="mt-3 inline-flex text-sm font-semibold text-[#1C4EFF] hover:text-[#163fd3]"
              >
                View full service details
              </Link>
            </FadeIn>
          </div>
        </section>
      ))}
    </main>
  );
}

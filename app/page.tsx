import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  companyInfo,
  faqs,
  homeServiceCards,
  projects,
  valuePoints,
  whoWeServe,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Reliable property maintenance services in Delaware County, PA. Call MNCK Property Maintenance for a fast quote.",
};

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <section
        className="relative overflow-hidden py-20 text-white sm:py-28"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(15,30,46,0.86), rgba(15,30,46,0.62)), url('/projects/project-1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-container">
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Reliable Property Maintenance You Can Count On
            </h1>
            <p className="mt-5 text-lg text-slate-100">
              Serving <span className="font-semibold">{companyInfo.location}</span>
            </p>
            <p className="mt-6 text-sm text-blue-100">Call now for a fast quote:</p>
            <Link
              href={companyInfo.phoneHref}
              className="mt-2 inline-flex text-3xl font-bold tracking-tight text-white hover:text-blue-100"
            >
              {companyInfo.phoneDisplay}
            </Link>
            <div className="mt-8">
              <Link
                href={companyInfo.phoneHref}
                className="cta-pulse inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1C4EFF] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#163fd3]"
              >
                Call Now
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="section-container grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1C4EFF]">
              Phone
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="mt-1 inline-flex text-lg font-semibold text-[#0F1E2E]"
            >
              {companyInfo.phoneDisplay}
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1C4EFF]">
              Service Area
            </p>
            <p className="mt-1 text-lg font-semibold text-[#0F1E2E]">{companyInfo.location}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1C4EFF]">
              Email
            </p>
            <Link
              href={`mailto:${companyInfo.email}`}
              className="mt-1 inline-flex text-lg font-semibold text-[#0F1E2E]"
            >
              {companyInfo.email}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="About MNCK"
              title="Simple, Reliable Property Maintenance"
              description="We provide practical maintenance and repair support without overcomplicating the process."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeIn className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)] sm:p-8">
              <h2 className="text-2xl font-semibold text-[#0F1E2E]">What We Do</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                From routine upkeep to common repairs, we focus on doing solid work
                and keeping communication clear.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.06}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)] sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-[#0F1E2E]">Local Focus</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>- Veteran Owned &amp; Operated</li>
                <li>- Family Owned &amp; Operated</li>
                <li>- Serving {companyInfo.location}</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="services-overview" className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Services Overview"
              title="Complete Maintenance Support"
              description="Clear, practical service options for residential and commercial properties."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.05}>
                  <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-[var(--card-shadow)]">
                    <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1C4EFF]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0F1E2E]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.id}`}
                      className="mt-4 inline-flex text-sm font-semibold text-[#1C4EFF] hover:text-[#163fd3]"
                    >
                      View service
                    </Link>
                  </article>
                </FadeIn>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-xl bg-[#1C4EFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Who We Serve"
              title="Who We Work With"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)]">
                  <h3 className="text-xl font-semibold text-[#0F1E2E]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading eyebrow="Why Choose Us" title="Trusted Local Team" />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <FadeIn key={point.title} delay={index * 0.06}>
                  <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)]">
                    <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1C4EFF]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0F1E2E]">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {point.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Project Highlights"
              title="Recent Work Samples"
              description="Examples of maintenance and repair work completed by our team."
            />
          </FadeIn>
          <div className="mt-12">
            <GalleryLightbox items={projects.slice(0, 3)} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex rounded-xl border border-[#1C4EFF]/30 px-5 py-3 text-sm font-semibold text-[#1C4EFF] transition hover:bg-blue-50"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Quick answers to common service questions."
            />
          </FadeIn>
          <div className="mx-auto mt-12 max-w-4xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn className="rounded-xl bg-[#0F1E2E] p-8 text-center text-white shadow-[var(--card-shadow)] sm:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Need Service or a Quote?</h2>
            <p className="mt-4 text-slate-200">
              Call now and we will walk you through the next steps.
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="cta-pulse mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1C4EFF] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#163fd3]"
            >
              Call Now - {companyInfo.phoneDisplay}
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

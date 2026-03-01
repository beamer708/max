import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areaGroups, faqs, projects, services, valuePoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Reliable property maintenance for residential and commercial properties with fast, professional service.",
};

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <HomeHero />

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="About MNCK"
              title="A Trusted Property Maintenance Partner"
              description="MNCK Property Maintenance provides reliable repair and maintenance support for homes, multi-unit communities, and commercial facilities."
            />
          </FadeIn>
          <FadeIn className="mx-auto mt-8 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[var(--card-shadow)] sm:p-8">
            <p className="text-base leading-8 text-slate-600">
              Our team combines practical expertise, clear communication, and
              responsive service to help property owners protect long-term value.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex rounded-xl border border-[#1C4EFF]/30 px-5 py-2.5 text-sm font-semibold text-[#1C4EFF] transition hover:bg-blue-50"
            >
              Learn More About Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Services Snapshot"
              title="Core Maintenance Services"
              description="High-demand service categories tailored for both residential and commercial properties."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.05}>
                  <article className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)]">
                    <div className="inline-flex rounded-xl bg-blue-50 p-3 text-[#1C4EFF]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0F1E2E]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
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

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Dependable Service Built on Trust"
            />
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
              eyebrow="Recent Projects"
              title="Work Completed Across Property Types"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.06}>
                <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[var(--card-shadow)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={420}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[#0F1E2E]">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{project.caption}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
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
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              eyebrow="Service Areas"
              title="Coverage Across Multiple Counties"
              description="We serve clients throughout the metro area and surrounding communities."
              centered={false}
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {areaGroups.map((area) => (
                <li key={area.county}>
                  <span className="font-semibold text-[#0F1E2E]">{area.county}:</span>{" "}
                  {area.cities.join(", ")}
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="mt-6 inline-flex rounded-xl bg-[#1C4EFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              View Full Coverage
            </Link>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              eyebrow="FAQ Preview"
              title="Common Questions"
              description="Quick answers to what property owners ask us most often."
              centered={false}
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {faqs.slice(0, 3).map((faq) => (
                <li key={faq.question} className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-[#0F1E2E]">{faq.question}</p>
                  <p className="mt-1 text-slate-600">{faq.answer}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/faqs"
              className="mt-6 inline-flex rounded-xl border border-[#1C4EFF]/30 px-5 py-3 text-sm font-semibold text-[#1C4EFF] transition hover:bg-blue-50"
            >
              Read All FAQs
            </Link>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        title="Need Reliable Property Maintenance?"
        description="Get a fast estimate and a clear scope from a team that prioritizes quality and communication."
      />
    </main>
  );
}

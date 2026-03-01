import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  Home as HomeIcon,
  MapPin,
  PhoneCall,
  Sparkles,
  Trees,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
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
        className="relative overflow-hidden bg-[#0F1E2E] py-16 text-white sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(15,30,46,0.95), rgba(15,30,46,0.78)), url('/projects/project-1.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-container grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-blue-100">
              <MapPin size={14} />
              Delaware County, PA
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Reliable Property Maintenance You Can Count On
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
              Straightforward service, clear communication, and dependable
              workmanship for residential and commercial properties.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={companyInfo.phoneHref}
                className="cta-pulse inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1C4EFF] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#163fd3]"
              >
                <PhoneCall className="mr-2" size={18} />
                Call Now
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-7"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-100">
              Fast Quote Line
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="mt-2 inline-flex text-3xl font-bold tracking-tight text-white hover:text-blue-100"
            >
              {companyInfo.phoneDisplay}
            </Link>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs text-blue-100">Service Area</p>
                <p className="mt-1 text-sm font-semibold">{companyInfo.location}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs text-blue-100">Email</p>
                <p className="mt-1 text-sm font-semibold break-all">{companyInfo.email}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 sm:col-span-2">
                <p className="text-xs text-blue-100">Ownership</p>
                <p className="mt-1 text-sm font-semibold">
                  Veteran Owned &amp; Family Owned
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-6">
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
              title="Built for Clear Communication and Reliable Work"
              description="We keep things simple: understand the issue, explain the solution, and complete the work with care."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <FadeIn className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)]">
              <BadgeCheck className="text-[#1C4EFF]" />
              <h2 className="mt-4 text-xl font-semibold text-[#0F1E2E]">Dependable Service</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Consistent maintenance support for homes and businesses.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.06}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)]"
            >
              <Sparkles className="text-[#1C4EFF]" />
              <h2 className="mt-4 text-xl font-semibold text-[#0F1E2E]">Straightforward Process</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Clear recommendations, practical timelines, and no unnecessary
                complexity.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.12}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-[var(--card-shadow)]"
            >
              <PhoneCall className="text-[#1C4EFF]" />
              <h2 className="mt-4 text-xl font-semibold text-[#0F1E2E]">Phone-First Quotes</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Call us directly for quick quote conversations and faster scheduling.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="services-overview" className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Services Overview"
              title="Core Services"
              description="Choose a service below for detailed information."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServiceCards.map((service, index) => {
              const iconMap = {
                "residential-maintenance": HomeIcon,
                "commercial-maintenance": Building2,
                "preventative-maintenance-contracts": ClipboardCheck,
                "exterior-landscaping-services": Trees,
                "general-repairs": Wrench,
              } as const;
              const Icon = iconMap[service.id as keyof typeof iconMap] ?? service.icon;
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
                      <ArrowRight className="ml-1" size={16} />
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
                  <UsersRound className="text-[#1C4EFF]" size={20} />
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
              const iconMap = [BadgeCheck, CheckCircle2, MapPin];
              const Icon = iconMap[index] ?? point.icon;
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
              <PhoneCall className="mr-2" size={18} />
              Call Now - {companyInfo.phoneDisplay}
            </Link>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-blue-100">
              <span className="inline-flex items-center gap-1">
                <Zap size={14} />
                Fast Response
              </span>
              <span className="inline-flex items-center gap-1">
                <Droplets size={14} />
                Repairs & Maintenance
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

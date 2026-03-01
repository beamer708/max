import type { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call MNCK Property Maintenance for a quote in Delaware County, PA.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Get Started"
        title="Contact"
        subtitle="Call us now for a quote - we do not use online quote forms."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1C4EFF]">
              Call for a Quote
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="mt-3 inline-flex text-4xl font-bold tracking-tight text-[#0F1E2E] hover:text-[#1C4EFF] sm:text-5xl"
            >
              {companyInfo.phoneDisplay}
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Call us now for a quote - we do not use online quote forms.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              title="Contact Information"
              description="Reach out by phone for fastest service in Delaware County, PA."
              centered={false}
            />
            <ul className="mt-8 space-y-5 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 text-[#1C4EFF]" size={18} />
                <div>
                  <p className="font-semibold text-[#0F1E2E]">Phone</p>
                  <Link href={companyInfo.phoneHref} className="hover:text-[#1C4EFF]">
                    {companyInfo.phoneDisplay}
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 text-[#1C4EFF]" size={18} />
                <div>
                  <p className="font-semibold text-[#0F1E2E]">Email</p>
                  <Link href={`mailto:${companyInfo.email}`} className="hover:text-[#1C4EFF]">
                    {companyInfo.email}
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-[#1C4EFF]" size={18} />
                <div>
                  <p className="font-semibold text-[#0F1E2E]">Service Area</p>
                  <p>{companyInfo.location}</p>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#0F1E2E]">Map Placeholder</h2>
            <p className="mt-3 text-sm text-slate-600">
              Embedded map can be added here for Delaware County coverage.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

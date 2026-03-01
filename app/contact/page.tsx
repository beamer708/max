import type { Metadata } from "next";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MNCK Property Maintenance for a quote or consultation on property services.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Get Started"
        title="Contact"
        subtitle="Get in Touch for a Quote or Consultation"
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              title="Contact Information"
              description="Reach out directly by phone or email, or submit the form and we will follow up promptly."
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
                  <p className="font-semibold text-[#0F1E2E]">About</p>
                  <p>Veteran Owned &amp; Operated</p>
                  <p>Family Owned &amp; Operated</p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading title="Request a Quote" centered={false} />
            <div className="mt-6">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo, teamMembers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MNCK Property Maintenance mission, values, and leadership team.",
};

const values = [
  "Integrity in every recommendation and repair",
  "Reliable response and clear communication",
  "Quality workmanship with long-term focus",
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="About MNCK"
        title="About Us"
        subtitle="A veteran-owned, family-operated maintenance company built around trust, responsiveness, and consistent execution."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading
              title="Our Mission"
              description="To provide honest, reliable property maintenance that homeowners and business owners can count on."
              centered={false}
            />
            <p className="mt-6 text-sm leading-7 text-slate-600">
              As a veteran-owned and family-owned operation, MNCK focuses on
              dependable service, direct communication, and quality workmanship on
              every call.
            </p>
            <ul className="mt-5 space-y-2 text-sm font-medium text-[#0F1E2E]">
              {companyInfo.ownershipHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <SectionHeading title="Core Values" centered={false} />
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {values.map((value) => (
                <li key={value} className="rounded-lg bg-slate-50 p-3">
                  {value}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Leadership Team"
              title="Meet the People Behind MNCK"
              description="Experienced professionals dedicated to client outcomes and quality service delivery."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.06}>
                <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[var(--card-shadow)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={560}
                    height={360}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-[#0F1E2E]">{member.name}</h2>
                    <p className="mt-1 text-sm font-medium text-[#1C4EFF]">{member.role}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{member.bio}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner With a Team You Can Trust"
        description="Let’s discuss a maintenance plan that aligns with your property goals."
      />
    </main>
  );
}

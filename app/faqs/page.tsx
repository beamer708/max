import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about MNCK Property Maintenance services and scheduling.",
};

export default function FaqsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        subtitle="Helpful answers to common service, scheduling, and coverage questions."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              title="Common Questions"
              description="If you need details beyond these answers, contact us and we will respond promptly."
            />
          </FadeIn>
          <div className="mx-auto mt-12 max-w-4xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Still Have Questions?"
        description="Our team is happy to answer service-specific questions before you book."
      />
    </main>
  );
}

import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | MNCK Property Maintenance",
  description:
    "Frequently asked questions about MNCK Property Maintenance — how quotes work, what we service, licensing, and more.",
};

const FAQS = [
  {
    question: "How do I get a quote?",
    answer:
      "Just call us at 267-748-5636. We don't do online quote forms — Pete handles every quote personally by phone. Most calls take five minutes. You'll get a straight answer on price, not a vague estimate.",
  },
  {
    question: "Do you serve my area?",
    answer:
      "We cover Delaware County and most surrounding townships and boroughs — including Havertown, Upper Darby, Springfield, Media, Drexel Hill, Swarthmore, and many others. If you're not sure, call and we'll tell you right away.",
  },
  {
    question: "Are you licensed?",
    answer:
      "Yes. MNCK Property Maintenance is licensed for both residential and commercial work in Pennsylvania. We're also veteran owned and fully insured.",
  },
  {
    question: "Do you use subcontractors?",
    answer:
      "No, not on standard jobs. Our own team handles the work. When you hire MNCK, you know who's showing up. We don't hand your job off to someone else.",
  },
  {
    question: "What types of properties do you work on?",
    answer:
      "We handle residential homes, rental properties, small commercial spaces, and office buildings. Whether it's a single-family home that needs ongoing upkeep or a landlord with a few units, we can work with you.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes. We offer quarterly and annual maintenance plans that keep your property in good shape year-round. Contracts include routine inspections, scheduled upkeep, and priority scheduling. It's the best way to catch problems early and avoid expensive emergency repairs later.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "It depends on the current schedule, but we stay as flexible as we can. Call and we'll give you an honest answer on current availability — no runaround.",
  },
  {
    question: "What's included in a maintenance contract?",
    answer:
      "Contracts typically include routine property inspections, scheduled seasonal upkeep, minor repair work within the contract scope, and priority scheduling for any additional service calls. We'll walk through exactly what's covered when we talk.",
  },
  {
    question: "Do you handle emergency repairs?",
    answer:
      "Call us and we'll do our best to fit you in. We prioritize clients on maintenance contracts for emergency scheduling, but we try to be responsive for everyone. The sooner you call, the better.",
  },
  {
    question: "Why choose MNCK over a bigger company?",
    answer:
      "You get Pete — not a dispatcher, not a crew you've never met. Every quote comes from the owner. Every job is handled by our team. Pete served in the military and runs MNCK with the same standards: show up, do it right, stand behind it. With a bigger company you're a ticket number. With us, you're a neighbor.",
  },
];

export default function FaqsPage() {
  return (
    <main>

      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container">
          <FadeIn>
            <h1>Frequently Asked Questions</h1>
            <p className="page-hero-sub">Straight answers. No fluff.</p>
          </FadeIn>
        </div>
      </div>

      {/* ── FAQ ACCORDION ── */}
      <section style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: "780px" }}>
          <FadeIn>
            <FaqAccordion items={FAQS} />
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <FadeIn>
            <h2>Still Have Questions?</h2>
            <p className="sub">
              Call Pete directly &mdash; fastest way to get a straight answer.
            </p>
            <a
              href="tel:+12677485636"
              className="btn btn-orange"
              style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
            >
              <i className="fa-solid fa-phone" aria-hidden="true" style={{ marginRight: "8px", verticalAlign: "middle" }}></i>
              267-748-5636
            </a>
            <a
              href="mailto:contact@mnckpropertymaintenance.com"
              className="cta-email"
            >
              Or email: contact@mnckpropertymaintenance.com
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FiPhone, FiTool, FiZap } from "react-icons/fi";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { companyInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "More We Can Do",
  description:
    "Need something beyond our listed services? Call MNCK Property Maintenance. We can handle it or find a solution for you in Delaware County, PA.",
};

export default function MoreWeCanDoPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Beyond Our Core Services"
        title="More We Can Do"
        subtitle="Not sure if we do it? Call us. We’ll either take care of it or point you to a solution."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container max-w-3xl">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <p className="text-base leading-8 text-slate-700">
              Our website covers the maintenance and repair services we’re known for, but
              property needs don’t always fit a single category. If you have an extra task, a
              one-off project, or something you’re not sure who handles. Call us. We’ll either
              do it ourselves or help you find someone who can.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={companyInfo.phoneHref}
                className="cta-pulse inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1C4EFF] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#163fd3]"
              >
                <FiPhone className="mr-2" size={18} />
                Call {companyInfo.phoneDisplay}
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-7 py-3 text-base font-semibold text-[#0F1E2E] transition hover:bg-slate-50"
              >
                View Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-[#0F1E2E] sm:text-3xl">
            How we can help
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            <FadeIn className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 text-center">
              <FiTool className="mx-auto text-[#1C4EFF]" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-[#0F1E2E]">
                In-house when we can
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Many odd jobs and extra tasks fall within what we already do. We’ll take them on when we can.
              </p>
            </FadeIn>
            <FadeIn delay={0.06} className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 text-center">
              <FiZap className="mx-auto text-[#1C4EFF]" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-[#0F1E2E]">
                Find a solution
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If it’s outside our wheelhouse, we’ll point you to a trusted option so you’re not stuck.
              </p>
            </FadeIn>
            <FadeIn delay={0.12} className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 text-center">
              <FiPhone className="mx-auto text-[#1C4EFF]" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-[#0F1E2E]">
                One call
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No forms or long wait. Call and we’ll talk through what you need and the next step.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn className="rounded-xl bg-[#0F1E2E] p-8 text-center text-white shadow-[var(--card-shadow)] sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Have something in mind? Call us.
            </h2>
            <p className="mt-4 text-slate-200">
              We’re happy to discuss your project or refer you to the right resource.
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="cta-pulse mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1C4EFF] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#163fd3]"
            >
              <FiPhone className="mr-2" size={18} />
              {companyInfo.phoneDisplay}
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

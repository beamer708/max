import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyInfo } from "@/lib/site-data";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  secondaryLabel = "Call Now",
  secondaryHref = companyInfo.phoneHref,
}: CtaBannerProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-container">
        <FadeIn className="rounded-xl bg-[#0F1E2E] p-8 text-white shadow-[var(--card-shadow)] sm:p-10">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-200">{description}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="cta-pulse inline-flex items-center justify-center rounded-xl bg-[#1C4EFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
              >
                {primaryLabel}
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

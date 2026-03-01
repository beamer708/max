import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { companyInfo, services } from "@/lib/site-data";

type ServiceDetailPageProps = {
  params: Promise<{ serviceId: string }>;
};

const getServiceById = (serviceId: string) =>
  services.find((service) => service.id === serviceId);

export async function generateStaticParams() {
  return services.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: `${service.title} in ${companyInfo.location}. Call ${companyInfo.phoneDisplay} for a quote.`,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) notFound();

  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Service Details"
        title={service.title}
        subtitle={`${service.description} Serving ${companyInfo.location}.`}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <Image
              src={service.image}
              alt={service.title}
              width={960}
              height={640}
              className="h-80 w-full rounded-xl border border-slate-200 object-cover shadow-[var(--card-shadow)]"
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-sm font-semibold uppercase tracking-[0.13em] text-[#1C4EFF]">
              What&apos;s Included
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F1E2E] sm:text-4xl">
              Included in {service.title}
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#1C4EFF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <FadeIn className="rounded-xl border border-slate-200 bg-white p-6 shadow-[var(--card-shadow)] sm:p-8">
            <h3 className="text-2xl font-semibold text-[#0F1E2E]">Best Fit For</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {service.idealFor.map((item) => (
                <li key={item} className="rounded-lg bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08} className="rounded-xl bg-[#0F1E2E] p-6 text-white shadow-[var(--card-shadow)] sm:p-8">
            <h3 className="text-2xl font-semibold">Call for a Quote</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Speak directly with MNCK Property Maintenance to discuss scope,
              scheduling, and pricing for your property.
            </p>
            <Link
              href={companyInfo.phoneHref}
              className="cta-pulse mt-6 inline-flex rounded-xl bg-[#1C4EFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              Call {companyInfo.phoneDisplay}
            </Link>
            <Link
              href="/services"
              className="mt-3 inline-flex text-sm font-semibold text-blue-100 hover:text-white"
            >
              Back to all services
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

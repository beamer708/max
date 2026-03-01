import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyInfo, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse completed maintenance projects from MNCK Property Maintenance in Delaware County, PA.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Project Gallery"
        title="Projects"
        subtitle="A look at recent maintenance work completed for local properties."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              title="Recent Project Highlights"
              description="Hover to view project titles and click to open full image previews."
            />
          </FadeIn>
          <div className="mt-12">
            <GalleryLightbox items={projects} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="section-container">
          <FadeIn className="rounded-xl bg-[#0F1E2E] p-8 text-center text-white shadow-[var(--card-shadow)] sm:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready for Your Next Project?</h2>
            <p className="mt-4 text-slate-200">
              Call {companyInfo.phoneDisplay} for a quote in {companyInfo.location}.
            </p>
            <a
              href={companyInfo.phoneHref}
              className="cta-pulse mt-7 inline-flex rounded-xl bg-[#1C4EFF] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#163fd3]"
            >
              Call Now
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

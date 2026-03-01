import type { Metadata } from "next";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FadeIn } from "@/components/ui/FadeIn";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse recent MNCK Property Maintenance projects across residential and commercial properties.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        eyebrow="Project Gallery"
        title="Projects / Gallery"
        subtitle="A visual look at recent work delivered by our maintenance and repair team."
      />

      <section className="py-20 sm:py-24">
        <div className="section-container">
          <FadeIn>
            <SectionHeading
              title="Recent Project Highlights"
              description="Click any project card to view it in the lightbox."
            />
          </FadeIn>
          <div className="mt-12">
            <GalleryLightbox items={projects} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s Build Your Next Maintenance Plan"
        description="Get a clear scope and timeline for your upcoming project."
      />
    </main>
  );
}

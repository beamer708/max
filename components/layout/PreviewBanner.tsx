import Link from "next/link";

export function PreviewBanner() {
  return (
    <aside
      aria-label="Website preview notice"
      className="border-b border-amber-300 bg-amber-50 text-[#0F1E2E]"
    >
      <div className="section-container py-2.5 text-center text-xs leading-5 sm:text-sm">
        <strong className="font-semibold">Preview Draft:</strong> This website is in
        the very early stages of development. Some images may be stock,
        placeholders, or still blank. This is a draft preview for client review,
        and content/design can be updated based on your feedback before final
        launch.{" "}
        <Link href="/contact" className="font-semibold text-[#1C4EFF] underline">
          Request changes anytime
        </Link>
        .
      </div>
    </aside>
  );
}

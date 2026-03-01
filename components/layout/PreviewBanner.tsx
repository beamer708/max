export function PreviewBanner() {
  return (
    <aside
      aria-label="Website preview notice"
      className="border-b border-amber-300 bg-amber-50 text-[#0F1E2E]"
    >
      <div className="section-container py-2.5 text-center text-xs leading-5 sm:text-sm">
        <strong className="font-semibold">Notice:</strong> This website is currently
        in the draft phase of development.
      </div>
    </aside>
  );
}

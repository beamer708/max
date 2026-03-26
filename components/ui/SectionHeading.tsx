type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      style={{
        maxWidth: "680px",
        ...(centered
          ? { margin: "0 auto", textAlign: "center" }
          : {}),
      }}
    >
      {eyebrow && (
        <p className="eyebrow">{eyebrow}</p>
      )}
      <h2 style={{ marginTop: eyebrow ? "0.75rem" : 0 }}>{title}</h2>
      {description && (
        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.05rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

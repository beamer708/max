"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX } from "react-icons/fi";

type ProjectItem = { title: string; caption: string; image: string; category?: string };
type GalleryLightboxProps = { items: ProjectItem[] };

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "1.25rem",
        }}
        className="sm:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelected(item)}
            className="gallery-card"
          >
            {/* 16:9 image container */}
            <div className="gallery-card-img">
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={360}
                loading="lazy"
              />
            </div>

            {/* Card body */}
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
              {item.category && (
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    background: "var(--color-bg-soft)",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    padding: "0.25rem 0.75rem",
                    fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)",
                  }}
                >
                  {item.category}
                </span>
              )}
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-sora, 'Sora', sans-serif)",
                  fontWeight: 600,
                  color: "var(--color-text)",
                }}
              >
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--color-text-muted)" }}>
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(15,22,36,0.88)",
            padding: "1rem",
          }}
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "860px",
              background: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                border: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-text)",
              }}
            >
              <FiX size={18} />
            </button>
            <Image
              src={selected.image}
              alt={selected.title}
              width={1200}
              height={675}
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "60vh", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem 2rem" }}>
              {selected.category && (
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--color-bg-soft)",
                    borderRadius: "var(--radius-pill)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    padding: "0.2rem 0.65rem",
                    marginBottom: "0.625rem",
                  }}
                >
                  {selected.category}
                </span>
              )}
              <h3 style={{ fontSize: "1.2rem" }}>{selected.title}</h3>
              <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>{selected.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

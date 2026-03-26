"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimatorInit() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  /* ── Scroll reveal + sticky nav (re-runs on each route change) ── */
  useEffect(() => {
    // Sticky nav shadow
    const header = document.querySelector("header");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // IntersectionObserver for .reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  /* ── Loading screen ── */
  useEffect(() => {
    const loader = document.getElementById("loading-screen");
    if (!loader) return;

    const hideLoader = (delay = 0) => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => {
          loader.style.display = "none";
        }, 320);
      }, delay);
    };

    const resetBar = () => {
      const bar = document.getElementById("loading-bar");
      if (!bar) return;
      bar.style.animation = "none";
      // Force reflow to restart animation
      void (bar as HTMLElement).offsetWidth;
      bar.style.animation = "loadBarAnim 600ms ease-out forwards";
    };

    if (isFirst.current) {
      // Initial page load — always show briefly (branded intro)
      isFirst.current = false;
      loader.style.display = "flex";
      loader.style.opacity = "1";
      loader.style.pointerEvents = "none"; // don't block interaction

      if (document.readyState === "complete") {
        hideLoader(700);
      } else {
        const onLoad = () => hideLoader(400);
        window.addEventListener("load", onLoad, { once: true });
      }
    } else {
      // Internal navigation — show loading screen over new page
      resetBar();
      loader.style.display = "flex";
      loader.style.pointerEvents = "none";
      // Fade in
      loader.style.opacity = "0";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          loader.style.opacity = "1";
          hideLoader(650);
        });
      });
    }
  }, [pathname]);

  return null;
}

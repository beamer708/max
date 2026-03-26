import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <main>
      <div className="notfound-wrap">
        <span className="notfound-bg" aria-hidden="true">404</span>
        <div className="notfound-content">
          <h1>Page Not Found</h1>
          <p>
            We couldn&rsquo;t find that page &mdash; but we can still help.
            Call us or go back home.
          </p>
          <div className="notfound-btns">
            <Link href="/" className="btn btn-navy">
              Back to Home
            </Link>
            <a href="tel:+12677485636" className="btn btn-orange">
              &#128222; Call 267-748-5636
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

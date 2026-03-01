import Link from "next/link";
import { companyInfo, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0F1E2E] py-14 text-slate-200">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">MNCK Property Maintenance</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Trusted maintenance support for homes and businesses throughout Delaware
            County, PA.
          </p>
          <div className="mt-4 space-y-1 text-sm text-blue-100">
            {companyInfo.ownershipHighlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-blue-200">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-blue-200">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={companyInfo.phoneHref} className="transition hover:text-white">
                {companyInfo.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${companyInfo.email}`}
                className="transition hover:text-white"
              >
                {companyInfo.email}
              </Link>
            </li>
            <li>{companyInfo.location}</li>
          </ul>
        </div>
      </div>
      <div className="section-container mt-10 border-t border-white/15 pt-6 text-sm text-slate-300">
        <p>© {new Date().getFullYear()} MNCK Property Maintenance. All rights reserved.</p>
      </div>
    </footer>
  );
}

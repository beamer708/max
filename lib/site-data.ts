import { FiBriefcase, FiCheckSquare, FiHome, FiShield, FiTool, FiUsers } from "react-icons/fi";
import { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  includes: string[];
  idealFor: string[];
  icon: IconType;
  image: string;
};

export type AudienceItem = {
  title: string;
  description: string;
  image: string;
};

export type ProjectItem = {
  title: string;
  caption: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const companyInfo = {
  email: "PeteIvins666@gmail.com",
  phoneDisplay: "267 748 5636",
  phoneHref: "tel:+12677485636",
  location: "Delaware County, PA",
  ownershipHighlights: ["Veteran Owned & Operated", "Family Owned & Operated"],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const serviceDropdownLinks = [
  { label: "Residential Maintenance", href: "/services/residential-maintenance" },
  { label: "Commercial Maintenance", href: "/services/commercial-maintenance" },
  {
    label: "Preventative Maintenance Contracts",
    href: "/services/preventative-maintenance-contracts",
  },
  { label: "General Repairs", href: "/services/general-repairs" },
  {
    label: "Exterior & Landscaping Services",
    href: "/services/exterior-landscaping-services",
  },
];

export const services: ServiceItem[] = [
  {
    id: "residential-maintenance",
    title: "Residential Maintenance",
    description:
      "Reliable routine service and repairs that keep homes safe, functional, and looking their best.",
    bullets: [
      "Seasonal upkeep",
      "Minor repairs and touch-ups",
      "Interior and exterior maintenance",
    ],
    includes: [
      "Basic handyman fixes and adjustments",
      "Fixture and hardware replacement",
      "Caulking, sealing, and preventative touch-ups",
      "Seasonal exterior checks",
      "Priority recommendations to prevent larger repairs",
    ],
    idealFor: ["Single-family homes", "Townhomes", "Rental turnovers"],
    icon: FiHome,
    image: "/projects/project-1.svg",
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Maintenance",
    description:
      "Consistent support for office, retail, and multi-unit properties with minimal disruption.",
    bullets: [
      "Scheduled site visits",
      "Tenant and common-area maintenance",
      "Priority response options",
    ],
    includes: [
      "Routine walk-throughs and issue logging",
      "Common area and exterior upkeep",
      "Tenant-facing repair coordination",
      "Minor electrical and plumbing support",
      "Recurring maintenance scheduling",
    ],
    idealFor: ["Offices", "Retail locations", "Multi-unit properties"],
    icon: FiBriefcase,
    image: "/projects/project-2.svg",
  },
  {
    id: "preventative-maintenance-contracts",
    title: "Preventative Maintenance Contracts",
    description:
      "Proactive service plans designed to reduce emergency calls and protect long-term property value.",
    bullets: [
      "Routine inspections",
      "Maintenance checklists",
      "Quarterly and annual plans",
    ],
    includes: [
      "Customized inspection schedules",
      "Asset-specific maintenance checklists",
      "Early issue identification and correction",
      "Documentation for completed visits",
      "Plan adjustments based on property needs",
    ],
    idealFor: ["HOAs", "Property managers", "Budget-conscious owners"],
    icon: FiCheckSquare,
    image: "/projects/project-3.svg",
  },
  {
    id: "exterior-landscaping-services",
    title: "Exterior & Landscaping Services",
    description:
      "Curb-appeal focused maintenance for grounds, walkways, and exterior property presentation.",
    bullets: [
      "Lawn and yard upkeep",
      "Seasonal cleanup",
      "General exterior improvements",
    ],
    includes: [
      "Grass, edging, and basic yard maintenance",
      "Seasonal debris and leaf cleanup",
      "Walkway and curb-area appearance upkeep",
      "Minor fence, gate, and exterior touch-ups",
      "Storm-season exterior preparation",
    ],
    idealFor: ["Residential homes", "HOA common areas", "Commercial fronts"],
    icon: FiTool,
    image: "/projects/project-1.svg",
  },
  {
    id: "general-repairs",
    title: "General Repairs",
    description:
      "Dependable troubleshooting and repair support, including electrical and plumbing-related maintenance.",
    bullets: [
      "Electrical fixture and outlet troubleshooting",
      "Common plumbing repair support",
      "General handyman repair work",
    ],
    includes: [
      "Outlet, switch, and lighting fixture diagnostics",
      "Leak checks and basic plumbing repairs",
      "Drain and fixture maintenance support",
      "Small repair bundles handled in one visit",
      "Escalation guidance when specialist work is needed",
    ],
    idealFor: ["Homeowners", "Commercial sites", "Urgent maintenance issues"],
    icon: FiTool,
    image: "/projects/project-2.svg",
  },
];

export const homeServiceCards: ServiceItem[] = [
  {
    id: "residential-maintenance",
    title: "Residential Maintenance",
    description:
      "Routine property upkeep and dependable home repair support.",
    bullets: [],
    includes: [],
    idealFor: [],
    icon: FiHome,
    image: "/projects/project-1.svg",
  },
  {
    id: "commercial-maintenance",
    title: "Commercial Maintenance",
    description:
      "Reliable maintenance for office, retail, and multi-unit commercial properties.",
    bullets: [],
    includes: [],
    idealFor: [],
    icon: FiBriefcase,
    image: "/projects/project-2.svg",
  },
  {
    id: "preventative-maintenance-contracts",
    title: "Preventative Maintenance Plans",
    description:
      "Scheduled plans that reduce breakdowns and protect long-term value.",
    bullets: [],
    includes: [],
    idealFor: [],
    icon: FiCheckSquare,
    image: "/projects/project-3.svg",
  },
  {
    id: "exterior-landscaping-services",
    title: "Exterior & Landscaping",
    description:
      "Lawn, yard, and exterior maintenance to keep properties clean and professional.",
    bullets: [],
    includes: [],
    idealFor: [],
    icon: FiTool,
    image: "/projects/project-1.svg",
  },
  {
    id: "general-repairs",
    title: "Electrical & Plumbing Repairs",
    description:
      "Fast repair support for common electrical and plumbing maintenance issues.",
    bullets: [],
    includes: [],
    idealFor: [],
    icon: FiTool,
    image: "/projects/project-2.svg",
  },
];

export const valuePoints = [
  {
    title: "Licensed & Insured",
    description:
      "Professional standards and proper coverage for your protection and peace of mind.",
    icon: FiShield,
  },
  {
    title: "Fast Response & Reliable",
    description:
      "Responsive communication and dependable scheduling for homes and businesses.",
    icon: FiTool,
  },
  {
    title: "Local Experts in Delaware County",
    description:
      "Local knowledge and on-the-ground service built around Delaware County properties.",
    icon: FiUsers,
  },
];

export const whoWeServe: AudienceItem[] = [
  {
    title: "Homeowners",
    description:
      "Home repair and maintenance support with practical scheduling and clear communication.",
    image: "/projects/project-1.svg",
  },
  {
    title: "Property Managers",
    description:
      "Reliable service for managed properties, recurring upkeep, and issue resolution.",
    image: "/projects/project-2.svg",
  },
  {
    title: "HOAs",
    description:
      "Consistent maintenance for shared spaces and neighborhood common areas.",
    image: "/projects/project-3.svg",
  },
  {
    title: "Commercial Properties",
    description:
      "Ongoing maintenance support to reduce downtime and maintain professional presentation.",
    image: "/projects/project-2.svg",
  },
];

export const audiences = whoWeServe;

export const areaGroups = [
  {
    county: "Delaware County, PA",
    cities: ["Upper Darby", "Havertown", "Media", "Springfield", "Broomall"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Exterior Facade Restoration",
    caption: "Commercial building exterior refresh and repair",
    image: "/projects/project-1.svg",
  },
  {
    title: "Multi-Unit Plumbing Upgrade",
    caption: "Apartment property plumbing improvements",
    image: "/projects/project-2.svg",
  },
  {
    title: "Retail Maintenance Program",
    caption: "Recurring maintenance package for storefront properties",
    image: "/projects/project-3.svg",
  },
  {
    title: "Office Interior Repairs",
    caption: "Drywall, paint, and fixture restoration",
    image: "/projects/project-1.svg",
  },
  {
    title: "HOA Exterior Cleanup",
    caption: "Landscape, walkways, and common-area improvements",
    image: "/projects/project-2.svg",
  },
  {
    title: "Preventative Service Rollout",
    caption: "Quarterly maintenance plan implementation",
    image: "/projects/project-3.svg",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Mark Nichols",
    role: "Founder & Operations Lead",
    bio: "Leads field execution and quality control with a focus on long-term client trust.",
    image: "/projects/project-1.svg",
  },
  {
    name: "Caitlin Moore",
    role: "Client Success Manager",
    bio: "Coordinates scheduling, communication, and service planning for residential and commercial clients.",
    image: "/projects/project-2.svg",
  },
  {
    name: "Nathan Cole",
    role: "Senior Maintenance Technician",
    bio: "Specializes in repair diagnostics and preventative maintenance across multi-site properties.",
    image: "/projects/project-3.svg",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Delaware County, PA and nearby communities for residential and commercial property maintenance.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "For urgent issues, call us directly and we will advise on the fastest available response.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. MNCK Property Maintenance is fully licensed and insured to protect clients and properties.",
  },
  {
    question: "How quickly can service be scheduled?",
    answer:
      "Most non-emergency jobs are scheduled within a few business days. Priority requests may be accommodated sooner.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call us directly at 267 748 5636 for a quote. We focus on phone consultations for faster service.",
  },
];

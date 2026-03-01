import {
  FiCloudSnow,
  FiCalendar,
  FiHome,
  FiImage,
  FiScissors,
  FiTrash2,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
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
  ownershipHighlights: ["Veteran Owned & Operated", "Family Owned & Operated"],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const services: ServiceItem[] = [
  {
    title: "Handyman Services",
    description:
      "Dependable day-to-day repairs for doors, fixtures, trim, and interior maintenance needs.",
    icon: FiTool,
    image: "/projects/project-1.svg",
  },
  {
    title: "Roof Repairs",
    description:
      "Fast roof patching and repair support to help prevent leaks and protect your property.",
    icon: FiHome,
    image: "/projects/project-2.svg",
  },
  {
    title: "Window Installation",
    description:
      "Professional window installation with attention to weather protection and clean finishing.",
    icon: FiImage,
    image: "/projects/project-3.svg",
  },
  {
    title: "Junk Cleanouts & Removal",
    description:
      "Efficient haul-away and property cleanout services for debris, old materials, and unwanted items.",
    icon: FiTrash2,
    image: "/projects/project-1.svg",
  },
  {
    title: "Lawn & Yard Services",
    description:
      "Routine yard care and seasonal upkeep to maintain curb appeal and safe exterior spaces.",
    icon: FiScissors,
    image: "/projects/project-2.svg",
  },
  {
    title: "Snow Removal",
    description:
      "Prompt snow clearing for driveways, walkways, and property access points during winter weather.",
    icon: FiCloudSnow,
    image: "/projects/project-3.svg",
  },
];

export const valuePoints = [
  {
    title: "Experienced Team",
    description:
      "Skilled technicians with practical field experience across residential and commercial maintenance.",
    icon: FiUsers,
  },
  {
    title: "Fast Response",
    description:
      "Quick communication and efficient scheduling help prevent delays and protect your operations.",
    icon: FiCalendar,
  },
  {
    title: "Veteran & Family Owned",
    description:
      "Owner-operated service with pride, accountability, and a commitment to doing the job right.",
    icon: FiUsers,
  },
];

export const audiences: AudienceItem[] = [
  {
    title: "Residential Homeowners",
    description:
      "Routine upkeep and quick repairs that keep homes safe, functional, and looking their best.",
    image: "/projects/project-1.svg",
  },
  {
    title: "Apartment Complexes",
    description:
      "Reliable service for common areas, unit turnovers, and preventative maintenance programs.",
    image: "/projects/project-2.svg",
  },
  {
    title: "HOAs",
    description:
      "Consistent support for shared spaces, exterior improvements, and neighborhood-wide maintenance.",
    image: "/projects/project-3.svg",
  },
  {
    title: "Commercial Properties",
    description:
      "Structured maintenance plans designed to reduce downtime and maintain professional appearance.",
    image: "/projects/project-1.svg",
  },
  {
    title: "Retail & Office Buildings",
    description:
      "Responsive repairs and recurring services that support tenants, customers, and day-to-day operations.",
    image: "/projects/project-2.svg",
  },
];

export const areaGroups = [
  {
    county: "Metro County",
    cities: ["Downtown", "North Ridge", "Westfield", "Lakeview"],
  },
  {
    county: "River County",
    cities: ["Brookside", "Hawthorne", "Cedar Point", "Fairview"],
  },
  {
    county: "Valley County",
    cities: ["Maple Grove", "Pine Hill", "Greenstone", "Silver Creek"],
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
      "We serve residential and commercial properties across the local metro area and surrounding counties.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes. Emergency response is available for urgent maintenance and repair issues based on service availability.",
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
    question: "Do you provide recurring maintenance plans?",
    answer:
      "Yes, we offer customizable preventative maintenance plans for both residential and commercial clients.",
  },
];

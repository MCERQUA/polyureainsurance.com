// Centralized site data — used across nav, footer, schema, CTAs
// Polyurea Insurance — polyurea & elastomeric coating contractor coverage

export const SITE = {
  name: "Polyurea Insurance",
  legalName: "Polyurea Insurance (by Contractors Choice Agency)",
  domain: "polyureainsurance.com",
  url: "https://polyureainsurance.com",
  tagline: "Insurance for Polyurea Coating Contractors",
  description:
    "Specialized commercial insurance for polyurea coating contractors and elastomeric applicators — general liability, contractor pollution liability for isocyanate and VOC exposure, tools & equipment for spray rigs and proportioners, applicator liability, workers' comp, commercial auto, umbrella, and contractor bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Polyurea",
  brandSub: "Contractor Insurance",
  nicheShort: "polyurea contractor",
  nicheShortCap: "Polyurea Contractor",
  nichePlural: "polyurea contractors",
  nichePluralCap: "Polyurea Contractors",
  operator: "polyurea coating operation",
  operatorCap: "Polyurea Coating Operation",
  industry: "polyurea coating",
  industryCap: "Polyurea Coating",
  audience: "polyurea applicators",
  audienceCap: "Polyurea Applicators",
  ownerTitle: "polyurea applicator",
  regionPill: "Texas · Southeast · National",
  serviceSuffix: "Polyurea Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability for Polyurea Contractors",
    short: "Third-party injury and property damage coverage",
    description:
      "Essential protection for polyurea coating contractors against third-party bodily injury and property damage claims. Covers on-site accidents, overspray damage, completed-operations claims, and the certificates every general contractor and client requires before you start a job.",
    icon: "ShieldCheck",
    keywords: ["polyurea contractor general liability", "polyurea coating insurance", "polyurea insurance", "coating contractor GL"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "Isocyanate, VOC, and chemical exposure coverage",
    description:
      "Polyurea and polyurethane coatings contain isocyanates and VOCs that standard GL policies exclude as pollutants. Contractor Pollution Liability covers third-party bodily injury, property damage, and cleanup costs from chemical releases and fume exposure during application.",
    icon: "Droplets",
    keywords: ["contractor pollution liability polyurea", "isocyanate insurance", "VOC coating contractor insurance", "polyurea pollution coverage"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Spray rigs, proportioners, and applicator tools",
    description:
      "Covers your polyurea spray equipment — proportioners, heated hose systems, spray guns, generators, compressors, and support tools — against theft, accidental damage, and breakdown on and off the jobsite. Purpose-built for the high-value spray rigs applicators depend on.",
    icon: "Wrench",
    keywords: ["polyurea spray equipment insurance", "proportioner insurance", "coating contractor tools coverage", "spray rig insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For coating crews with chemical exposure",
    description:
      "Coverage for the real injury patterns in polyurea coating work — isocyanate sensitization, respiratory exposure, slip and fall on coated surfaces, spray equipment injuries, and heat stress. Proper class codes for coating applicator crews and labor.",
    icon: "HardHat",
    keywords: ["polyurea workers compensation", "coating contractor workers comp", "applicator workers comp", "isocyanate exposure workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Spray Rigs",
    short: "Spray rig trucks, trailers, and fleet vehicles",
    description:
      "Coverage for the spray rig trucks, enclosed trailers, pickup trucks, and support vehicles you run on public roads — including hired and non-owned auto when crew members use personal vehicles on coating jobs.",
    icon: "Truck",
    keywords: ["coating contractor commercial auto", "spray rig truck insurance", "polyurea contractor vehicle insurance", "coating fleet insurance"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Excess limits above your primary policies",
    description:
      "Provides excess liability limits above your GL, auto, and employers' liability policies. Essential for polyurea contractors working on large commercial, industrial, or government projects where contract requirements demand $2M, $5M, or higher limits.",
    icon: "Umbrella",
    keywords: ["coating contractor umbrella insurance", "polyurea contractor excess liability", "commercial umbrella coating", "high-limit coating contractor insurance"],
  },
  {
    slug: "applicator-liability",
    title: "Applicator Liability Coverage",
    short: "Product and workmanship coverage for applicators",
    description:
      "Covers claims arising from the polyurea or coating product itself — delamination, adhesion failure, color mismatch, or coating system failures after the job is complete. Addresses the completed-operations and products exposure that general liability leaves exposed.",
    icon: "FlaskConical",
    keywords: ["applicator liability insurance", "polyurea workmanship insurance", "coating product liability", "coating contractor completed operations"],
  },
  {
    slug: "bonds",
    title: "Contractor License & Surety Bonds",
    short: "License bonds and contract performance bonds",
    description:
      "Contractor license bonds required by state licensing boards, and performance and payment bonds for larger commercial and government coating projects. Fast issuance with markets that understand specialty coating contractors.",
    icon: "FileCheck",
    keywords: ["coating contractor bond", "polyurea contractor license bond", "performance bond coating contractor", "surety bond applicator"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · AZ · NM · NV", blurb: "The highest-volume market for commercial and industrial polyurea coating work. We cover Texas and Southwest coating contractors — containment coatings, secondary containment, industrial floor systems, and commercial spray applications across the region's oil & gas, manufacturing, and construction sectors." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · NC · SC", blurb: "Coastal applications, industrial facilities, and commercial construction drive polyurea demand across the Southeast. Coverage built for Florida, Georgia, and the Carolinas — including marine and waterproofing applications common to coastal environments." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Manufacturing facilities, containment coatings, and industrial floor systems across the Midwest. Programs for Illinois, Ohio, Michigan, and Indiana polyurea contractors serving the region's industrial and automotive sectors." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT", blurb: "Commercial and industrial coating demand in dense urban and suburban markets. Coverage for Northeast polyurea contractors — from New York City high-rises to Pennsylvania industrial facilities — with limits and terms that meet demanding project requirements." },
  { slug: "california", name: "California", region: "CA · Pacific Coast", blurb: "California's strict environmental regulations and active industrial sector create unique demands for polyurea contractors. Coverage built for California applicators — including compliance with California VOC regulations and the environmental exposure that comes with coastal and industrial applications." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · WY · ID", blurb: "Mining operations, containment coatings, and industrial facilities in the Mountain West. Programs for Colorado, Utah, Wyoming, and Idaho polyurea contractors — including the secondary containment and pit liner applications common in energy and mining sectors." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA · MD · DC · DE", blurb: "Federal facilities, commercial buildings, and infrastructure projects across the Mid-Atlantic corridor. Coverage for Virginia, Maryland, and DC-area polyurea contractors — with the bonding and high-limit umbrella options federal and government projects require." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR · ID", blurb: "Industrial coatings, waterproofing, and containment applications across Washington, Oregon, and Idaho. Coverage built for Pacific Northwest polyurea contractors working in the region's timber, manufacturing, and infrastructure sectors." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Coating-industry specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 400, suffix: "+", label: "Polyurea contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring coating operations", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We applied polyurea to a large secondary containment project and the client's GC required $5M umbrella and a pollution rider. CCA got us the full stack — GL, CPL, umbrella, and tools — in one program. Nobody else understood what we actually do.", name: "Marcus T.", role: "Spray Applicator & Owner", location: "Texas" },
  { quote: "Our old agent put us on a standard contractors policy and excluded 'chemical application.' When a client claimed fume exposure during an interior spray job, we had no coverage. CCA rebuilt our program with actual pollution liability. Night and day.", name: "Renee B.", role: "Coating Contractor", location: "Georgia" },
  { quote: "The proportioner on our Graco E-XP2 blew out on a roofing job and the repair cost was $14,000. Our tools and equipment policy through CCA covered it without an argument — they already knew what a heated proportioner is and what it costs.", name: "David K.", role: "Roofing & Waterproofing Applicator", location: "Ohio" },
] as const;

// ------------------------------------------------------------
// All portfolio content lives here. Edit these values — you
// should not need to touch component files to update text,
// add a job, a certificate, or a skill.
// ------------------------------------------------------------

export const profile = {
  name: "Narongsak Wongwuen",
  nameTh: "นายณรงค์ศักดิ์ วงศ์เวชน์",
  title: "Excavator Operator",
  location: "Thailand",
  summary:
    "Heavy-equipment operator with hands-on experience running excavators on demolition, earthwork, and site-preparation jobs. Comfortable with hydraulic breakers and grapple attachments, precise in tight urban sites, and consistent about daily inspection and safety checks. Looking for operator roles on construction and civil works crews.",
  phone: "080-000-0000",
  email: "your@email.com",
  facebook: "https://facebook.com",
  line: "https://line.me",
  resumeFile: "/resume.pdf",
};

export const skills = {
  machine: ["Excavator", "Wheel Loader", "Mobile Crane", "Welding"],
  technical: [
    "Demolition",
    "Earthwork & Grading",
    "Trenching",
    "Equipment Attachments",
    "Site Preparation",
    "Daily Equipment Inspection",
  ],
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Excavator Operator",
    company: "Construction Contractor Company, Thailand",
    period: "Oct 2023 — Present",
    bullets: [
      "Operated excavators for demolition of residential and commercial buildings",
      "Used attachments such as hydraulic breakers and grapples for structural dismantling",
      "Performed land clearing, digging, and site preparation for construction projects",
      "Followed safety regulations and maintained zero major accidents on-site",
      "Conducted daily inspection and basic maintenance of heavy equipment",
      "Worked in tight urban environments requiring precision and control",
    ],
  },
  {
    role: "Intern, Administrative Support",
    company: "Salford & Co Corporation",
    period: "Apr 2021 — Dec 2021",
    bullets: [
      "Supported senior executives with scheduling, correspondence, and reports",
      "Assisted in planning and executing corporate events and client meetings",
    ],
  },
];

export type CertificationEntry = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: CertificationEntry[] = [
  {
    title: "Excavator Operation & Safety",
    issuer: "Department of Skill Development, Thailand",
    year: "2023",
  },
  {
    title: "Heavy Equipment Rigging",
    issuer: "Construction Safety Institute",
    year: "2023",
  },
  {
    title: "Basic Occupational Health & Safety",
    issuer: "Ministry of Labour, Thailand",
    year: "2022",
  },
];

export const jobPhotos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Site photo ${i + 1}`,
}));

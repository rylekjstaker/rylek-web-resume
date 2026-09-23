// Single source of truth for site content. Edit this file to update the site.

export const profile = {
  name: "Rylek Staker",
  title: "Building AI automation and practical business software",
  tagline:
    "Amanecer AI co-founder and BYU student. I turn scheduling, reporting, and follow-up workflows into tools people can use.",
  location: "Draper, UT",
  email: "Rylek.JStaker@gmail.com",
  github: "https://github.com/rylekjstaker",
  linkedin: "https://www.linkedin.com/in/rylekstaker/",
  resumePdf: "/resume.pdf",
  avatar: "", // TODO: drop a headshot in /public and set path, e.g. "/headshot.jpg"
};

export const about = {
  paragraphs: [
    "I co-founded Amanecer AI with my brother to build AI automation and custom software for small businesses. Our work starts with a real workflow: who uses it, where the manual work piles up, and what a reliable tool needs to do.",
    "My background is in dental insurance and accounts receivable. I've built Excel and Python reporting tools, a dental claims triage demo, and a scheduled lead research workflow. I also helped build a scheduling platform for a mobile anesthesia practice.",
    "I'm studying pre-business at BYU and preparing to apply to the Information Systems program. I'm looking for part-time internships and entry-level roles in AI automation, business systems, and software development. I also speak advanced professional Spanish after two years of volunteer service in Bolivia.",
  ],
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Co-Founder",
    org: "Amanecer AI",
    period: "Aug 2026 to Present",
    bullets: [
      "Co-founded an AI automation and custom software venture for small businesses with my brother.",
      "Helped scope, build, and deploy a scheduling platform for a mobile anesthesia practice, with role-based access and AI-assisted scheduling for owner review.",
      "Built a scheduled TypeScript workflow that researches businesses, checks for duplicate leads, and creates ClickUp tasks with draft outreach for human review.",
      "Prototype workflows with the Claude API and MCP integrations.",
    ],
  },
  {
    role: "Insurance Specialist / Accounts Receivable Manager",
    org: "Evansmiles Dentistry",
    period: "Mar 2026 to Present",
    bullets: [
      "Manage insurance billing, claim submission, denial follow-up, and collections across 30+ accounts weekly.",
      "Built an Excel AR aging dashboard with VBA macros and a Python PDF-to-CSV converter for Dentrix reports.",
      "Helped reduce outstanding accounts receivable from roughly $300,000 to $80,000 through aging review and follow-up.",
      "Identify recurring billing errors and develop corrective workflows to improve claim accuracy.",
    ],
  },
];

export type LeadershipItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const leadership: LeadershipItem[] = [
  {
    role: "Full-time Volunteer Representative",
    org: "The Church of Jesus Christ of Latter-day Saints, Cochabamba, Bolivia",
    period: "Jul 2023 to Jul 2025",
    bullets: [
      "Learned Spanish in an immersive environment, reaching advanced professional proficiency in speaking and writing.",
      "Led and coached rotating teams of 14 to 18 volunteers while teaching and presenting daily.",
    ],
  },
  {
    role: "Stake Youth Leadership Council Member",
    org: "The Church of Jesus Christ of Latter-day Saints, Salt Lake City, UT",
    period: "Jul 2022 to Jul 2023",
    bullets: [
      "Planned and executed youth activities, coordinating logistics and communication with leaders and participants.",
      "Led discussions and shared feedback in leadership meetings to guide decision-making and program direction.",
    ],
  },
];

export const education = [
  {
    school: "Brigham Young University",
    degree: "Pre-Business Major",
    period: "Expected Apr 2029",
    details: "GPA 3.73 / 4.00 · Coursework: IS 201, IS 110, ACC 200. Fall 2026: ACC 310 and CS 111. Preparing to apply to Information Systems.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const certifications = [
  "Google AI Essentials",
  "Google AI Professional",
  "AI Fluency: Frameworks & Foundations (Anthropic)",
  "Claude 101 (Anthropic)",
];

export const skills: SkillGroup[] = [
  { category: "AI & automation", skills: ["Claude API", "MCP", "Trigger.dev", "Make.com", "Workflow Design"] },
  { category: "Software & data", skills: ["TypeScript", "Next.js", "Python", "SQL", "PostgreSQL", "Prisma", "Git/GitHub"] },
  { category: "Business systems", skills: ["Excel & VBA", "Tableau", "Dentrix", "ClickUp API", "Accounts Receivable", "Insurance Billing"] },
  { category: "Languages", skills: ["English (Native)", "Spanish (Advanced Professional)"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  linkLabel: string;
  detail: string;
};

export const projects: Project[] = [
  {
    title: "Practice scheduling platform",
    description:
      "Built with my brother for a mobile anesthesia practice. Coordinates providers and offices through role-specific calendars and AI-assisted scheduling for owner review.",
    detail: "Engineering focus: access controls, audit trails, and notifications that respect scheduling undo windows.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    url: "https://github.com/rylekjstaker/rylekjstaker/blob/main/case-studies/practice-scheduling.md",
    linkLabel: "Read the case study",
  },
  {
    title: "Dental claims triage",
    description:
      "A demo that turns Dentrix CSV/PDF aging reports into a prioritized worklist with Claude-generated explanations and draft payer follow-up letters.",
    detail: "Engineering focus: report parsing, server-side AI calls, and deterministic fallback. Synthetic data only; output requires review.",
    tags: ["Next.js", "Claude API", "JavaScript", "CSV/PDF"],
    url: "https://github.com/rylekjstaker/DentalInsuranceAgingAutoAnalysis",
    linkLabel: "Explore the source",
  },
  {
    title: "Lead research automation",
    description:
      "A scheduled workflow that searches for businesses, ranks candidates, and creates up to five ClickUp lead tasks per week with outreach drafts for human review.",
    detail: "Engineering focus: persistent duplicate checks, time-zone-aware quotas, API integration, and unit tests. Scoring is rule-based.",
    tags: ["TypeScript", "Trigger.dev", "SerpApi", "ClickUp"],
    url: "https://github.com/rylekjstaker/lead-research-automation",
    linkLabel: "Explore the source",
  },
];

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

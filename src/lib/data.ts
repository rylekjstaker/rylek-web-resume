// Single source of truth for site content. Edit this file to update the site.

export const profile = {
  name: "Rylek Staker",
  title: "Pre-Business Student at BYU, Pivoting Toward Information Systems",
  tagline:
    "Studying business at Brigham Young University while building hands-on skills in web development and data, working toward a move into Information Systems.",
  location: "Draper, UT",
  email: "Rylek.JStaker@gmail.com",
  github: "https://github.com/rylekjstaker",
  linkedin: "https://www.linkedin.com/in/rylekstaker/",
  resumePdf: "/resume.pdf",
  avatar: "", // TODO: drop a headshot in /public and set path, e.g. "/headshot.jpg"
};

export const about = {
  paragraphs: [
    "I'm a Pre-Business student at Brigham Young University with a 3.78 GPA, currently working toward a switch into Information Systems. I'm building that transition through self-directed projects, including this site, using Python, SQL, and modern web tools like Next.js.",
    "Professionally, I work as an Insurance Specialist and Accounts Receivable Manager, where I run billing and collections workflows and use data analysis to cut down outstanding receivables. Before that, I spent two years as a full-time volunteer representative in Bolivia, where I reached advanced professional proficiency in Spanish while leading and coordinating teams.",
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
    role: "Insurance Specialist / Accounts Receivable Manager",
    org: "Evansmiles Dentistry",
    period: "Mar 2026 to Present",
    bullets: [
      "Directed insurance billing and accounts receivable workflows, including claim submission, denial resolution, and collections, to improve reimbursement speed and reduce revenue leakage.",
      "Processed and verified 30+ insurance claims weekly, reducing delays and improving reimbursement timelines.",
      "Analyzed AR aging reports to identify high-risk balances, prioritize collections, and lower days sales outstanding.",
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
      "Led and coordinated teams to improve effectiveness and consistently meet organizational benchmarks.",
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
    details: "GPA 3.78 / 4.00 · Relevant coursework: Accounting 200, Economics 110",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  { category: "Business & Analytical", skills: ["Accounts Receivable Management", "Insurance Billing", "Aging Report Analysis", "Collections"] },
  { category: "Currently Building", skills: ["Python", "SQL", "HTML/CSS", "Next.js", "Git/GitHub"] },
  { category: "Languages", skills: ["English (Native)", "Spanish (Advanced)"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "This Portfolio",
    description:
      "A Next.js, Tailwind CSS, and shadcn/ui resume and portfolio site, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rylekjstaker/rylek-web-resume",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export interface ProfileLink {
  label: string
  href: string
  type: "github" | "linkedin" | "portfolio" | "email" | "phone"
}

export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  email: string
  phone: string
  links: ProfileLink[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
  tools: string[]
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
}

export interface Project {
  name: string
  description: string
  highlights: string[]
  stack: string[]
  tags: string[]
  demoUrl?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Certification {
  title: string
  issuer: string
  url?: string
}

export interface Language {
  name: string
  level: string
}

export interface PortfolioData {
  profile: Profile
  experiences: Experience[]
  education: Education[]
  projects: Project[]
  skills: SkillCategory[]
  certifications: Certification[]
  languages: Language[]
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Gebran Nemes",
    title: "Frontend Developer | Angular, React & Next.js | UI/UX Focused | AI Integration",
    summary:
      "Results-oriented Frontend Developer and Computer Science graduate with a track record building high-performance, AI-integrated web applications using Next.js, React, and Angular. Experienced across the full software lifecycle, from Figma prototyping to deployment with Supabase and Firebase. Focused on translating complex logic into intuitive, user-centric interfaces that improve modern recruitment and productivity workflows.",
    location: "Beirut, Lebanon",
    email: "gebrannemes2003@gmail.com",
    phone: "+96170998429",
    links: [
      { label: "Portfolio", href: "#top", type: "portfolio" },
      { label: "GitHub", href: "https://github.com/GN1370", type: "github" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gebran-nemes", type: "linkedin" },
      { label: "Email", href: "mailto:gebrannemes2003@gmail.com", type: "email" },
      { label: "Phone", href: "tel:+96170998429", type: "phone" },
    ],
  },
  experiences: [
    {
      role: "Frontend Web Developer Trainee",
      company: "ITXI",
      location: "Beirut, Lebanon",
      period: "March 2025 - July 2025",
      highlights: [
        "Architected modern, scalable UI with Angular and TypeScript to improve performance and maintainability.",
        "Integrated Playwright testing suites and managed development workflows in Jira to maintain quality and transparency.",
        "Translated Figma designs into functional, production-ready components backed by Firebase.",
      ],
      tools: ["Angular", "TypeScript", "Playwright", "Jira", "Firebase", "Figma"],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "MoonDev by Questa",
      location: "Remote",
      period: "February 2024 - May 2024",
      highlights: [
        "Engineered an AI-driven recruitment platform in Next.js to optimize candidate search workflows.",
        "Implemented core features with TypeScript, Supabase, and Tailwind CSS, prioritizing mobile responsiveness.",
        "Applied Generative AI tools to deliver intelligent filtering for faster recruiter decision-making.",
      ],
      tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Generative AI"],
    },
    {
      role: "Private Tutor",
      company: "Self-employed",
      location: "Beirut, Lebanon",
      period: "September 2014 - September 2025",
      highlights: [
        "Provided private tutoring to elementary through high school students across multiple subjects.",
        "Built tailored lesson plans to improve individual performance in Arabic, French, and English.",
        "Developed strong communication and adaptability through personalized teaching approaches.",
      ],
      tools: ["Coaching", "Lesson Planning", "Communication"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Lebanese University, Faculty of Sciences II",
      location: "Fanar, Lebanon",
      period: "September 2021 - February 2025",
    },
  ],
  projects: [
    {
      name: "Little Lemon Restaurant",
      description:
        "Front-End Developer Capstone project focused on a responsive restaurant experience and booking flow.",
      highlights: [
        "Designed UX and UI in Figma and implemented a component-based React application.",
        "Built a table booking system with controlled forms, validation, and dynamic availability.",
        "Applied accessibility best practices, semantic HTML, and unit testing.",
      ],
      stack: ["React.js", "JavaScript", "HTML5", "CSS", "Jest", "Figma"],
      tags: ["React", "UX", "Testing"],
      demoUrl: "https://little-lemon-restaurant-gn.vercel.app/",
    },
    {
      name: "AI-Recruitment System",
      description: "Internship project delivering a responsive recruitment platform with AI-powered search.",
      highlights: [
        "Built responsive UI and candidate search features in Next.js.",
        "Enabled AI-based filtering to accelerate recruitment workflows.",
        "Focused on clean, fast UX optimized for recruiter speed.",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Generative AI"],
      tags: ["Next.js", "AI", "Full Stack"],
    },
    {
      name: "Motivaily",
      description: "AI productivity platform with smart challenges and team collaboration.",
      highlights: [
        "Designed UX and UI for AI-generated challenges and progress tracking.",
        "Built responsive pages and contributed to core logic for team features.",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Generative AI"],
      tags: ["Next.js", "AI", "Productivity"],
    },
    {
      name: "Blade-Quest",
      description: "Pixel art game with a responsive interface and persistent player progress.",
      highlights: [
        "Designed a user-friendly interface for gameplay management.",
        "Created pixel art and game assets for immersive experience.",
        "Integrated MongoDB to track player progress.",
      ],
      stack: ["React.js", "JavaScript", "HTML", "CSS", "MongoDB"],
      tags: ["React", "Game", "Database"],
    },
    {
      name: "Better Mental State",
      description: "Well-being web experience with stress-relief techniques and motivational content.",
      highlights: [
        "Created a responsive, intuitive interface focused on emotional well-being.",
        "Built with vanilla HTML, CSS, and JavaScript.",
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["Frontend", "Wellness"],
    },
    {
      name: "MAG Marketplace",
      description: "Marketplace platform with listings, reservations, and data-backed interactions.",
      highlights: [
        "Developed key marketplace features including listings and reservations.",
        "Designed the main UI and built MySQL-backed product flows.",
      ],
      stack: ["React.js", "JavaScript", "MySQL", "Tailwind CSS"],
      tags: ["React", "Marketplace", "Database"],
    },
  ],
  skills: [
    {
      category: "Frontend Development",
      skills: ["Angular", "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend & Databases",
      skills: ["Supabase", "Firebase", "MongoDB", "MySQL", "Oracle"],
    },
    {
      category: "Testing & Tools",
      skills: ["Playwright", "Jest", "Git", "GitHub", "Jira", "Visual Paradigm"],
    },
    {
      category: "Design & Delivery",
      skills: ["Figma", "UI/UX Design", "Scrum / Agile", "Project Planning"],
    },
    {
      category: "AI Integration",
      skills: ["Generative AI Tools", "AI-based filtering", "AI-generated content logic"],
    },
  ],
  certifications: [
    {
      title: "Meta Front-End Developer",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/specialization/GGQKEYI832DT",
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/TW50AQK3TQET",
    },
    {
      title: "Version Control",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/AQNN2WSV3IG9",
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/EI6VTKVH6G4F",
    },
    {
      title: "HTML and CSS in depth",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/G4UF03IR1ET3",
    },
    {
      title: "React Basics",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/91XE15XZZ183",
    },
    {
      title: "Advanced React",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/T9O5N7NQ671Y",
    },
    {
      title: "Principles of UX/UI Design",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/4K7X2WNOBK23",
    },
    {
      title: "Front-End Developer Capstone",
      issuer: "Meta",
      url: "https://www.coursera.org/account/accomplishments/verify/BB0FY53ZJSP6",
    },
    {
      title: "Elements of AI for Business",
      issuer: "MinnaLearn",
      url: "https://courses.minnalearn.com/certificate/en/elements-of-ai-for-business/a58989b3-c7ea-42d4-ad47-4d82188115e0",
    },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" },
  ],
}

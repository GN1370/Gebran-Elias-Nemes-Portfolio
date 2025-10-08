import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    title: "Front-end Web Development Trainee (Angular)",
    company: "ITXI",
    location: "On-site",
    period: "March 2025 - July 2025",
    description: [
      "Undergoing hands-on training focused on modern front-end development using Angular and TypeScript",
      "Working with tools and platforms including Playwright for testing, Jira for project management, Firebase for backend services, and Figma for UI/UX design",
      "Strengthening practical skills and industry knowledge to support long-term growth in web development",
    ],
    technologies: ["Angular", "TypeScript", "Playwright", "Jira", "Firebase", "Figma"],
  },
  {
    title: "Full-Stack Development Intern",
    company: "MoonDev by Questa",
    location: "Remote",
    period: "February 2024 - May 2024",
    description: [
      "Contributed to developing a Next.js-based AI recruitment system to optimise candidate search for recruiters",
      "Utilised technologies like TypeScript, Supabase, Tailwind CSS and AI Generative Tools to implement features, ensuring a responsive and scalable application",
      "Enhanced problem-solving, teamwork, and attention to detail through a real-world project",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AI Tools"],
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    location: "Lebanon",
    period: "2014 - Present",
    description: [
      "Provided private tutoring to students from elementary to high school across multiple subjects (Arabic, French, and English)",
      "Focused on improving student performance by developing tailored lesson plans based on individual learning needs",
      "Developed strong communication, patience, and adaptability skills through personalized teaching approaches",
    ],
    technologies: ["Communication", "Teaching", "Curriculum Development"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:border-accent transition-colors">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-balance">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-pretty leading-relaxed flex gap-2">
                      <span className="text-accent mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

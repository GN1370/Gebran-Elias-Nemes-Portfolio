import { Card } from "@/components/ui/card"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Databases",
    skills: ["Supabase", "Firebase", "MongoDB", "MySQL", "Oracle", "Relational Databases"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Visual Paradigm",
      "GitHub",
      "Figma",
      "Jira",
      "Webflow",
      "Generative AI Tools",
      "Microsoft Office",
    ],
  },
  {
    category: "Development Areas",
    skills: [
      "Full-Stack Development",
      "Front-End Development",
      "Web Development",
      "UI/UX Design",
      "Testing (Playwright)",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Analytical Skills",
      "Critical Thinking",
      "Attention to Detail",
      "Teamwork",
      "Leadership",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "Project Planning",
      "Project Management",
      "Creativity",
      "Adaptability",
      "Skill Development",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:border-accent transition-colors">
              <h3 className="text-lg font-bold mb-4 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"

export function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Skills"
          title="Focused toolkit across frontend, AI integration, and delivery."
          description="Balanced coverage across frameworks, data platforms, testing, and design collaboration."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <Card key={category.category} className="p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{category.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
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

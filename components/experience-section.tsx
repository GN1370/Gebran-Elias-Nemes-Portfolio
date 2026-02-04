import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"

export function ExperienceSection() {
  const { experiences } = portfolioData

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="Structured delivery across product, design, and AI workflows."
          description="A concise timeline of roles focused on frontend architecture, AI-enabled features, and quality delivery."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border/70" aria-hidden="true" />
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.role}`} className="relative pl-12">
                <div className="absolute left-2 top-4 h-4 w-4 rounded-full border border-border bg-background shadow-sm" />
                <Card className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-balance">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

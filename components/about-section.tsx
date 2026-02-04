import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"

export function AboutSection() {
  const { profile, education, languages } = portfolioData

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="About"
          title="Engineering-focused, user-centric delivery."
          description="Grounded in clean UI architecture, AI-enabled workflows, and collaborative product delivery."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">{profile.summary}</p>
            <p className="text-pretty">
              I enjoy building products where design systems, performance, and accessibility are treated as first-class
              requirements. My projects span recruitment, productivity, and consumer web experiences with a consistent
              focus on clarity, speed, and maintainability.
            </p>
          </div>
          <div className="space-y-4">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Education</p>
              <div className="mt-4 space-y-3">
                {education.map((item) => (
                  <div key={item.degree}>
                    <p className="font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.location} · {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Languages</p>
              <div className="mt-4 grid gap-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{language.name}</span>
                    <span className="text-xs text-muted-foreground">{language.level}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

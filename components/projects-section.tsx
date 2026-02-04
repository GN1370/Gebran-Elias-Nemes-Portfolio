"use client"

import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const { projects } = portfolioData
  const [activeTag, setActiveTag] = useState<string>("All")

  const tags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)))
    return ["All", ...Array.from(set)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects
    return projects.filter((project) => project.tags.includes(activeTag))
  }, [activeTag, projects])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable impact and polished UX."
          description="A focused set of projects spanning AI-enabled recruitment, productivity, and consumer web products."
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Button
              key={tag}
              type="button"
              variant={activeTag === tag ? "default" : "outline"}
              size="sm"
              className={activeTag === tag ? "bg-foreground text-background" : "bg-transparent"}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.name} className="p-6 flex flex-col gap-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-balance">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 text-pretty">{project.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              {project.demoUrl ? (
                <div className="pt-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

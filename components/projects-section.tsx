import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  features: string[]
  status?: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "AI-Recruitment System",
    description:
      "A web-based recruitment platform developed during the MoonDev by Questa Internship that enables recruiters to efficiently search for candidates with specific skills and experiences.",
    technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Supabase", "Generative AI Tools"],
    features: [
      "Intelligent filtering to help recruiters quickly find the right candidates",
      "Responsive and intuitive interface designed with Next.js and Tailwind CSS",
      "Fast and secure data retrieval using Supabase database",
      "Reduced time spent reviewing resumes through AI-powered features",
    ],
  },
  {
    title: "Motivaily",
    description:
      "Todo list platform with AI-generated challenges and team management features to help users stay motivated and productive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Generative AI Tools"],
    features: [
      "Responsive user-friendly interface optimized for user experience",
      "AI-generated personalized challenges tailored to user's goals and habits",
      "Team management features for collaborative productivity",
      "Progress tracking and motivation system",
    ],
    status: "Under Development",
  },
  {
    title: "Blade-Quest",
    description:
      "A 2D pixel-based web game where players take on the role of a knight fighting monsters by attacking or dodging.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "MongoDB"],
    features: [
      "Responsive, user-friendly interface for outside gameplay interactions",
      "Custom pixel art and game assets for immersive gameplay experience",
      "MongoDB database integration to track player progress",
      "Real-time combat mechanics with attack and dodge systems",
    ],
    status: "Under Development",
  },
  {
    title: "MAG Marketplace",
    description:
      "An online marketplace platform enabling users to list items for sale and reserve them to contact the seller.",
    technologies: ["React.js", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Responsive, user-friendly interface for seamless browsing",
      "Product listing and reservation system",
      "MySQL relational database for managing product listings and user data",
      "Admin capabilities for product edits and modifications",
    ],
  },
  {
    title: "Better Mental State",
    description:
      "A front-end website to assist users in improving their mental state with features aimed at improving emotional well-being.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Intuitive responsive user-friendly interface",
      "Stress-relief techniques and motivational content",
      "Accessible features for improving emotional well-being at any time",
      "Pure front-end implementation with vanilla JavaScript",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col hover:border-accent transition-colors">
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-bold text-balance">{project.title}</h3>
                  {project.status && (
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {(project.github || project.demo) && (
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/data/portfolio"
import { Github, Linkedin, Mail, Phone, ArrowUpRight, FileText } from "lucide-react"

export function HeroSection() {
  const { profile } = portfolioData
  return (
    <section id="top" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="text-xs tracking-wide">
                Frontend Engineering
              </Badge>
              <span className="text-sm text-muted-foreground">{profile.location}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">{profile.title}</p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg">
                <a href="#contact">Contact</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="/Gebran_Nemes_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  CV (PDF)
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
                <p className="text-base font-medium mt-2">{profile.email}</p>
                <p className="text-sm text-muted-foreground">{profile.phone}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {profile.links
                  .filter((link) => ["github", "linkedin", "email", "phone"].includes(link.type))
                  .map((link) => (
                    <Button key={link.type} asChild variant="outline" className="justify-start">
                      <a href={link.href} target={link.type === "email" || link.type === "phone" ? undefined : "_blank"} rel="noopener noreferrer">
                        {link.type === "github" && <Github className="mr-2 h-4 w-4" />}
                        {link.type === "linkedin" && <Linkedin className="mr-2 h-4 w-4" />}
                        {link.type === "email" && <Mail className="mr-2 h-4 w-4" />}
                        {link.type === "phone" && <Phone className="mr-2 h-4 w-4" />}
                        {link.label}
                      </a>
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

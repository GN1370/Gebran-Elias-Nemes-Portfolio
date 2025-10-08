import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Hi, I'm <span className="">Gebran Elias Nemes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance">Full Stack Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I build exceptional digital experiences with modern web technologies. Specializing in React, Next.js,
            Angular, and full-stack development with a focus on AI-powered solutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/GN1370" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/gebran-nemes" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="mailto:gebrannemes2003@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="tel:+96170998429">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

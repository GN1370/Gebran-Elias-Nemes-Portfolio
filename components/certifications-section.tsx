import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
}

const certifications: Certification[] = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta (Coursera)",
    date: "2025",
  },
  {
    title: "Version Control",
    issuer: "Meta (Coursera)",
    date: "2025",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta (Coursera)",
    date: "2025",
  },
  {
    title: "Lebanese Civil Defence Certificate",
    issuer: "Lebanese Civil Defence",
    date: "2023",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-balance">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 hover:border-accent transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-balance mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {cert.date}
                    </Badge>
                    {cert.credentialId && (
                      <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

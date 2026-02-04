import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"
import { ExternalLink } from "lucide-react"

export function CertificationsSection() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning with industry-recognized credentials."
          description="Credentials spanning front-end engineering, React mastery, and AI foundations."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Card key={`${cert.title}-${cert.issuer}`} className="p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{cert.issuer}</p>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-balance">{cert.title}</h3>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent inline-flex items-center gap-1"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

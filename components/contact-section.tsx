import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { portfolioData } from "@/lib/data/portfolio"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const { profile } = portfolioData

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the next release together."
          description="Open to frontend roles, product collaborations, and AI-enabled web projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">{profile.location}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

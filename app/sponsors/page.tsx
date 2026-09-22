import Image from "next/image"
import { ArrowUpRight, FileText, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sponsors — WOSS Electrathon",
  description:
    "The partners behind WOSS Electrathon — and how your organization can put students in the shop and a car on the grid.",
}

const partners = [
  {
    name: "Atura Power",
    role: "Season sponsor",
    detail: "An Ontario power generator investing in the next generation of energy and engineering talent.",
    href: "https://aturapower.com/",
    logo: "/images/sponsers/atura.webp",
  },
  {
    name: "Lions Club of Oakville",
    role: "Season sponsor",
    detail: "Serving the Oakville community for decades, invested in hands-on STEM education.",
    logo: "/images/sponsers/lions.png",
  },
  {
    name: "Orbit Robotics",
    role: "Technical support",
    detail: "Build support and technical guidance throughout the WarRig X2 season.",
  },
]

// Bronze tier: small logo and name on the website, per the 2027 sponsorship packet
const bronzeSponsors = [
  {
    name: "Maple Spark",
    href: "https://maplespark.ai",
    logo: "/images/sponsers/maplespark.png",
  },
]

const tiers = [
  {
    name: "Bronze",
    range: "Up to $500",
    detail: "Small logo or company name on the website and team uniform.",
  },
  {
    name: "Silver",
    range: "$500 – $1,000",
    detail: "Logo on the car, printed materials, uniforms, and banners, plus season-long social media acknowledgement.",
  },
  {
    name: "Gold",
    range: "$1,000 – $1,500",
    detail: "Medium logo on the car, website, uniforms, and banners, plus season-long social media acknowledgement.",
  },
  {
    name: "Diamond",
    range: "$2,000+",
    detail: "Prominent logo placement everywhere the team appears, plus dedicated customizable marketing.",
  },
]

const reasons = [
  {
    title: "Your logo races",
    detail: "Sponsor branding rides on car #843 at every event and lives on this site year-round.",
  },
  {
    title: "Real engineering, not a demo",
    detail:
      "Students design, machine, weld, and wire everything — then defend it in a judged engineering design report.",
  },
  {
    title: "Thirty-plus students and counting",
    detail:
      "Weekly open workshops have introduced more than thirty students to CAD, manufacturing, electronics, and embedded programming.",
  },
]

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b">
        <div className="container px-4 pb-16 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Sponsors</p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Backed by our community
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Racing an electric car costs real money — motors, aluminum, batteries, entry fees. Our partners
            make it possible.
          </p>
        </div>
      </section>

      {/* Current partners */}
      <section aria-labelledby="partners-heading">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="partners-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Our partners
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-3">
            {partners.map((partner) => (
              <li key={partner.name} className="bg-card p-8">
                {partner.logo && (
                  <div className="relative mb-6 h-16 w-40">
                    <Image src={partner.logo} alt="" fill className="object-contain object-left" />
                  </div>
                )}
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{partner.role}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
                    >
                      {partner.name}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    partner.name
                  )}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{partner.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Bronze sponsors
          </h3>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
            {bronzeSponsors.map((sponsor) => (
              <li key={sponsor.name}>
                <a
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-display text-lg font-medium hover:text-primary transition-colors duration-200"
                >
                  <span className="relative h-10 w-10 shrink-0">
                    <Image src={sponsor.logo} alt="" fill className="object-contain" />
                  </span>
                  {sponsor.name}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why sponsor */}
      <section aria-labelledby="why-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="why-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Why sponsor a high-school race team
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-2 border-primary pl-5">
                <h3 className="font-display text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section aria-labelledby="tiers-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="tiers-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Sponsorship levels
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <li key={tier.name} className="bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{tier.range}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{tier.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Terms are adaptable to meet sponsor requirements — in-kind materials and services are welcome
            too.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="sponsor-cta-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h2 id="sponsor-cta-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Put your name on the next build
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Write to us and we'll find the level that fits — or contribute directly through our Hack Club
              Bank page. Every dollar is student-managed and goes into the program.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:wosselectrathon@gmail.com">wosselectrathon@gmail.com</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://hcb.hackclub.com/donations/start/woss-electrathon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </a>
              </Button>
              <a
                href="/docs/sponsorship-2027.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <FileText className="h-4 w-4" />
                2027 sponsorship packet (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

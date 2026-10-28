import Image from "next/image"
import { FileText, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sponsors — WOSS Electrathon",
  description:
    "The partners behind WOSS Electrathon — and how your organization can put students in the shop and a car on the grid.",
}

type Sponsor = {
  name: string
  logo?: string
  href?: string
}

type TileSize = "lg" | "md" | "sm"

// Tile size signals tier ("lg" is reserved for Gold and Diamond)
const sponsorTiers: { label: string; size: TileSize; sponsors: Sponsor[] }[] = [
  {
    label: "Silver",
    size: "md",
    sponsors: [
      // TODO(content): Atura's 2026–27 tier unconfirmed; "probably Silver" per the team
      { name: "Atura Power", logo: "/images/sponsers/atura.webp", href: "https://aturapower.com/" },
      {
        name: "InsightAL",
        logo: "/images/sponsers/insightal.png",
        href: "https://valorasolutionsinc.com",
      },
      // $500 donation (Oct 2026); official inverted logo, used with Shopify's written permission
      { name: "Shopify", logo: "/images/sponsers/shopify.svg", href: "https://www.shopify.com" },
      // $500 CAD donation (Oct 2026). No website to link yet, per the team
      { name: "MyGalaxy Financial", logo: "/images/sponsers/mygalaxy.png" },
    ],
  },
  {
    label: "Bronze",
    size: "sm",
    sponsors: [
      { name: "Maple Spark", logo: "/images/sponsers/maplespark.png", href: "https://maplespark.ai" },
      // In-kind: donated CNC and laser equipment. TODO(content): website URL unconfirmed
      { name: "YD Canada", logo: "/images/sponsers/ydcanada.png" },
      { name: "RPM Industrial Rubber Parts", logo: "/images/sponsers/rpm.webp", href: "https://www.rpmrubberparts.com" },
    ],
  },
  {
    label: "Technical support",
    size: "sm",
    sponsors: [{ name: "Orbit Robotics", logo: "/images/sponsers/orbit.png", href: "https://1360.ca" }],
  },
  {
    label: "Honorary partner",
    size: "sm",
    sponsors: [
      {
        name: "Chris Hadfield",
        logo: "/images/sponsers/hadfield.png",
        href: "https://www.chrishadfield.com",
      },
    ],
  },
]

// One logo box per tier: wide wordmarks stay width-limited, square emblems get room
const tileSizes: Record<TileSize, { tile: string; logo: string }> = {
  lg: { tile: "h-40 sm:w-72", logo: "h-24" },
  md: { tile: "h-32 sm:w-60", logo: "h-16" },
  sm: { tile: "h-28 sm:w-52", logo: "h-12" },
}

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

function SponsorTile({ sponsor, size }: { sponsor: Sponsor; size: TileSize }) {
  const { tile, logo } = tileSizes[size]
  // Logo only; its alt text carries the name (and the link's accessible name)
  const body = sponsor.logo ? (
    <span className={`relative block w-full ${logo}`}>
      <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" />
    </span>
  ) : (
    <span className="font-display text-lg font-semibold">{sponsor.name}</span>
  )
  const base = `flex w-full flex-col items-center justify-center rounded-lg border bg-card px-6 text-center ${tile}`

  return sponsor.href ? (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} transition-colors duration-200 hover:border-primary/60 hover:bg-secondary`}
    >
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  )
}

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

          <div className="mt-10 divide-y border-y">
            {sponsorTiers.map((tier) => (
              <div key={tier.label} className="grid gap-4 py-8 md:grid-cols-[160px_1fr] md:gap-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:pt-3">
                  {tier.label}
                </h3>
                <ul className="flex flex-wrap gap-4">
                  {tier.sponsors.map((sponsor) => (
                    <li key={sponsor.name} className="w-full sm:w-auto">
                      <SponsorTile sponsor={sponsor} size={tier.size} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

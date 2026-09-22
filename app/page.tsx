import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeline = [
  {
    period: "2024",
    title: "Club founded",
    detail: "A group of students at White Oaks Secondary School starts an Electrathon team from scratch.",
  },
  {
    period: "May 2025",
    title: "WarRig X1 debuts",
    detail:
      "Our first car runs the full 70-minute endurance race at Waterloo and takes home the Dennis Weishar Engineering Design Award.",
  },
  {
    period: "May 2026",
    title: "Podium at Waterloo",
    detail:
      "WarRig X2's rebuilt drivetrain delivers: 3rd in the feature race, 4th overall, and 3rd for the Multimatic Engineering Design Award.",
  },
  {
    period: "2027",
    title: "Clean-sheet build",
    detail:
      "An all-new frame is underway — lighter, more aerodynamic, and designed to go faster on less energy.",
  },
]

// As-built figures from the WarRig X2 Engineering Design Report (2026)
const asBuilt = [
  { value: "55 km/h", label: "GPS-verified top speed" },
  { value: "3×", label: "Kraken X60 brushless motors" },
  { value: "11.46:1", label: "Two-stage gear reduction" },
]

const partners = ["Atura Power", "Lions Club of Oakville"]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85svh] items-end">
        <Image
          src="/images/image.jpg"
          alt="The WOSS Electrathon team gathered around their car outside the school"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative px-4 pb-20 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            WOSS Electrathon · Oakville, Ontario
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl max-w-3xl">
            We build and race electric cars.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            A student team designing, welding, and wiring our own Electrathon race car — and looking for
            partners to help us go faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/sponsors">
                Become a sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story so far */}
      <section aria-labelledby="story-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="story-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The story so far
          </h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <li key={item.period} className="bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{item.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The car */}
      <section aria-labelledby="car-heading" className="border-t">
        <div className="container grid items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src="/images/cars/x2.jpg"
              alt="WarRig X2, car number 843, in its navy and yellow bodywork"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The car</p>
            <h2 id="car-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              WarRig X2
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our second car, rebuilt around what the 2025 race taught us — every major change traces to a
              measured number from WarRig X1's telemetry.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {asBuilt.map((spec) => (
                <div key={spec.label}>
                  <dt className="order-last mt-1 text-xs text-muted-foreground">{spec.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-foreground">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/car">
                Full build details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners + CTA */}
      <section aria-labelledby="cta-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Backed by</p>
          <ul className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
            {partners.map((name) => (
              <li key={name} className="font-display text-2xl font-medium text-foreground">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            With technical support from Orbit Robotics this season.
          </p>

          <div className="mt-16 grid gap-10 rounded-lg border bg-card p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 id="cta-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Sponsor the build
              </h2>
              <p className="mt-3 text-muted-foreground">
                Your support puts students in the shop and a car on the grid — and puts your logo on both.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/sponsors">
                    Become a sponsor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
            <div className="md:border-l md:pl-10">
              <h3 className="font-display text-xl font-semibold tracking-tight">Join the team</h3>
              <p className="mt-3 text-muted-foreground">
                No experience needed — just show up ready to build. Open to all White Oaks students.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <a href="mailto:wosselectrathon@gmail.com">wosselectrathon@gmail.com</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Races — WOSS Electrathon",
  description:
    "WOSS Electrathon's racing record: the WarRig X1 debut, the Fall Kickoff, and WarRig X2 at the University of Waterloo EV Challenge.",
}

type RaceEntry = {
  period: string
  event: string
  car: string
  result?: string
  story: string
}

const races: RaceEntry[] = [
  {
    period: "May 23, 2026",
    event: "University of Waterloo EV Challenge 2026",
    car: "WarRig X2 · #843",
    result: "3rd in the feature race · 4th overall · 3rd, Multimatic Engineering Design Award",
    story:
      "The rebuild delivered: three Kraken X60 motors, a 120 A electrical system, and live CAN telemetry carried X2 to 3rd in the feature race, 4th overall in the competition, and a design-award podium.",
  },
  {
    period: "Fall 2025",
    event: "Fall Kickoff",
    car: "WarRig X1 · #843",
    story:
      "A rear sidewall failure in the closing laps put us on a flat tire — and we finished anyway. That tire is why X2 runs a heavy-duty rear wheel built for continuous racing load.",
  },
  {
    period: "May 2025",
    event: "University of Waterloo EV Challenge 2025",
    car: "WarRig X1 · #843",
    result: "Dennis Weishar Engineering Design Award",
    story:
      "Our debut. X1 completed the full 70-minute endurance race, took home the Dennis Weishar Engineering Design Award, and logged the telemetry that became the blueprint for everything X2 fixed.",
  },
]

export default function RacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end">
        <Image
          src="/images/races/panning.jpg"
          alt="WarRig X2, car 843, at speed during the 2026 Waterloo EV Challenge"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative px-4 pb-16 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Race record
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">On the grid</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Electrathon is efficiency racing: a fixed battery budget, a full hour on track, and the most
            distance wins. Design discipline beats raw power.
          </p>
        </div>
      </section>

      {/* Race history */}
      <section aria-labelledby="history-heading">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="history-heading" className="sr-only">
            Race history
          </h2>
          <ol className="space-y-px overflow-hidden rounded-lg border bg-border">
            {races.map((race) => (
              <li key={race.event} className="grid gap-4 bg-card p-6 md:grid-cols-[180px_1fr] md:gap-10 md:p-8">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">{race.period}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{race.car}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{race.event}</h3>
                  {race.result && <p className="mt-1.5 font-medium text-primary">{race.result}</p>}
                  <p className="mt-2 max-w-2xl text-muted-foreground">{race.story}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Next season's schedule lands here once the 2026–27 calendar is confirmed.
          </p>

          <ul className="mt-16 grid gap-4 sm:grid-cols-3">
            <li className="relative aspect-[3/2] overflow-hidden rounded-lg border">
              <Image
                src="/images/races/rain-start.jpg"
                alt="A rainy race start at the 2026 EV Challenge, crowds lining the barriers"
                fill
                className="object-cover"
              />
            </li>
            <li className="relative aspect-[3/2] overflow-hidden rounded-lg border">
              <Image
                src="/images/races/chicane.jpg"
                alt="Car 843 leading two competitors through the cone chicane"
                fill
                className="object-cover"
              />
            </li>
            <li className="relative aspect-[3/2] overflow-hidden rounded-lg border">
              <Image
                src="/images/races/driver.jpg"
                alt="The driver of car 843 mid-corner at the EC3 turn"
                fill
                className="object-cover"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="races-cta-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h2 id="races-cta-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Help us go further on the same charge
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every sponsor dollar goes into the car and the students who build it.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/sponsors">
                Become a sponsor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

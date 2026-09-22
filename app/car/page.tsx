import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "WarRig X2 — WOSS Electrathon",
  description:
    "WarRig X2, car #843: a student-built Electrathon racer with a three-motor brushless drivetrain, CAN-bus telemetry, and a data-driven redesign story.",
}

// As-built specifications from the WarRig X2 Engineering Design Report (2026), Table 2
const specs = [
  { label: "Frame", value: "6061-T6 aluminum tubing, carried over from X1" },
  { label: "Drive motors", value: "3× Kraken X60 brushless, integrated Talon FX" },
  { label: "Total reduction", value: "11.46:1 — 12:60 gearbox stage, 24:55 chain stage" },
  { label: "Top speed", value: "55 km/h GPS-verified in testing" },
  { label: "Battery", value: "12 V lead-acid, 55 Ah" },
  { label: "Main breaker", value: "Bussmann HI-AMP 120 A waterproof" },
  { label: "Control", value: "NI roboRIO + Raspberry Pi driver station" },
  { label: "Telemetry", value: "CAN bus — current, voltage, RPM, temperature, GPS" },
]

const optimizations = [
  {
    title: "Drivetrain: one brushed motor → three Krakens",
    story:
      "X1's single brushed motor lost torque as it heated and capped out around 373 W. X2 runs three Kraken X60 brushless motors into a shared gearbox at a retuned 11.46:1 reduction — predicted 0–50 km/h in about 14 seconds, versus roughly 60 seconds to 40 km/h for X1.",
  },
  {
    title: "Motor mount: the prototype that failed on purpose",
    story:
      "The first mount was 3D-printed in PLA and bolted down through a centerline bolt pattern. Bench testing showed the plate edges lifting under gearbox reaction torque — so the final machined-and-welded aluminum mount moved the bolts to the lateral edges, cutting predicted edge deflection by roughly 87% before any metal was cut.",
  },
  {
    title: "Electrical: from two breaker trips to zero",
    story:
      "The 2025 race ended with two unexplained 40 A breaker trips and no data to diagnose them. X2 carries a correctly-sized 120 A breaker, three-tier cabling, and a live CAN telemetry stream — zero trips across all 2026 test sessions, and one chain alignment issue caught by the data before it became a failure.",
  },
]

export default function CarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-end">
        <Image
          src="/images/cars/x2.jpg"
          alt="WarRig X2, car number 843, in navy and yellow bodywork outside the shop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative px-4 pb-16 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Car #843 · 2026 season · 3rd in the feature race
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            WarRig X2
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A rebuild driven by race data: same proven frame as X1, all-new drivetrain and electronics. At
            the 2026 EV Challenge it finished 3rd in the feature race, 4th overall, and took 3rd for the
            Multimatic Engineering Design Award.
          </p>
        </div>
      </section>

      {/* Specs */}
      <section aria-labelledby="specs-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="specs-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            As-built specifications
          </h2>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-card p-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            Figures from our 2026 Engineering Design Report, submitted to the University of Waterloo EV
            Challenge.
          </p>
        </div>
      </section>

      {/* Optimization stories */}
      <section aria-labelledby="opt-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Built on data
              </p>
              <h2 id="opt-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Every change traces to a failure we measured
              </h2>
              <div className="mt-8 space-y-8">
                {optimizations.map((opt) => (
                  <div key={opt.title} className="border-l-2 border-primary pl-5">
                    <h3 className="font-display text-lg font-semibold">{opt.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{opt.story}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border">
                <Image
                  src="/images/cars/gearbox.jpg"
                  alt="The three-Kraken gearbox assembly: 12-tooth pinions driving a shared 60-tooth output gear"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                The shared-gearbox drivetrain: three 12T pinions into one 60T output gear, then a 24:55 chain
                stage to the rear wheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* X1 legacy */}
      <section aria-labelledby="x1-heading" className="border-t">
        <div className="container grid items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src="/images/cars/war.jpg"
              alt="The WarRig aluminum chassis in the shop"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The foundation</p>
            <h2 id="x1-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              WarRig X1 — one full season of data
            </h2>
            <p className="mt-4 text-muted-foreground">
              X1 ran the complete 70-minute endurance race at the 2025 EV Challenge — winning the Dennis
              Weishar Engineering Design Award — and its telemetry log became the blueprint for X2. The
              aluminum chassis and front end carried over unchanged: post-season inspection found no cracks,
              no loosened fasteners, and no fatigue anywhere.
            </p>
            <p className="mt-4 text-muted-foreground">
              For 2027, we're going clean-sheet at last: an all-new frame built from scratch — lighter, more
              aerodynamic, and designed to go faster on less energy than anything we've raced before.
            </p>
          </div>
        </div>
      </section>

      {/* EDR CTA */}
      <section aria-labelledby="edr-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h2 id="edr-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Read the full engineering story
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              The complete design report covers the drivetrain math, the motor-mount FEA, the electrical
              rebuild, and the telemetry system — written and engineered entirely by students.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href="/docs/warrig-x2-edr-2026.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Engineering Design Report (PDF)
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sponsors">
                  Support the next build
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

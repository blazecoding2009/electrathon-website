import Image from "next/image"
import Link from "next/link"
import { Globe, Instagram, Mail, MapPin } from "lucide-react"

// Unlinked page: shared directly with prospective sponsors, kept out of search results.
// Photos are the team's own (mostly from the WarRig X2 design report).
export const metadata = {
  title: "Where Your Sponsorship Goes — WOSS Electrathon",
  description: "What WOSS Electrathon sponsorship funds buy, and what sponsors receive in return.",
  robots: { index: false, follow: false },
}

const uses = [
  {
    title: "Kraken motors",
    image: "/images/sponsorship/kraken.jpg",
    alt: "A Kraken X60 motor on the team's gearbox",
    detail: "Brushless motors that power the drivetrain of our cars, one of our largest single costs.",
  },
  {
    title: "Control system parts",
    image: "/images/sponsorship/control.jpg",
    alt: "The car's roboRIO controller and power distribution panel",
    detail: "Raspberry Pis, microcontrollers, motor controllers, and sensors that run and monitor the vehicle.",
  },
  {
    title: "Wiring and electrical",
    image: "/images/sponsorship/wiring.jpg",
    alt: "The 120 A main breaker and high-current cabling on the car",
    detail: "Wire, connectors, fuses, and power distribution components for safe, reliable high-current systems.",
  },
  {
    title: "Aluminum bar and sheet stock",
    image: "/images/sponsorship/aluminum.jpg",
    alt: "The aluminum 2027 chassis clamped for welding",
    detail: "Chassis frame members, mounting plates, and brackets that students cut, weld, and machine.",
  },
  {
    title: "Hex stock",
    image: "/images/sponsorship/hex.jpg",
    alt: "The gearbox output with its hex shaft",
    detail: "Material for shafts, axles, and drivetrain parts machined by our team.",
  },
  {
    title: "Polycarbonate",
    image: "/images/sponsorship/polycarbonate.jpg",
    alt: "Car 843 on track, showing its clear polycarbonate front panel",
    detail: "Body panels and protective components for the vehicles.",
  },
  {
    title: "Hardware and fasteners",
    image: "/images/sponsorship/hardware.jpg",
    alt: "A front spindle and brake assembly, bolted together",
    detail: "Bolts, bearings, and small parts that every build needs and every repair uses.",
  },
  {
    title: "Testing and spares",
    image: "/images/sponsorship/testing.jpg",
    alt: "The 3D-printed prototype motor mount the team tested before machining the final part",
    detail: "Replacement parts and materials so we can test, break, fix, and improve before race day.",
  },
]

const linkClass = "hover:text-primary transition-colors duration-200"

export default function SponsorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b">
        <div className="container px-4 pb-16 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            WOSS Electrathon · White Oaks Secondary School · Oakville, Ontario
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Where your sponsorship goes</h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            We are a 24-member student engineering team that designs, builds, and races electric vehicles at the
            University of Waterloo Electric Vehicle Challenge. This season we are building two cars, a senior car on
            a new chassis and a second new chassis for our junior team. Every contribution goes directly into
            materials and parts. Here is what your funds can help us buy.
          </p>
        </div>
      </section>

      {/* What funds are used for */}
      <section aria-labelledby="uses-heading">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <h2 id="uses-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What funds are used for
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2">
            {uses.map((use) => (
              <li key={use.title} className="flex items-center gap-5 bg-card p-5">
                <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-md border sm:w-40">
                  <Image src={use.image} alt={use.alt} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{use.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{use.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What sponsors receive + about the team */}
      <section className="border-t">
        <div className="container grid gap-12 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">What sponsors receive</h2>
            <p className="mt-4 text-muted-foreground">
              Recognition on our race cars, on our team website (wossethon.ca), and on our team merchandise,
              including hoodies and shirts. We also share updates with our sponsors throughout the season.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">About our team</h2>
            <p className="mt-4 text-muted-foreground">
              Last season we placed 3rd in the feature race and won 3rd for the Multimatic Engineering Design
              Award, and we were awarded the Dennis Weishar Engineering Design Award by the University of Waterloo.
            </p>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section aria-labelledby="contact-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <div className="rounded-lg border bg-card p-8 md:p-12">
            <h2 id="contact-heading" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Get in touch
            </h2>
            <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:wosselectrathon@gmail.com" className={linkClass}>
                  wosselectrathon@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
                <Link href="/" className={linkClass}>
                  wossethon.ca
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a
                  href="https://www.instagram.com/wosselectrathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  instagram.com/wosselectrathon
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">1330 Montclair Dr, Oakville, ON L6H 1Z5</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

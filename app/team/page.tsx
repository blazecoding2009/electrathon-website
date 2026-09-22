import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Team — WOSS Electrathon",
  description:
    "Meet the students leading WOSS Electrathon for the 2026–27 season.",
}

const execs = [
  { name: "Arnnav Kudale", role: "President" },
  { name: "Oscar Jiang", role: "VP of Operations" },
  { name: "Keshia Agung", role: "VP of Logistics" },
  { name: "Spencer Wu", role: "Outreach Executive" },
  { name: "Derek Dai", role: "Media / Branding Executive" },
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60svh] items-end">
        <Image
          src="/images/team/team2026.jpg"
          alt="WOSS Electrathon at the 2026 Waterloo EV Challenge with its third-place Multimatic Engineering Design Award"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative px-4 pb-16 pt-40 md:px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            New season. New ideas. Same drive.
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">The team</h1>
        </div>
      </section>

      {/* Executive team */}
      <section aria-labelledby="exec-heading" className="border-t">
        <div className="container px-4 py-20 md:px-6 md:py-28">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">2026–27</p>
          <h2 id="exec-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Executive team
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {execs.map((member) => (
              <li key={member.name} className="bg-card p-6">
                <p className="font-display text-lg font-semibold">{member.name}</p>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workshops + join */}
      <section aria-labelledby="join-heading" className="border-t">
        <div className="container grid items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src="/images/team.webp"
              alt="A team member cutting frame stock on the shop bandsaw"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Thursdays in the shop
            </p>
            <h2 id="join-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Join the team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our weekly workshops have introduced more than thirty students to CAD, manufacturing,
              electronics, and embedded programming — no experience needed, open to all White Oaks students.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:wosselectrathon@gmail.com">wosselectrathon@gmail.com</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.instagram.com/wosselectrathon" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  @wosselectrathon
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

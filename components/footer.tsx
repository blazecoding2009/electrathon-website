import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-8 w-8">
                <Image src="/images/logo.png" alt="" fill className="object-contain" />
              </div>
              <span className="font-display font-semibold">WOSS Electrathon</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Student-built electric racing at White Oaks Secondary School.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:wosselectrathon@gmail.com"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  wosselectrathon@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">1330 Montclair Drive, Oakville, Ontario</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Follow</h3>
            <a
              href="https://www.instagram.com/wosselectrathon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-200"
            >
              <Instagram className="h-4 w-4" />
              @wosselectrathon
            </a>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} WOSS Electrathon
          </p>
        </div>
      </div>
    </footer>
  )
}

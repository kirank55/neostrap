import { Link } from "react-router-dom"
import { BookOpen, GitFork } from "lucide-react"
import NeoButton from "@/components/ui/NeoButton"

/**
 * Header component that renders a sticky navigation bar at the top of the page.
 * 
 * The header contains:
 * - Left side: NeoStrap logo/brand link and documentation button
 * - Right side: GitHub fork button linking to the repository
 * 
 * @returns {JSX.Element} The rendered header navigation component
 */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-(--color-bg) py-1">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        {/* Left side: Logo and Docs button */}
        <div className="flex items-center gap-4">

          <NeoButton variant="brutal" size="default" asChild className="font-bold text-xl">
            <Link to="/">
              NeoStrap
            </Link>
          </NeoButton>
          <NeoButton variant="regular" size="sm" asChild>
            <Link to="/docs">
              <BookOpen className="size-4" />
              Docs
            </Link>
          </NeoButton>
        </div>

        {/* Right side: GitHub Fork link */}
        <NeoButton variant="inverter" size="sm" asChild>
          <a
            href="https://github.com/kirank55/neostrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitFork className="size-4" />
            Fork on GitHub
          </a>
        </NeoButton>
      </div>
    </header>
  )
}

export default Header 

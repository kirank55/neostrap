import { Link } from "react-router-dom"
import { BookOpen, Star } from "lucide-react"
import { NeoButton } from "@/components/ui/NeoButton"

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
    // <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-(--color-bg) py-1">
    <header className="bg-(--accent) sticky top-0 z-50 py-1 w-full">
      <div className="w-full flex h-14 items-center justify-between px-6">
        {/* Left side: Logo and Docs button */}
        <div className="flex items-center gap-4">

          <NeoButton variant="brutal" size="default" asChild className="font-bold text-xl gap-0 bg-white">
            <Link to="/">
              <span className="text-(--color-pink)">N</span>
              <span className="hidden lg:inline">
                eoStrap
              </span>
            </Link>
          </NeoButton>
          <NeoButton variant="brutal" className="bg-white" size="sm" asChild>
            <Link to="/docs">
              <BookOpen className="size-4" />
              Docs
            </Link>
          </NeoButton>
        </div>

        <div className="flex items-center gap-8">
          <NeoButton variant="brutal" className="bg-inherit text-black" size="sm" asChild>
            <a
              href="https://x.com/kirankumargs04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-4" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              <span className="hidden lg:inline">
                Follow
              </span>
            </a>
          </NeoButton>
          {/* Right side: GitHub Fork link */}
          <NeoButton variant="brutal" className="bg-inherit text-black" size="sm" asChild>
            <a
              href="https://github.com/kirank55/neostrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="size-4" />
              <span className="hidden lg:inline">
                GitHub
              </span>
            </a>
          </NeoButton>


        </div>

      </div>
    </header>
  )
}

export default Header 

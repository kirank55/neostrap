import { type ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  to?: string
  type?: "subheading" | "item"
}

type TocItem = {
  label: string
  href: string
}

type DocLayoutProps = {
  navItems: NavItem[]
  tocItems: TocItem[]
  children: ReactNode
}

// function DocLayout({ navItems, tocItems, children }: DocLayoutProps) {
function DocLayout({ navItems, children }: DocLayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto flex px-6 py-10">
        <div className="grid w-full grid-cols-[220px_1fr] gap-8">
          {/* <aside className="h-full rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm"> */}
        <aside className="h-full p-4 shadow-md overflow-auto scrollbar-hide hover:scrollbar-default sticky top-6 max-h-screen">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Components
            </p>
            <nav className="mt-3 flex flex-col gap-3 text-sm">
              {navItems.map((item, idx) => {
                if (item.type === "subheading") {
                  return (
                    <p
                      key={`sub-${idx}-${item.label}`}
                      className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
                    >
                      {item.label}
                    </p>
                  )
                }

                const isActive = item.to ? location.pathname === item.to : false
                return (
                  <Link
                    key={item.to ?? `${idx}-${item.label}`}
                    to={item.to ?? "#"}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-left font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent text-accent-foreground border border-border/70"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </aside>

          <main className="min-w-0 flex flex-col gap-8">{children}</main>

          {/* <aside className="h-full rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm sticky top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              On this page
            </p>
            <ol className="mt-3 flex flex-col gap-2 text-sm">
              {tocItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left text-muted-foreground hover:text-foreground hover:bg-accent"
                  >
                    <span className="text-[10px]">•</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside> */}
        </div>
      </div>
    </div>
  )
}

export { DocLayout }

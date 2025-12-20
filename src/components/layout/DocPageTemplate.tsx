import { type ReactNode } from "react"
import { DocLayout } from "@/components/layout/DocLayout"
import type { TocItem } from "@/components/layout/DocTocContext"

const navItems = [
  { label: "NeoButton", to: "/doc/NeoButton" },
  { label: "NeoSelect", to: "/doc/NeoSelect" },
]

type DocPageTemplateProps = {
  tocItems: TocItem[]
  children: ReactNode
}

function DocPageTemplate({ tocItems, children }: DocPageTemplateProps) {
  return (
    <DocLayout navItems={navItems} tocItems={tocItems}>
      {children}
    </DocLayout>
  )
}

export { DocPageTemplate }

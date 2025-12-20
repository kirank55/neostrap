import { type ReactNode } from "react"
import { DocLayout } from "@/components/layout/DocLayout"
import type { TocItem } from "@/components/layout/DocTocContext"

const navItems = [
  { label: "Buttons", type: "subheading" as const },
  { label: "NeoButton", to: "/doc/NeoButton", type: "item" as const },
  { label: "Select", type: "subheading" as const },
  { label: "NeoSelect", to: "/doc/NeoSelect", type: "item" as const },
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

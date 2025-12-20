import { createContext } from "react"

type TocItem = { label: string; href: string }

type DocTocContextValue = {
  tocItems: TocItem[]
  setTocItems: (items: TocItem[]) => void
}

const DocTocContext = createContext<DocTocContextValue | null>(null)

export type { TocItem, DocTocContextValue }
export { DocTocContext }

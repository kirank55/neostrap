import { useMemo, useState } from "react"
import { Outlet } from "react-router-dom"
import { DocPageTemplate } from "@/components/layout/DocPageTemplate"
import { DocTocContext, type TocItem } from "@/components/layout/DocTocContext"

// const navItems = [
//   { label: "NeoButton", to: "/doc/NeoButton" },
//   { label: "NeoSelect", to: "/doc/NeoSelect" },
// ]

function DocRouteLayout() {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const value = useMemo(() => ({ tocItems, setTocItems }), [tocItems])

  return (
    <DocTocContext.Provider value={value}>
      <DocPageTemplate tocItems={tocItems}>
        <Outlet />
      </DocPageTemplate>
    </DocTocContext.Provider>
  )
}

export { DocRouteLayout }

import { useContext, useEffect } from "react"
import { DocTocContext, type TocItem } from "./DocTocContext"

function useDocToc(items: TocItem[]) {
  const ctx = useContext(DocTocContext)

  useEffect(() => {
    if (ctx) {
      ctx.setTocItems(items)
    }
  }, [ctx, items])
}

export { useDocToc }

import { useDocToc } from "@/components/layout/useDocToc"
import { NeoButton } from "@/components/ui/NeoButton"

const tocItems = [
  { label: "Overview", href: "#overview" },
  { label: "Variants", href: "#variants" },
  { label: "Sizes", href: "#sizes" },
]

function NeoButtonDocPage() {
  useDocToc(tocItems)

  return (
    <>
      <section id="overview" className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Components / Button
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Neostrap UI Button</h1>
          <p className="text-base text-muted-foreground">
            Neo-brutalist primary button plus all variants and sizes.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-border/60 bg-card/60 p-4 text-center shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground">Brutalist Default</p>
          <div className="flex justify-center">
            <NeoButton>Brutal NeoButton</NeoButton>
          </div>
        </div>
      </section>

      <section id="variants" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <span className="text-sm text-muted-foreground">6 styles</span>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap justify-center gap-2">
            <NeoButton variant="default">Default</NeoButton>
            <NeoButton variant="outline">Outline</NeoButton>
            <NeoButton variant="secondary">Secondary</NeoButton>
            <NeoButton variant="ghost">Ghost</NeoButton>
            <NeoButton variant="destructive">Delete</NeoButton>
            <NeoButton variant="link">Link</NeoButton>
          </div>
        </div>
      </section>

      <section id="sizes" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <span className="text-sm text-muted-foreground">Small to large</span>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <NeoButton size="sm">Small</NeoButton>
            <NeoButton size="default">Default</NeoButton>
            <NeoButton size="lg">Large</NeoButton>
          </div>
        </div>
      </section>
    </>
  )
}

export { NeoButtonDocPage }

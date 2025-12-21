import { NeoSelect } from "@/components/ui/NeoSelect"
import { Codepreview } from "@/components/CodeDemo"

const selectCode = `import { NeoSelect } from "@/components/ui/NeoSelect"

export function SelectDemo() {
  return (
    <NeoSelect>
      <option value="">Choose an option</option>
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
      <option value="gamma">Gamma</option>
    </NeoSelect>
  )
}`

const demoOptions = (
  <>
    <option value="">Choose an option</option>
    <option value="alpha">Alpha</option>
    <option value="beta">Beta</option>
    <option value="gamma">Gamma</option>
  </>
)

function NeoSelectDocPage() {

  return (
    <>
      <section id="overview" className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Components / Select
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Neostrap UI Select</h1>
          <p className="text-base text-muted-foreground">
            A neo-brutalist select built for quick, tactile choices with crisp focus states.
          </p>
        </div>
        <Codepreview
          code={selectCode}
          preview={<NeoSelect aria-label="Select example">{demoOptions}</NeoSelect>}
        />
      </section>

      <section id="variants" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <span className="text-sm text-muted-foreground">Three moods</span>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Default</p>
              <NeoSelect aria-label="Default variant">{demoOptions}</NeoSelect>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Outline</p>
              <NeoSelect variant="outline" aria-label="Outline variant">
                {demoOptions}
              </NeoSelect>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold">Soft</p>
              <NeoSelect variant="soft" aria-label="Soft variant">
                {demoOptions}
              </NeoSelect>
            </div>
          </div>
        </div>
      </section>

      <section id="sizes" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <span className="text-sm text-muted-foreground">Small to large</span>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NeoSelect aria-label="Small select">
              {demoOptions}
            </NeoSelect>
            <NeoSelect aria-label="Default select size">
              {demoOptions}
            </NeoSelect>
            <NeoSelect aria-label="Large select">
              {demoOptions}
            </NeoSelect>
          </div>
        </div>
      </section>
    </>
  )
}

export default NeoSelectDocPage 

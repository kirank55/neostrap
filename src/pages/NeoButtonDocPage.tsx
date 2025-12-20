import { useDocToc } from "@/components/layout/useDocToc"
import { NeoButton } from "@/components/ui/NeoButton"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"

const tocItems = [
  { label: "Overview", href: "#overview" },
  { label: "Variants", href: "#variants" },
  { label: "Sizes", href: "#sizes" },
]

const buttonCode = `import { NeoButton } from "@/components/ui/NeoButton"

export function ButtonDemo() {
  return <NeoButton>Click me</NeoButton>
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neobutton.json`

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

        <Codepreview
          preview={<NeoButton>Punch Me </NeoButton>}
          code={buttonCode}
        />
      </section>


      <section id="installation" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Installation</h2>
        </div>
        
        <CodeBlock code={installCode} />
      </section>


      <section id="variants" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3">
            <NeoButton variant="brutal">Brutal</NeoButton>
            <NeoButton variant="regular">Regular</NeoButton>
            <NeoButton variant="danger">Danger</NeoButton>
            <NeoButton variant="success">Success</NeoButton>
            <NeoButton variant="inverter">Inverter</NeoButton>
            <NeoButton variant="disabled" disabled>Disabled</NeoButton>
          </div>
        </div>
      </section>

      <section id="sizes" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <NeoButton size="sm">Small</NeoButton>
            <NeoButton size="default">Default</NeoButton>
            <NeoButton size="lg">Large</NeoButton>
          </div>
        </div>

      </section>

        <section id="props" className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Props</h2>
          </div>
          <div className="py-4">
            <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border/60">
            <thead>
              <tr className="bg-muted/50 border-b-2 border-border/60">
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">Prop</th>
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">Type</th>
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">Default</th>
            <th className="text-left py-3 px-4 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/60 hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">children</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">React.ReactNode</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">N/A</td>
            <td className="py-3 px-4 text-sm text-foreground">The content to be displayed inside the button.</td>
              </tr>
              <tr className="border-b border-border/60 hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">variant</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">"default"</td>
            <td className="py-3 px-4 text-sm text-foreground">The visual style variant of the button.</td>
              </tr>
              <tr className="border-b border-border/60 hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">size</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">"sm" | "default" | "lg"</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">"default"</td>
            <td className="py-3 px-4 text-sm text-foreground">The size of the button.</td>
              </tr>
              <tr className="border-b border-border/60 hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">className</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">string (optional)</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">N/A</td>
            <td className="py-3 px-4 text-sm text-foreground">Additional CSS classes to apply to the button for styling.</td>
              </tr>
              <tr className="border-b border-border/60 hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">disabled</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">boolean (optional)</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">false</td>
            <td className="py-3 px-4 text-sm text-foreground">Whether the button is disabled.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
            <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">onClick</td>
            <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">{`() => void (optional)`}</td>
            <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">N/A</td>
            <td className="py-3 px-4 text-sm text-foreground">Function to be called when the button is clicked.</td>
              </tr>
            </tbody>
          </table>
            </div>
          </div>


      </section>
    </>
  )
}

export { NeoButtonDocPage }

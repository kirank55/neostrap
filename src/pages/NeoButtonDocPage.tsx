import NeoButton, { variantOptions, sizeOptions } from "@/components/ui/NeoButton"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"

const buttonProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content to be displayed inside the button.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "danger" | "success" | "inverter" | "disabled" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the button.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the button.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the button for styling.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description: "Whether the button is disabled.",
  },
  {
    name: "onClick",
    type: "() => void (optional)",
    default: "N/A",
    description: "Function to be called when the button is clicked.",
  },
]

const buttonCode = `import NeoButton from "@/components/ui/NeoButton"

export function ButtonDemo() {
  return <NeoButton>Click me</NeoButton>
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neobutton.json`

function NeoButtonDocPage() {

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
          preview={<NeoButton>Punch Me</NeoButton>}
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
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <NeoButton key={variant} variant={variant} disabled={disabled}>
                {label}
              </NeoButton>
            ))}
          </div>
        </div>
      </section>

      <section id="sizes" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {sizeOptions.map(({ size, label }) => (
              <NeoButton key={size} size={size}>
                {label}
              </NeoButton>
            ))}
          </div>
        </div>

      </section>

      <section id="props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={buttonProps} />
        </div>
      </section>
    </>
  )
}

export default NeoButtonDocPage 

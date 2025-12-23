import { NeoInput, variantOptions, sizeOptions, typeOptions } from "@/components/ui/NeoInput"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"

const inputProps: PropDefinition[] = [
  {
    name: "type",
    type: '"text" | "number" | "password"',
    default: '"text"',
    description: "The type of input field.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "disabled"',
    default: '"brutal"',
    description: "The visual style variant of the input.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the input.",
  },
  {
    name: "placeholder",
    type: "string (optional)",
    default: "N/A",
    description: "Placeholder text displayed when input is empty.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the input for styling.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description: "Whether the input is disabled.",
  },
  {
    name: "onChange",
    type: "(e: ChangeEvent) => void (optional)",
    default: "N/A",
    description: "Function to be called when the input value changes.",
  },
]

const inputCode = `import { NeoInput } from "@/components/ui/NeoInput"

export function InputDemo() {
  return <NeoInput placeholder="Enter text..." />
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoinput.json`

function NeoInputDocPage() {
  return (
    <>
      <section id="overview" className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Components / Input
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Neostrap UI Input</h1>
          <p className="text-base text-muted-foreground">
            Neo-brutalist input field plus all variants, sizes, and types.
          </p>
        </div>

        <Codepreview
          preview={<NeoInput placeholder="Enter text..." className="max-w-xs" />}
          code={inputCode}
        />
      </section>

      <section id="installation" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Installation</h2>
        </div>

        <CodeBlock code={installCode} />
      </section>

      <section id="types" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Input Types</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap justify-center gap-6">
            {typeOptions.map(({ type, label, placeholder }) => (
              <div key={label} className="flex flex-col gap-2 w-48">
                <p className="text-sm font-semibold text-center">{label}</p>
                <NeoInput type={type} placeholder={placeholder} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="variants" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap justify-center gap-6">
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <div key={label} className="flex flex-col gap-2 w-48">
                <p className="text-sm font-semibold text-center">{label}</p>
                <NeoInput
                  variant={variant}
                  disabled={disabled}
                  placeholder={`${label} input...`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sizes" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Sizes</h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex flex-wrap items-end justify-center gap-6">
            {sizeOptions.map(({ size, label }) => (
              <div key={label} className="flex flex-col gap-2 w-48">
                <p className="text-sm font-semibold text-center">{label}</p>
                <NeoInput size={size} placeholder={`${label} size...`} />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={inputProps} />
        </div>
      </section>
    </>
  )
}

export default NeoInputDocPage

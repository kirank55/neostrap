import NeoButton, { variantOptions, sizeOptions } from "@/components/ui/NeoButton"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

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
      <DocSection id="overview">
        <DocPageHeader
          category="Button"
          title="Neostrap UI Button"
          description="Neo-brutalist primary button plus all variants and sizes."
        />
        <Codepreview preview={<NeoButton>Punch Me</NeoButton>} code={buttonCode} />
      </DocSection> 

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <NeoButton key={variant} variant={variant} disabled={disabled}>
                {label}
              </NeoButton>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <ShowcaseSurface>
          <InlineWrap>
            {sizeOptions.map(({ size, label }) => (
              <NeoButton key={size} size={size}>
                {label}
              </NeoButton>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={buttonProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoButtonDocPage 

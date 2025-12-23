import { NeoInput, variantOptions, sizeOptions, typeOptions } from "@/components/ui/NeoInput"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { LabeledItem, ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

const inputProps: PropDefinition[] = [
  {
    name: "type",
    type: '"text" | "number" | "password"',
    default: '"text"',
    description: "The type of input field.",
  },
  {
    name: "variant",
    type: '"brutal" | "outline" | "disabled"',
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
  return <NeoInput placeholder=\"Enter text...\" />
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoinput.json`

function NeoInputDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Input"
          title="Neostrap UI Input"
          description="Neo-brutalist input field plus all variants, sizes, and types."
        />
        <Codepreview preview={<NeoInput placeholder="Enter text..." className="max-w-xs" />} code={inputCode} />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <LabeledItem key={label} label={label}>
                <NeoInput variant={variant} disabled={disabled} placeholder={`${label} input...`} />
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <ShowcaseSurface>
          <InlineWrap alignEnd>
            {sizeOptions.map(({ size, label }) => (
              <LabeledItem key={label} label={label}>
                <NeoInput size={size} placeholder={`${label} size...`} />
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="types" title="Input Types">
        <ShowcaseSurface>
          <InlineWrap>
            {typeOptions.map(({ type, label, placeholder }) => (
              <LabeledItem key={label} label={label}>
                <NeoInput type={type} placeholder={placeholder} />
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={inputProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoInputDocPage

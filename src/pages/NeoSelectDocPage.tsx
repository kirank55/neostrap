import { NeoSelect, variantOptions, sizeOptions } from "@/components/ui/NeoSelect"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import DocSection from "@/components/docs/DocSection"
import { LabeledItem, ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocPageHeader from "@/components/docs/DocPageHeader"

const selectProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The option elements to be displayed inside the select.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "disabled"',
    default: '"brutal"',
    description: "The visual style variant of the select.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the select.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the select for styling.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description: "Whether the select is disabled.",
  },
  {
    name: "onChange",
    type: "(e: ChangeEvent) => void (optional)",
    default: "N/A",
    description: "Function to be called when the selection changes.",
  },
]

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

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoselect.json`

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
      <DocSection id="overview">
        <DocPageHeader
          category="Select"
          title="Neostrap UI Select"
          description="Neo-brutalist select dropdown plus all variants and sizes."
        />
        <Codepreview preview={<NeoSelect>{demoOptions}</NeoSelect>} code={selectCode} />
      </DocSection>


      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>


      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <LabeledItem key={label} label={label}>
                <NeoSelect variant={variant} disabled={disabled}>{demoOptions}</NeoSelect>
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
                <NeoSelect size={size}>{demoOptions}</NeoSelect>
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={selectProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoSelectDocPage 

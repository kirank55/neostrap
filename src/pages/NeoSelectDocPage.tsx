import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/NeoSelect"
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
    description: "The content of the select.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "plain"',
    default: '"brutal"',
    description: "The visual style variant of the trigger (on SelectTrigger).",
  },
]

const selectCode = `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/NeoSelect"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoselect.json`

const variantOptions = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
  { variant: "disabled", label: "Disabled" },
] as const

const sizeOptions = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
] as const

function NeoSelectDocPage() {

  const renderSelect = (props: any = {}) => (
    <Select>
      <SelectTrigger className="w-[200px]" {...props}>
        <SelectValue placeholder="Select a specific option used for testing" />
      </SelectTrigger>
      <SelectContent variant={props.variant}>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          <SelectItem value="alpha">Alpha</SelectItem>
          <SelectItem value="beta">Beta</SelectItem>
          <SelectItem value="gamma">Gamma</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )

  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Select"
          title="Neostrap UI Select"
          description="Displays a list of options for the user to pick from—triggered by a button."
        />
        <Codepreview preview={renderSelect()} code={selectCode} />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label }) => (
              <LabeledItem key={label} label={label}>
                {renderSelect({ variant })}
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
                {renderSelect({ size })}
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

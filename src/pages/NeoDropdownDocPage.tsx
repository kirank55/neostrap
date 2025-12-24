import {
  NeoDropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  variantOptions,
  sizeOptions,
} from "@/components/ui/NeoDropdown"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import DocSection from "@/components/docs/DocSection"
import { LabeledItem, ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocPageHeader from "@/components/docs/DocPageHeader"

const dropdownProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The dropdown trigger and content components.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the dropdown.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the dropdown trigger.",
  },
]

const triggerProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content of the trigger button.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes for the trigger.",
  },
]

const contentProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The dropdown menu items.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"start"',
    description: "The alignment of the dropdown content.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes for the content.",
  },
]

const itemProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content of the menu item.",
  },
  {
    name: "onClick",
    type: "() => void (optional)",
    default: "N/A",
    description: "Function called when the item is clicked.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description: "Whether the item is disabled.",
  },
]

const dropdownCode = `import {
  NeoDropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from "@/components/ui/NeoDropdown"

export function DropdownDemo() {
  return (
    <NeoDropdown>
      <DropdownTrigger>Options</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Logout</DropdownItem>
      </DropdownContent>
    </NeoDropdown>
  )
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neodropdown.json`

function DropdownDemo({ variant, size }: { variant?: "brutal" | "regular" | "outline"; size?: "sm" | "default" | "lg" }) {
  return (
    <NeoDropdown variant={variant} size={size}>
      <DropdownTrigger>Options</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Logout</DropdownItem>
      </DropdownContent>
    </NeoDropdown>
  )
}

function NeoDropdownDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Dropdown"
          title="Neostrap UI Dropdown"
          description="Neo-brutalist dropdown menu component with keyboard navigation and customizable variants."
        />
        <Codepreview preview={<DropdownDemo />} code={dropdownCode} />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label }) => (
              <LabeledItem key={label} label={label}>
                <DropdownDemo variant={variant} />
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <ShowcaseSurface>
          <InlineWrap>
            {sizeOptions.map(({ size, label }) => (
              <LabeledItem key={label} label={label}>
                <DropdownDemo size={size} />
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>


      <DocSection id="dropdown-props" title="Dropdown Props">
        <div className="py-4">
          <PropsTable props={dropdownProps} />
        </div>
      </DocSection>

      <DocSection id="trigger-props" title="DropdownTrigger Props">
        <div className="py-4">
          <PropsTable props={triggerProps} />
        </div>
      </DocSection>

      <DocSection id="content-props" title="DropdownContent Props">
        <div className="py-4">
          <PropsTable props={contentProps} />
        </div>
      </DocSection>

      <DocSection id="item-props" title="DropdownItem Props">
        <div className="py-4">
          <PropsTable props={itemProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoDropdownDocPage

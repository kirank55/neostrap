import {
  NeoAccordion,
  NeoAccordionItem,
  NeoAccordionTrigger,
  NeoAccordionContent,
  variantOptions,
  behaviorOptions,
} from "@/components/ui/NeoAccordion"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface, InlineWrap, LabeledItem } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

const accordionProps: PropDefinition[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    default: '"single"',
    description: "Whether one or multiple items can be opened at the same time.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the accordion.",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false",
    description: "When type is 'single', allows closing all items.",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    default: "N/A",
    description: "The default expanded item(s).",
  },
  {
    name: "value",
    type: "string | string[]",
    default: "N/A",
    description: "The controlled expanded item(s).",
  },
  {
    name: "onValueChange",
    type: "(value: string | string[]) => void",
    default: "N/A",
    description: "Callback when expanded items change.",
  },
  {
    name: "className",
    type: "string",
    default: "N/A",
    description: "Additional CSS classes to apply.",
  },
]

const accordionItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    default: "N/A",
    description: "Unique identifier for the accordion item.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the item is disabled.",
  },
]

const accordionCode = `import {
  NeoAccordion,
  NeoAccordionItem,
  NeoAccordionTrigger,
  NeoAccordionContent,
} from "@/components/ui/NeoAccordion"

export function AccordionDemo() {
  return (
    <NeoAccordion type="single" collapsible>
      <NeoAccordionItem value="1" variant="brutal">
        <NeoAccordionTrigger variant="brutal">Title</NeoAccordionTrigger>
        <NeoAccordionContent variant="brutal">Content</NeoAccordionContent>
      </NeoAccordionItem>
    </NeoAccordion>
  )
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoaccordion.json`

const demoItems = [
  {
    value: "item-1",
    trigger: "What is Neostrap UI?",
    content:
      `Neostrap UI is a collection of neo-brutalist styled components. 
      Built on top of Radix UI primitives and Tailwind CSS.`,
  },
  {
    value: "item-2",
    trigger: "Is it accessible?",
    content:
      "Yes. All components are built using Radix UI primitives which follow WAI-ARIA design patterns for accessibility.",
  },
  {
    value: "item-3",
    trigger: "Can I customize the styles?",
    content:
      "Absolutely! Components use Tailwind CSS classes and support className props for full customization.",
  },
]

const variantDemoItems = [
  { value: "item-1", trigger: "First Section", content: "Content for the first accordion section." },
  { value: "item-2", trigger: "Second Section", content: "Content for the second accordion section." },
]

interface AccordionDemoProps {
  items: typeof demoItems
  type?: "single" | "multiple"
  variant?: "brutal" | "outline"
  collapsible?: boolean
  defaultValue?: string
}

function AccordionDemo({ items, type = "single", variant = "brutal", collapsible = true, defaultValue }: AccordionDemoProps) {
  if (type === "multiple") {
    return (
      <NeoAccordion type="multiple" defaultValue={defaultValue ? [defaultValue] : undefined} variant={variant} className="w-full max-w-md mx-auto">
        {items.map((item) => (
          <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
            <NeoAccordionTrigger variant={variant}>{item.trigger}</NeoAccordionTrigger>
            <NeoAccordionContent variant={variant}>{item.content}</NeoAccordionContent>
          </NeoAccordionItem>
        ))}
      </NeoAccordion>
    )
  }

  return (
    <NeoAccordion type="single" collapsible={collapsible} defaultValue={defaultValue} variant={variant} className="w-full max-w-md mx-auto">
      {items.map((item) => (
        <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
          <NeoAccordionTrigger variant={variant}>{item.trigger}</NeoAccordionTrigger>
          <NeoAccordionContent variant={variant}>{item.content}</NeoAccordionContent>
        </NeoAccordionItem>
      ))}
    </NeoAccordion>
  )
}

function NeoAccordionDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Accordion"
          title="Neostrap UI Accordion"
          description="Neo-brutalist accordion component with collapsible sections."
        />
        <Codepreview preview={<AccordionDemo items={demoItems} />} code={accordionCode} />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <InlineWrap>
          {variantOptions.map(({ variant, label }) => (
            <LabeledItem key={variant} label={label} widthClass="w-full max-w-xl">
              <ShowcaseSurface>
                <AccordionDemo items={variantDemoItems} variant={variant} />
              </ShowcaseSurface>
            </LabeledItem>
          ))}
        </InlineWrap>
      </DocSection>

      <DocSection id="multiple" title="Behaviors">
        <InlineWrap>
          {behaviorOptions.map((option) => (
            <LabeledItem key={option.label} label={option.label} widthClass="w-full max-w-xl">
              <ShowcaseSurface>
                <AccordionDemo
                  items={variantDemoItems}
                  type={option.type}
                  collapsible={"collapsible" in option ? option.collapsible : undefined}
                  defaultValue={"defaultValue" in option ? option.defaultValue : undefined}
                />
              </ShowcaseSurface>
            </LabeledItem>
          ))}
        </InlineWrap>
      </DocSection>

      <DocSection id="props" title="Accordion Props">
        <div className="py-4">
          <PropsTable props={accordionProps} />
        </div>
      </DocSection>

      <DocSection id="item-props" title="AccordionItem Props">
        <div className="py-4">
          <PropsTable props={accordionItemProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoAccordionDocPage
import {
  NeoAccordion,
  NeoAccordionItem,
  NeoAccordionTrigger,
  NeoAccordionContent,
  variantOptions,
} from "@/components/ui/NeoAccordion"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"

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
}

function AccordionDemo({ items, type = "single", variant = "brutal", collapsible = true }: AccordionDemoProps) {
  return (
    <NeoAccordion type={type} collapsible={collapsible} variant={variant} className="w-full max-w-md mx-auto">
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
      <section id="overview" className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Components / Accordion
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Neostrap UI Accordion</h1>
          <p className="text-base text-muted-foreground">
            Neo-brutalist accordion component with collapsible sections.
          </p>
        </div>

        <Codepreview
          preview={<AccordionDemo items={demoItems} />}
          code={accordionCode}
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
        <div className="flex flex-col gap-6">
          {variantOptions.map(({ variant, label }) => (
            <div key={variant} className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">{label}</h3>
              <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
                <AccordionDemo items={variantDemoItems} variant={variant} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="multiple" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Multiple Open Items</h2>
        </div>
        <p className="text-muted-foreground">
          Set <code className="bg-muted px-1.5 py-0.5 rounded">type="multiple"</code> to allow multiple items to be open at once.
        </p>
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <AccordionDemo items={demoItems} type="multiple" />
        </div>
      </section>

      <section id="props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Accordion Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={accordionProps} />
        </div>
      </section>

      <section id="item-props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">AccordionItem Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={accordionItemProps} />
        </div>
      </section>
    </>
  )
}

export default NeoAccordionDocPage
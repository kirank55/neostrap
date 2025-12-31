import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

/**
 * Props table definitions for the NeoAccordion root component.
 */
export const ACCORDION_PROPS: PropDefinition[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    default: '"single"',
    description:
      "Whether one or multiple items can be opened at the same time.",
  },
  {
    name: "variant",
    type: '"brutal" | "outline"',
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

/**
 * Props table definitions for NeoAccordionItem component.
 */
export const ACCORDION_ITEM_PROPS: PropDefinition[] = [
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

// ============================================================================
// Code Snippets
// ============================================================================

/**
 * Basic usage code example for the accordion component.
 */
export const ACCORDION_USAGE_CODE = `import {
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

/**
 * CLI installation command using shadcn registry.
 */
export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoaccordion.json`

/**
 * NPM dependencies required for manual installation.
 */
export const INSTALL_DEPENDENCIES_CODE = `npm install @radix-ui/react-accordion class-variance-authority clsx tailwind-merge lucide-react`

/**
 * Full component source code for manual installation.
 */
export const ACCORDION_COMPONENT_CODE = `import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseStyle = "border-2 border-black"
const brutalShadow = "shadow-[4px_4px_0_#000]"

const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      brutal: "",
      outline: "",
    },
  },
  defaultVariants: {
    variant: "brutal",
  },
})

const accordionItemVariants = cva(
  "overflow-hidden transition-all",
  {
    variants: {
      variant: {
        brutal: \`bg-[var(--primary)] \${baseStyle} \${brutalShadow} first:rounded-t-lg last:rounded-b-lg [&:not(:last-child)]:border-b-0\`,
        outline: \`bg-white \${baseStyle} [&:not(:last-child)]:border-b-0\`,
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 px-5 text-left font-semibold transition-all [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        brutal: "hover:bg-black/5 text-black",
        outline: "hover:bg-black/5 text-black",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

const accordionContentVariants = cva(
  "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        brutal: "bg-white/50 border-t-2 border-black",
        outline: "bg-gray-50 border-t-2 border-black",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

type AccordionVariant = "brutal" | "outline"

type NeoAccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>

function NeoAccordion({
  className,
  variant = "brutal",
  ...props
}: NeoAccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-variant={variant}
      className={cn(accordionVariants({ variant, className }))}
      {...props}
    />
  )
}

type NeoAccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  variant?: AccordionVariant
}

function NeoAccordionItem({ className, variant = "brutal", ...props }: NeoAccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionItemVariants({ variant, className }))}
      {...props}
    />
  )
}

type NeoAccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  variant?: AccordionVariant
}

function NeoAccordionTrigger({
  className,
  children,
  variant = "brutal",
  ...props
}: NeoAccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerVariants({ variant, className }))}
        {...props}
      >
        {children}
        <ChevronDown className="size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

type NeoAccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & {
  variant?: AccordionVariant
}

function NeoAccordionContent({
  className,
  children,
  variant = "brutal",
  ...props
}: NeoAccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ variant, className }))}
      {...props}
    >
      <div className="px-5 py-4">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export {
  NeoAccordion,
  NeoAccordionItem,
  NeoAccordionTrigger,
  NeoAccordionContent,
}

export type {
  NeoAccordionProps,
  NeoAccordionItemProps,
  NeoAccordionTriggerProps,
  NeoAccordionContentProps,
}

export const variantOptions = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
] as const

export const behaviorOptions = [
  { type: "single", label: "Single open", collapsible: true },
  { type: "multiple", label: "Multiple open" },
  { type: "single", label: "Non-Collapsible", collapsible: false, defaultValue: "item-1" },
  { type: "single", label: "Default Open", collapsible: true, defaultValue: "item-1" },
] as const`

/**
 * Global CSS styles for accordion animations.
 */
export const GLOBAL_CSS_CODE = `@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

@theme {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}`

/**
 * Utility function code for manual installation.
 */
export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

// ============================================================================
// Demo Data
// ============================================================================

/**
 * Demo items for the main accordion preview.
 */
export const DEMO_ITEMS = [
  {
    value: "item-1",
    trigger: "What is Neostrap UI?",
    content: `Neostrap UI is a collection of neo-brutalist styled components. 
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

/**
 * Simplified demo items for variant showcases.
 */
export const VARIANT_DEMO_ITEMS = [
  {
    value: "item-1",
    trigger: "First Section",
    content: "Content for the first accordion section.",
  },
  {
    value: "item-2",
    trigger: "Second Section",
    content: "Content for the second accordion section.",
  },
]

/**
 * Type for demo item structure.
 */
export type DemoItem = typeof DEMO_ITEMS[number]

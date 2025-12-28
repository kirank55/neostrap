import * as React from "react"
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
        brutal: `bg-[var(--primary)] ${baseStyle} ${brutalShadow} first:rounded-t-lg last:rounded-b-lg [&:not(:last-child)]:border-b-0`,
        outline: `bg-white ${baseStyle} [&:not(:last-child)]:border-b-0`,
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

/**
 * Defines the visual style of the accordion.
 * - `brutal`: High contrast, neo-brutalist style with heavy borders and shadows.
 * - `outline`: Clean, minimalist outline style.
 */
type AccordionVariant = "brutal" | "outline"

type NeoAccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>

/**
 * The root container for the accordion.
 * Manages the state and behavior of the accordion items.
 *
 * @example
 * <NeoAccordion type="single" collapsible>
 *   <NeoAccordionItem value="item-1">
 *     <NeoAccordionTrigger>Is it accessible?</NeoAccordionTrigger>
 *     <NeoAccordionContent>Yes.</NeoAccordionContent>
 *   </NeoAccordionItem>
 * </NeoAccordion>
 */
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

/**
 * An individual item within the accordion.
 * Contains the header (trigger) and content.
 */
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

/**
 * The clickable header that toggles the accordion content.
 * Includes a chevron icon that rotates based on state.
 */
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

/**
 * The collapsible content section associated with an item.
 * Animates height when opening/closing.
 */
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
] as const

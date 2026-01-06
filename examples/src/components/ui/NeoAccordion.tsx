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

const AccordionContext = React.createContext<{
  anyOpen: boolean
  isItemOpen: (value?: string) => boolean
} | null>(null)

type AccordionVariant = "brutal" | "outline"

type NeoAccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>

function NeoAccordion({
  className,
  variant = "brutal",
  ...props
}: NeoAccordionProps) {
  const { type } = props as any
  const controlledValue = (props as any).value as string | string[] | undefined
  const defaultValue = (props as any).defaultValue as string | string[] | undefined
  const userOnValueChange = (props as any).onValueChange as ((v: string | string[] | undefined) => void) | undefined

  const [value, setValue] = React.useState<string | string[] | undefined>(
    controlledValue ?? defaultValue ?? undefined
  )

  React.useEffect(() => {
    if (controlledValue !== undefined) setValue(controlledValue)
  }, [controlledValue])

  const handleValueChange = (val: string | string[] | undefined) => {
    setValue(val)
    userOnValueChange?.(val)
  }

  const anyOpen = type === "multiple" ? Array.isArray(value) && value.length > 0 : !!value

  const isItemOpen = (itemValue?: string) => {
    if (type === "multiple") {
      return Array.isArray(value) && !!itemValue && (value as string[]).includes(itemValue)
    }

    return !!(itemValue && value === itemValue)
  }

  const isMultiple = type === "multiple"
  const currentValue = controlledValue ?? value

  const { value: _v, onValueChange: _onValueChange, defaultValue: _dv, ...rest } = props as any

  if (isMultiple) {
    const multipleValue = Array.isArray(currentValue) ? (currentValue as string[]) : undefined
    const onMultipleChange = (v: string[] | undefined) => handleValueChange(v)

    return (
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-variant={variant}
        className={cn(accordionVariants({ variant, className }))}
        type="multiple"
        value={multipleValue}
        onValueChange={onMultipleChange as any}
        {...rest}
      >
        <AccordionContext.Provider value={{ anyOpen, isItemOpen }}>
          {props.children}
        </AccordionContext.Provider>
      </AccordionPrimitive.Root>
    )
  }

  const singleValue = typeof currentValue === "string" ? (currentValue as string) : undefined
  const onSingleChange = (v: string | undefined) => handleValueChange(v)

  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-variant={variant}
      className={cn(accordionVariants({ variant, className }))}
      type="single"
      value={singleValue}
      onValueChange={onSingleChange as any}
      {...rest}
    >
      <AccordionContext.Provider value={{ anyOpen, isItemOpen }}>
        {props.children}
      </AccordionContext.Provider>
    </AccordionPrimitive.Root>
  )
}

type NeoAccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
  variant?: AccordionVariant
  value?: string
  dimmed?: boolean
}

function NeoAccordionItem({ className, variant = "brutal", dimmed, value, ...props }: NeoAccordionItemProps) {
  const ctx = React.useContext(AccordionContext)

  const computedDimmed =
    typeof dimmed === "boolean" ? dimmed : !!(ctx && ctx.anyOpen && !ctx.isItemOpen(value))

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-dimmed={computedDimmed ? "true" : undefined}
      value={value}
      className={cn(
        accordionItemVariants({ variant, className }),
        computedDimmed ? " [&_button]:px-5 [&_button]:py-0.5" : ""
      )}
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
] as const
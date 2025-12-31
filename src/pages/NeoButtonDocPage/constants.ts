import type { PropDefinition } from "@/components/PropsTable"

/**
 * Props table definitions for the NeoButton component documentation.
 * Each entry describes a prop with its name, type, default value, and description.
 */
export const BUTTON_PROPS: PropDefinition[] = [
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

/**
 * Basic usage code example for the button component.
 */
export const BUTTON_USAGE_CODE = `import { NeoButton } from "@/components/ui/NeoButton"

export function ButtonDemo() {
  return <NeoButton>Click me</NeoButton>
}`

/**
 * CLI installation command using shadcn registry.
 */
export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neobutton.json`

/**
 * NPM dependencies required for manual installation.
 */
export const INSTALL_DEPENDENCIES_CODE = `npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`

/**
 * Full component source code for manual installation.
 */
export const BUTTON_COMPONENT_CODE = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseBrutalStyle = [
  "border-2 border-black",
  "shadow-[5px_5px_0_#000]",
  "hover:-translate-y-[-5px] hover:translate-x-[5px] hover:shadow-none ",
  "active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000]",
  "focus-visible:ring-black/20 focus-visible:border-black",
].join(" ")

/**
 * Button variants for Neostrap UI
 * Supports multiple styles: brutal (neo-brutalist default), regular, danger, success, inverter, outline, and disabled
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        brutal: \`bg-[var(--primary)] text-black \${baseBrutalStyle}\`,
        inverter: \`bg-black text-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:text-black \${baseBrutalStyle}\`,
        outline:
          "border-2 border-black rounded-none bg-white text-black hover:bg-accent hover:text-accent-foreground",
        disabled: \`bg-gray-400 text-gray-600 opacity-60 cursor-not-allowed \${baseBrutalStyle}\`,
        link: "text-primary hover:underline decoration-[3px] underline-offset-4",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

/**
 * Primary button component with neo-brutalist styling.
 * Supports various variants, sizes, and can be rendered as a child component.
 *
 * @example
 * <NeoButton variant="brutal" onClick={() => console.log('clicked')}>
 *   Click me
 * </NeoButton>
 */
function NeoButton({
  className,
  variant = "brutal",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { NeoButton }

export { buttonVariants }
export type { ButtonProps }

export const variantOptions = [
  { variant: "brutal", label: "Brutal", disabled: false },
  { variant: "outline", label: "Outline", disabled: false },
  { variant: "inverter", label: "Inverter", disabled: false },
  { variant: "disabled", label: "Disabled", disabled: true },
  { variant: "link", label: "Link", disabled: false },
] as const

export const sizeOptions = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
] as const`

/**
 * Utility function code for manual installation.
 */
export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

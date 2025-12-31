import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const INPUT_PROPS: PropDefinition[] = [
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

// ============================================================================
// Code Snippets
// ============================================================================

export const INPUT_USAGE_CODE = `import { NeoInput } from "@/components/ui/NeoInput"

export function InputDemo() {
  return <NeoInput placeholder="Enter text..." />
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoinput.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install class-variance-authority clsx tailwind-merge`

export const INPUT_COMPONENT_CODE = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full rounded-lg border-2 px-3 py-2 font-semibold transition-all focus-visible:-translate-y-px focus-visible:translate-x-px focus-visible:ring-4 focus-visible:ring-black/10 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-black",
  {
    variants: {
      variant: {
        brutal: "bg-[var(--primary)]  text-black border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus-visible:shadow-[3px_3px_0_#000]  ",
        outline: "bg-white rounded-none shadow-none text-black border-black focus-visible:shadow-[3px_3px_0_#000]",
        disabled: "bg-gray-200 text-gray-500 border-gray-400 shadow-none cursor-not-allowed",
      },
      size: {
        sm: "h-9 text-sm",
        default: "h-10 text-base",
        lg: "h-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

type InputVariant = "brutal" | "outline" | "disabled"
type InputSize = "sm" | "default" | "lg"
type InputType = "text" | "number" | "password"

const variantOptions: { variant: InputVariant; label: string; disabled?: boolean }[] = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
  { variant: "disabled", label: "Disabled", disabled: true },
]

const sizeOptions: { size: InputSize; label: string }[] = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
]

const typeOptions: { type: InputType; label: string; placeholder: string }[] = [
  { type: "text", label: "Text", placeholder: "Enter text..." },
  { type: "number", label: "Number", placeholder: "Enter number..." },
  { type: "password", label: "Password", placeholder: "Enter password..." },
]

type NeoInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>

/**
 * Input component with neo-brutalist styling.
 * Supports various types (text, number, password).
 */
const NeoInput = React.forwardRef<HTMLInputElement, NeoInputProps>(
  ({ className, variant, size, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

NeoInput.displayName = "NeoInput"

export { NeoInput, inputVariants, variantOptions, sizeOptions, typeOptions }
export type { NeoInputProps }
`

export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

// ============================================================================
// Demo Data
// ============================================================================

export const VARIANT_OPTIONS = [
  { variant: "brutal", label: "Brutal", disabled: false },
  { variant: "outline", label: "Outline", disabled: false },
  { variant: "disabled", label: "Disabled", disabled: true },
] as const

export const SIZE_OPTIONS = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
] as const

export const TYPE_OPTIONS = [
  { type: "text", label: "Text", placeholder: "Enter text..." },
  { type: "number", label: "Number", placeholder: "Enter number..." },
  { type: "password", label: "Password", placeholder: "Enter password..." },
] as const

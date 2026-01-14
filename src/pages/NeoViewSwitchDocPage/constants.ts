import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const SWITCH_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: '"grid" | "list"',
    default: "N/A (required)",
    description: "The current state of the view switch.",
  },
  {
    name: "onValueChange",
    type: '(value: "grid" | "list") => void',
    default: "N/A (required)",
    description: "Callback function when the view state changes.",
  },
  {
    name: "variant",
    type: '"brutal" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the switch.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "The size of the switch component.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS classes to apply to the container.",
  },
]

// ============================================================================
// Code Snippets
// ============================================================================

export const SWITCH_USAGE_CODE = `import { useState } from "react"
import { NeoViewSwitch } from "@/components/ui/NeoViewSwitch"

export function ViewSwitchDemo() {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <div className="flex flex-col items-center gap-4">
      <NeoViewSwitch 
        value={view} 
        onValueChange={setView} 
      />
      <p>Current View: {view}</p>
    </div>
  )
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoviewswitch.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge`

export const SWITCH_COMPONENT_CODE = `import * as React from "react"
import { motion } from "framer-motion"
import { LayoutGrid, List } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const baseBrutalStyle = [
  "border-2 border-black",
  "shadow-[4px_4px_0_#000]",
].join(" ")

const switchVariants = cva(
  "inline-flex items-center rounded-lg p-1 gap-1 relative z-0 overflow-hidden bg-white",
  {
    variants: {
      variant: {
        brutal: baseBrutalStyle,
        outline: "border-2 border-black rounded-none shadow-none",
      },
      size: {
        default: "h-12",
        sm: "h-10",
        lg: "h-14",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

interface NeoViewSwitchProps extends VariantProps<typeof switchVariants> {
  value: "grid" | "list"
  onValueChange: (value: "grid" | "list") => void
  className?: string
}

function NeoViewSwitch({
  value,
  onValueChange,
  variant = "brutal",
  size,
  className,
}: NeoViewSwitchProps) {
  const isGrid = value === "grid"
  const uniqueId = React.useId()
  const layoutId = \`active-view-bg-\${uniqueId}\`

  return (
    <div className={cn(switchVariants({ variant, size, className }))}>
      <button
        type="button"
        onClick={() => onValueChange("grid")}
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
          isGrid ? "text-white" : "text-black hover:text-black/70"
        )}
      >
        <span className="sr-only">Grid view</span>
        <LayoutGrid className="h-5 w-5" />
        {isGrid && (
          <motion.div
            layoutId={layoutId}
            className="absolute inset-0 -z-10 bg-black rounded-md"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>

      <button
        type="button"
        onClick={() => onValueChange("list")}
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
          !isGrid ? "text-white" : "text-black hover:text-black/70"
        )}
      >
        <span className="sr-only">List view</span>
        <List className="h-5 w-5" />
        {!isGrid && (
          <motion.div
            layoutId={layoutId}
            className="absolute inset-0 -z-10 bg-black rounded-md"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>
    </div>
  )
}

NeoViewSwitch.displayName = "NeoViewSwitch"

export { NeoViewSwitch, switchVariants }
export type { NeoViewSwitchProps }
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
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
] as const

export const SIZE_OPTIONS = [
    { size: "sm", label: "Small" },
    { size: "default", label: "Default" },
    { size: "lg", label: "Large" },
  ] as const

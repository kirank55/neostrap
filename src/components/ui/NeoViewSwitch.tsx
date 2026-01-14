import * as React from "react"
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

/**
 * A neo-brutalist view switcher component that toggles between grid and list views.
 * Uses Framer Motion for smooth background transitions.
 *
 * @example
 * <NeoViewSwitch
 *   value={view}
 *   onValueChange={setView}
 *   variant="brutal"
 * />
 */
function NeoViewSwitch({
  value,
  onValueChange,
  variant = "brutal",
  size,
  className,
}: NeoViewSwitchProps) {
  const isGrid = value === "grid"
  const uniqueId = React.useId()
  const layoutId = `active-view-bg-${uniqueId}`

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

export const variantOptions = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
] as const

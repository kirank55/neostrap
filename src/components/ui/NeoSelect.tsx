import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "w-full rounded-lg border-2 px-3 py-2 font-semibold transition-all focus-visible:-translate-y-px focus-visible:translate-x-px focus-visible:ring-4 focus-visible:ring-black/10 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        brutal: "bg-amber-300 text-black border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus-visible:shadow-[3px_3px_0_#000]",
        regular: "bg-white text-black border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 focus-visible:shadow-[3px_3px_0_#000]",
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

type SelectVariant = "brutal" | "regular" | "disabled"
type SelectSize = "sm" | "default" | "lg"

const variantOptions: { variant: SelectVariant; label: string; disabled?: boolean }[] = [
  { variant: "brutal", label: "Brutal" },
  { variant: "regular", label: "Regular" },
  { variant: "disabled", label: "Disabled", disabled: true },
]

const sizeOptions: { size: SelectSize; label: string }[] = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
]

type NeoSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> &
  VariantProps<typeof selectVariants>

const NeoSelect = React.forwardRef<HTMLSelectElement, NeoSelectProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(selectVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

NeoSelect.displayName = "NeoSelect"

export { NeoSelect, selectVariants, variantOptions, sizeOptions }
export type { NeoSelectProps }

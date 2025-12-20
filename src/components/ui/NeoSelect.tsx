import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "w-full rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-semibold shadow-[4px_4px_0_#000] transition-all focus-visible:-translate-y-[1px] focus-visible:translate-x-[1px] focus-visible:shadow-[3px_3px_0_#000] focus-visible:ring-4 focus-visible:ring-black/10 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-amber-50 text-black border-black",
        outline: "border-border/80 bg-background text-foreground shadow-sm",
        soft: "bg-muted text-foreground border border-border/60 shadow-sm",
      },
      size: {
        sm: "h-9 text-sm",
        md: "h-10 text-base",
        lg: "h-11 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

type NeoSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
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

export { NeoSelect, selectVariants }
export type { NeoSelectProps }

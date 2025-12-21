import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button variants for Neostrap UI
 * Supports multiple styles: brutal (neo-brutalist default), default, outline, secondary, ghost, link, and destructive
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        brutal:
          "bg-[var(--primary)] text-black border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:ring-black/20 focus-visible:border-black",
        regular:
          "bg-white text-black border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:ring-black/20 focus-visible:border-black",
        danger:
          "bg-red-500 text-white border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:ring-black/20 focus-visible:border-black",
        success:
          "bg-green-500 text-white border-2 border-black shadow-[6px_6px_0_#000] hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:ring-black/20 focus-visible:border-black",
        inverter:
          "bg-black text-[var(--color-bg)] border-2 border-black shadow-[6px_6px_0_#000] hover:bg-[var(--color-bg)] hover:text-black hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:ring-black/20 focus-visible:border-black",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        disabled:
          "bg-gray-400 text-gray-600 border-2 border-black shadow-[6px_6px_0_#000] opacity-60 cursor-not-allowed focus-visible:ring-black/20 focus-visible:border-black",
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
 * Button component for Neostrap UI
 * Supports variant prop for different styles and size prop for scaling
 * @example
 * <NeoButton variant="brutal">Click me</NeoButton>
 * <NeoButton variant="outline" size="lg">Learn more</NeoButton>
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

export default NeoButton

export { buttonVariants }
export type { ButtonProps }

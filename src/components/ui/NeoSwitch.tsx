import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseBrutalStyle = [
  "border-2 border-black",
  "shadow-[2px_2px_0_#000]",
  "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
  "data-[state=checked]:shadow-[-2px_2px_0_#000] hover:data-[state=checked]:shadow-[0px_0px_0_#000]",
  "focus-visible:ring-black/20 focus-visible:border-black",
].join(" ")

/**
 * Switch variants for Neostrap UI
 * Supports multiple styles: brutal (neo-brutalist default), outline, inverter, disabled, danger, success
 */
const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        brutal: `bg-[var(--primary)] ${baseBrutalStyle}`,
        danger: `bg-red-500 ${baseBrutalStyle} data-[state=checked]:bg-red-700`,
        success: `bg-green-500 ${baseBrutalStyle} data-[state=checked]:bg-green-700`,
        inverter: `bg-black hover:bg-[var(--color-bg)] ${baseBrutalStyle} data-[state=checked]:bg-[var(--color-bg)]`,
        outline: "border-2 border-black bg-white rounded-none hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-accent",
        disabled: `bg-gray-400 opacity-60 cursor-not-allowed border-2 border-black `,
      },
      size: {
        default: "h-5 w-12",
        sm: "h-4 w-9",
        lg: "h-6 w-14",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:ml-px pt-2.5",
  {
    variants: {
      variant: {
        brutal: "bg-[var(--color-bg)] border-[1px] border-black",
        danger: "bg-white border-[1px] border-black data-[state=checked]:bg-red-100",
        success: "bg-white border-[1px] border-black data-[state=checked]:bg-green-100",
        inverter: `bg-[var(--color-bg)] border-[1px] border-black hover:bg-black data-[state=checked]:bg-black`,
        outline: "bg-white border-[1px] border-black rounded-none hover:bg-accent-foreground data-[state=checked]:bg-accent-foreground",
        disabled: "bg-gray-200 border-[1px] border-black opacity-60",
      },
      size: {
        default: "h-4 w-4 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
        sm: "h-3 w-3 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        lg: "h-5 w-5 data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
  VariantProps<typeof switchVariants>

/**
 * NeoSwitch component for Neostrap UI
 * Supports variant prop for different styles and size prop for scaling
 * @example
 * <NeoSwitch variant="brutal" />
 * <NeoSwitch variant="outline" size="lg" />
 */
function NeoSwitch({
  className,
  variant = "brutal",
  size = "default",
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitives.Root
      data-slot="switch"
      data-variant={variant}
      data-size={size}
      className={cn(switchVariants({ variant, size, className }))}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(switchThumbVariants({ variant, size }))}
      />
    </SwitchPrimitives.Root>
  )
}
NeoSwitch.displayName = SwitchPrimitives.Root.displayName

export { NeoSwitch, switchVariants, switchThumbVariants }
export type { SwitchProps }

export const variantOptions = [
  { variant: "brutal", label: "Brutal", disabled: false },
  { variant: "outline", label: "Outline", disabled: false },
  { variant: "inverter", label: "Inverter", disabled: false },
  { variant: "disabled", label: "Disabled", disabled: true },
  { variant: "danger", label: "Danger", disabled: false },
  { variant: "success", label: "Success", disabled: false },
] as const

export const sizeOptions = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
] as const

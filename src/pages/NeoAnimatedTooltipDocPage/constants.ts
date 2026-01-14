import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const TOOLTIP_PROPS: PropDefinition[] = [
  {
    name: "content",
    type: "string",
    default: "N/A (required)",
    description: "The text content to display inside the tooltip.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A (required)",
    description: "The trigger element that the tooltip wraps.",
  },
  {
    name: "variant",
    type: '"brutal" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the tooltip.",
  },
  {
    name: "offset",
    type: "{ x: number; y: number } (optional)",
    default: "{ x: 12, y: 12 }",
    description: "Offset from cursor position in pixels.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the tooltip.",
  },
]

// ============================================================================
// Code Snippets
// ============================================================================

export const TOOLTIP_USAGE_CODE = `import { NeoAnimatedTooltip } from "@/components/ui/NeoAnimatedTooltip"
import { NeoButton } from "@/components/ui/NeoButton"

export function TooltipDemo() {
  return (
    <NeoAnimatedTooltip content="Hello, I'm a tooltip!">
      <NeoButton>Hover me</NeoButton>
    </NeoAnimatedTooltip>
  )
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoanimatedtooltip.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install class-variance-authority clsx tailwind-merge`

export const TOOLTIP_COMPONENT_CODE = `import * as React from "react"
import { createPortal } from "react-dom"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const baseBrutalStyle = [
  "border-2 border-black",
  "shadow-[4px_4px_0_#000]",
].join(" ")

/**
 * Tooltip content variants for Neostrap UI
 * Supports brutal (neo-brutalist default) and outline styles
 */
const tooltipVariants = cva(
  "bg-white fixed z-[9999] overflow-hidden rounded-lg px-3 py-2 text-sm font-medium pointer-events-none transition-opacity duration-150",
  {
    variants: {
      variant: {
        brutal: \`text-black \${baseBrutalStyle}\`,
        outline: "text-black border-2 border-black rounded-none shadow-[4px_4px_0_#000]",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

interface NeoAnimatedTooltipProps extends VariantProps<typeof tooltipVariants> {
  children: React.ReactNode
  content: string
  className?: string
  /** Offset from cursor in pixels */
  offset?: { x: number; y: number }
}

/**
 * Mouse-following animated tooltip component with neo-brutalist styling.
 * The tooltip follows the cursor position like chart tooltips.
 */
function NeoAnimatedTooltip({
  children,
  content,
  variant = "brutal",
  className,
  offset = { x: 12, y: 12 },
}: NeoAnimatedTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const tooltipRef = React.useRef<HTMLDivElement>(null)

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const tooltipWidth = tooltipRef.current?.offsetWidth || 0
    const tooltipHeight = tooltipRef.current?.offsetHeight || 0
    
    let x = e.clientX + offset.x
    let y = e.clientY + offset.y
    
    // Boundary detection
    if (x + tooltipWidth > window.innerWidth) x = e.clientX - tooltipWidth - offset.x
    if (y + tooltipHeight > window.innerHeight) y = e.clientY - tooltipHeight - offset.y
    if (x < 0) x = offset.x
    if (y < 0) y = offset.y
    
    setPosition({ x, y })
  }, [offset.x, offset.y])

  const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
    setPosition({ x: e.clientX + offset.x, y: e.clientY + offset.y })
    setIsVisible(true)
  }, [offset.x, offset.y])

  const handleMouseLeave = React.useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <>
      <div
        className="inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
      {createPortal(
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            tooltipVariants({ variant }),
            isVisible ? "opacity-100" : "opacity-0",
            className
          )}
          style={{
            left: position.x,
            top: position.y,
            visibility: isVisible ? "visible" : "hidden",
          }}
        >
          {content}
        </div>,
        document.body
      )}
    </>
  )
}

NeoAnimatedTooltip.displayName = "NeoAnimatedTooltip"

export { NeoAnimatedTooltip, tooltipVariants }
export type { NeoAnimatedTooltipProps }

export const variantOptions = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
] as const
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

import * as React from "react"
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
                brutal: `text-black ${baseBrutalStyle}`,
                outline: "text-black border-2 border-black rounded-none",
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
 *
 * @example
 * <NeoAnimatedTooltip content="Hello!">
 *   <button>Hover me</button>
 * </NeoAnimatedTooltip>
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

        // Calculate position with boundary detection
        let x = e.clientX + offset.x
        let y = e.clientY + offset.y

        // Prevent tooltip from going off-screen (right)
        if (x + tooltipWidth > window.innerWidth) {
            x = e.clientX - tooltipWidth - offset.x
        }

        // Prevent tooltip from going off-screen (bottom)
        if (y + tooltipHeight > window.innerHeight) {
            y = e.clientY - tooltipHeight - offset.y
        }

        // Prevent tooltip from going off-screen (left)
        if (x < 0) {
            x = offset.x
        }

        // Prevent tooltip from going off-screen (top)
        if (y < 0) {
            y = offset.y
        }

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
                        left: position.x - 15,
                        top: position.y - 55,
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

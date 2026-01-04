import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { cn } from "@/lib/utils"

// Register GSAP plugin
gsap.registerPlugin(useGSAP)

type TabsContextType = {
    value: string
    tabOrder: string[]
    registerTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType | null>(null)
const CarouselContext = React.createContext<{ isCarousel: boolean; panelCount: number }>({ isCarousel: false, panelCount: 0 })

const NeoTabs = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(controlledValue || defaultValue || "")
    const tabOrderRef = React.useRef<string[]>([])

    const currentValue = controlledValue ?? internalValue

    const handleValueChange = (newValue: string) => {
        setInternalValue(newValue)
        onValueChange?.(newValue)
    }

    const registerTab = React.useCallback((value: string) => {
        if (!tabOrderRef.current.includes(value)) {
            tabOrderRef.current.push(value)
        }
    }, [])

    return (
        <TabsContext.Provider value={{ value: currentValue, tabOrder: tabOrderRef.current, registerTab }}>
            <TabsPrimitive.Root
                ref={ref}
                value={controlledValue}
                defaultValue={defaultValue}
                onValueChange={handleValueChange}
                {...props}
            >
                {children}
            </TabsPrimitive.Root>
        </TabsContext.Provider>
    )
})
NeoTabs.displayName = "NeoTabs"

const NeoTabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center gap-2 rounded-lg bg-inherit p-1.5",
            "border-2 border-black",
            className
        )}
        {...props}
    />
))
NeoTabsList.displayName = TabsPrimitive.List.displayName

const NeoTabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all",
            "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "disabled:pointer-events-none disabled:opacity-50",
            "data-[state=inactive]:bg-white data-[state=inactive]:text-black",
            "data-[state=inactive]:border-2 data-[state=inactive]:border-black",
            "data-[state=inactive]:shadow-[5px_5px_0_#000]",
            "data-[state=inactive]:hover:-translate-y-[-5px] data-[state=inactive]:hover:translate-x-1.25 data-[state=inactive]:hover:shadow-none",
            "data-[state=inactive]:active:translate-x-px data-[state=inactive]:active:-translate-y-px data-[state=inactive]:active:shadow-[2px_2px_0_#000]",
            "data-[state=active]:bg-(--primary) data-[state=active]:text-black",
            "data-[state=active]:border-2 data-[state=active]:border-black",
            className
        )}
        {...props}
    />
))
NeoTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

interface NeoTabsCarouselProps {
    children: React.ReactNode
    className?: string
}

/**
 * Carousel wrapper for NeoTabsContent components.
 * Wraps all tab content in a horizontally scrolling track animated by GSAP.
 */
const NeoTabsCarousel = ({ children, className }: NeoTabsCarouselProps) => {
    const context = React.useContext(TabsContext)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const trackRef = React.useRef<HTMLDivElement>(null)

    // Count the number of tab panels
    const panelCount = React.Children.count(children)

    useGSAP(
        () => {
            if (!trackRef.current || !context || panelCount === 0) return

            const { value, tabOrder } = context
            const currentIndex = tabOrder.indexOf(value)

            if (currentIndex === -1) return

            const panelWidth = 100 / panelCount

            gsap.to(trackRef.current, {
                xPercent: -(currentIndex * panelWidth),
                duration: 0.4,
                ease: "power2.inOut"
            })
        },
        { dependencies: [context?.value, panelCount], scope: containerRef }
    )

    return (
        <CarouselContext.Provider value={{ isCarousel: true, panelCount }}>
            <div
                ref={containerRef}
                className={cn("mt-4 overflow-hidden", className)}
            >
                <div
                    ref={trackRef}
                    className="flex"
                    style={{ width: `${panelCount * 100}%` }}
                >
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}
NeoTabsCarousel.displayName = "NeoTabsCarousel"

const NeoTabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, value, children, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    const { isCarousel, panelCount } = React.useContext(CarouselContext)
    const isActive = context?.value === value

    // Register this tab value on mount
    React.useEffect(() => {
        if (value && context?.registerTab) {
            context.registerTab(value)
        }
    }, [value, context])

    return (
        <TabsPrimitive.Content
            ref={ref}
            value={value}
            forceMount
            className={cn(
                "shrink-0 ring-offset-background",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                // Only hide inactive panels when NOT in carousel mode
                // Carousel uses overflow-hidden to manage visibility
                !isActive && !isCarousel && "invisible",
                !isCarousel && "w-full",
                className
            )}
            style={isCarousel && panelCount > 0 ? { width: `${100 / panelCount}%` } : undefined}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            {...props}
        >
            {children}
        </TabsPrimitive.Content>
    )
})
NeoTabsContent.displayName = TabsPrimitive.Content.displayName

export { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent, NeoTabsCarousel }

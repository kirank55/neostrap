import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const NeoTabs = TabsPrimitive.Root

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
            "data-[state=inactive]:hover:-translate-y-[-5px] data-[state=inactive]:hover:translate-x-[5px] data-[state=inactive]:hover:shadow-none",
            "data-[state=inactive]:active:translate-x-px data-[state=inactive]:active:-translate-y-px data-[state=inactive]:active:shadow-[2px_2px_0_#000]",
            "data-[state=active]:bg-(--primary) data-[state=active]:text-black",
            "data-[state=active]:border-2 data-[state=active]:border-black",
            className
        )}
        {...props}
    />
))
NeoTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const NeoTabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            "mt-4 ring-offset-background",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
        )}
        {...props}
    />
))
NeoTabsContent.displayName = TabsPrimitive.Content.displayName

export { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent }

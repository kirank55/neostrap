import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const TABS_PROPS: PropDefinition[] = [
  {
    name: "defaultValue",
    type: "string",
    default: "N/A",
    description: "The value of the tab that should be active when initially rendered.",
  },
  {
    name: "value",
    type: "string",
    default: "N/A",
    description: "The controlled value of the tab to activate.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "N/A",
    description: "Event handler called when the value changes.",
  },
  {
    name: "className",
    type: "string",
    default: "N/A",
    description: "Additional CSS classes to apply to the tabs container.",
  },
]

export const TABS_TRIGGER_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    default: "N/A",
    description: "A unique value that associates the trigger with a content.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents the user from interacting with the tab.",
  },
  {
    name: "className",
    type: "string",
    default: "N/A",
    description: "Additional CSS classes to apply to the trigger.",
  },
]

// ============================================================================
// Code Snippets
// ============================================================================

export const TABS_USAGE_CODE = `import { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent } from "@/components/ui/NeoTabs"

export function TabsDemo() {
  return (
    <NeoTabs defaultValue="account" className="w-100">
      <NeoTabsList>
        <NeoTabsTrigger value="account">Account</NeoTabsTrigger>
        <NeoTabsTrigger value="password">Password</NeoTabsTrigger>
      </NeoTabsList>
      <NeoTabsContent value="account">
        <p>Make changes to your account here.</p>
      </NeoTabsContent>
      <NeoTabsContent value="password">
        <p>Change your password here.</p>
      </NeoTabsContent>
    </NeoTabs>
  )
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neotabs.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install @radix-ui/react-tabs class-variance-authority clsx tailwind-merge`

export const TABS_COMPONENT_CODE = `import * as React from "react"
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
      "inline-flex h-10 items-center justify-start gap-2 rounded-md bg-transparent p-1 text-muted-foreground",
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
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm border-2 border-black bg-[var(--primary)] text-black font-semibold hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 data-[state=active]:shadow-[4px_4px_0_#000] data-[state=active]:translate-x-0 data-[state=active]:translate-y-0",
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
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
NeoTabsContent.displayName = TabsPrimitive.Content.displayName

export { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent }`

export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

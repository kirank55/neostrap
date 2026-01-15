import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const SWITCH_PROPS: PropDefinition[] = [
  {
    name: "value",
    type: '"grid" | "list"',
    default: "N/A (required)",
    description: "The current state of the view switch.",
  },
  {
    name: "onValueChange",
    type: '(value: "grid" | "list") => void',
    default: "N/A (required)",
    description: "Callback function when the view state changes.",
  },
  {
    name: "items",
    type: "DemoItem[]",
    default: "N/A (required)",
    description: "Array of items to display. Each item must have id, title, description, imageUrl, and optional actionContent.",
  },
  {
    name: "title",
    type: "string",
    default: "undefined",
    description: "Title displayed in the card header.",
  },
  {
    name: "description",
    type: "string",
    default: "undefined",
    description: "Description displayed in the card header.",
  },
  {
    name: "renderAction",
    type: "(item: DemoItem, view: 'grid' | 'list') => React.ReactNode",
    default: "undefined",
    description: "Optional render function for custom action buttons. Receives the current item and view mode.",
  },
  {
    name: "className",
    type: "string",
    default: "undefined",
    description: "Additional CSS classes to apply to the switch container.",
  },
]

// ============================================================================
// Code Snippets
// ============================================================================

export const SWITCH_USAGE_CODE = `import { useState } from "react"
import { NeoViewSwitch } from "@/components/ui/NeoViewSwitch"
import { NeoButton } from "@/components/ui/NeoButton"

const DEMO_ITEMS = [
  {
    id: 1,
    title: "Retro Computer",
    description: "A classic workstation from the 80s.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500",
    actionContent: "View Details",
  },
  {
    id: 2,
    title: "Synthwave City",
    description: "Neon lights and futuristic vibes.",
    imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=500",
    actionContent: "Explore",
  },
  {
    id: 3,
    title: "Cyberpunk Street",
    description: "High tech, low life aesthetic.",
    imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=500",
    actionContent: "Learn More",
  },
  {
    id: 4,
    title: "Digital Abstract",
    description: "Generated art patterns.",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=500",
    actionContent: "Discover",
  },
]

function Example() {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <NeoViewSwitch 
      value={view} 
      onValueChange={setView}
      items={DEMO_ITEMS}
      title={view === "grid" ? "Grid View" : "List View"}
      description={\`Currently displaying items in \${view} layout\`}
      renderAction={(item, view) => (
        <NeoButton className={view === 'grid' ? "w-full" : ""}>
          {item.actionContent}
        </NeoButton>
      )}
    />
  )
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoviewswitch.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge`

export const SWITCH_COMPONENT_CODE = `import * as React from "react"
import { motion } from "framer-motion"
import { LayoutGrid, List } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { NeoCard, NeoCardContent, NeoCardDescription, NeoCardHeader, NeoCardTitle } from "@/components/ui/NeoCard"

const switchVariants = cva(
  "inline-flex h-12 items-center rounded-lg p-1 gap-1 relative z-0 overflow-hidden bg-white border-2 border-black shadow-[4px_4px_0_#000]"
)

interface DemoItem {
  id: number | string
  title: string
  description: string
  imageUrl: string
  actionContent?: string
}

interface NeoViewSwitchProps extends VariantProps<typeof switchVariants> {
  value: "grid" | "list"
  onValueChange: (value: "grid" | "list") => void
  className?: string
  items: DemoItem[]
  title?: string
  description?: string
  renderAction?: (item: DemoItem, view: "grid" | "list") => React.ReactNode
}

function NeoViewSwitch({
  value,
  onValueChange,
  className,
  items,
  title,
  description,
  renderAction,
}: NeoViewSwitchProps) {
  const isGrid = value === "grid"
  const uniqueId = React.useId()
  const layoutId = \`active-view-bg-\${uniqueId}\`

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className={cn(switchVariants({ className }))}>
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
      
      <NeoCard className="w-full transition-all duration-300 shadow-none">
        {(title || description) && (
          <NeoCardHeader>
            {title && <NeoCardTitle>{title}</NeoCardTitle>}
            {description && <NeoCardDescription>{description}</NeoCardDescription>}
          </NeoCardHeader>
        )}
        <NeoCardContent>
          <div className="min-h-[600px] sm:min-h-[400px]">
            <motion.div 
              layout
              className={isGrid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"}
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    layout: { duration: 0.8, type: "spring", bounce: 0.2 },
                    opacity: { duration: 0.5 }
                  }}
                  className="w-full"
                >
                  <NeoCard className={\`overflow-hidden \${value === 'list' ? "flex flex-row" : "flex flex-col"}\`}>
                    <div className={value === 'grid' ? "aspect-video w-full border-b-2 border-black" : "w-1/3 min-w-[200px] border-r-2 border-black relative shrink-0"}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className={value === 'list' ? "flex flex-1 items-center justify-between p-6 gap-4" : "flex flex-col flex-1"}>
                      <div className={value === 'list' ? "flex flex-col gap-1.5 min-w-0" : "p-6"}>
                        <NeoCardTitle className="text-xl">{item.title}</NeoCardTitle>
                        <NeoCardDescription className={value === 'list' ? "line-clamp-2" : ""}>
                          {item.description}
                        </NeoCardDescription>
                      </div>

                      {renderAction && (
                        <div className={value === 'list' ? "shrink-0" : "p-6 pt-0 mt-auto"}>
                          {renderAction(item, value)}
                        </div>
                      )}
                    </div>
                  </NeoCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </NeoCardContent>
      </NeoCard>
    </div>
  )
}

NeoViewSwitch.displayName = "NeoViewSwitch"

export { NeoViewSwitch, switchVariants }
export type { NeoViewSwitchProps, DemoItem }
`

export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

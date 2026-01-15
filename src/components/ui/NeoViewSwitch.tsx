import * as React from "react"
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
  const layoutId = `active-view-bg-${uniqueId}`

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
          <div className="min-h-150 sm:min-h-100">
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
                    <NeoCard className={`overflow-hidden ${value === 'list' ? "flex flex-row" : "flex flex-col"}`}>
                      <div className={value === 'grid' ? "aspect-video w-full border-b-2 border-black" : "w-1/3 min-w-50 border-r-2 border-black relative shrink-0"}>
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

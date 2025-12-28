import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const dropdownTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-2 font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/10",
  {
    variants: {
      variant: {
        brutal: "bg-amber-300 text-black border-black shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5",
        outline: "bg-transparent text-black border-black hover:bg-black/5 shadow-none",
      },
      size: {
        sm: "h-9 text-sm px-3",
        default: "h-10 text-base px-4",
        lg: "h-12 text-lg px-5",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

const dropdownContentVariants = cva(
  "absolute z-50 min-w-48 rounded-lg border-2 border-black bg-white p-1 shadow-[4px_4px_0_#000] animate-in fade-in-0 zoom-in-95",
  {
    variants: {
      variant: {
        brutal: "bg-amber-50",
        outline: "bg-white shadow-none rounded-none",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

const dropdownItemVariants = cva(
  "flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        brutal: "hover:bg-amber-300 focus:bg-amber-300",
        outline: "hover:bg-gray-100 focus:bg-gray-100",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

type DropdownVariant = "brutal" | "outline"
type DropdownSize = "sm" | "default" | "lg"

const variantOptions: { variant: DropdownVariant; label: string }[] = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
]

const sizeOptions: { size: DropdownSize; label: string }[] = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
]

type DropdownContextValue = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  variant: DropdownVariant
  size: DropdownSize
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null)

function useDropdown() {
  const context = React.useContext(DropdownContext)
  if (!context) {
    throw new Error("Dropdown components must be used within a NeoDropdown")
  }
  return context
}

type NeoDropdownProps = {
  children: React.ReactNode
  variant?: DropdownVariant
  size?: DropdownSize
}

function NeoDropdown({ children, variant = "brutal", size = "default" }: NeoDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, variant, size }}>
      <div ref={dropdownRef} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

type DropdownTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof dropdownTriggerVariants>

const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen, variant, size } = useDropdown()

    return (
      <button
        ref={ref}
        type="button"
        className={cn(dropdownTriggerVariants({ variant, size }), className)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        {...props}
      >
        {children}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
    )
  }
)
DropdownTrigger.displayName = "DropdownTrigger"

type DropdownContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end"
}

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ className, children, align = "start", ...props }, ref) => {
    const { isOpen, variant } = useDropdown()

    if (!isOpen) return null

    const alignmentClasses = {
      start: "left-0",
      center: "left-1/2 -translate-x-1/2",
      end: "right-0",
    }

    return (
      <div
        ref={ref}
        className={cn(dropdownContentVariants({ variant }), alignmentClasses[align], "mt-2", className)}
        role="menu"
        {...props}
      >
        {children}
      </div>
    )
  }
)
DropdownContent.displayName = "DropdownContent"

type DropdownItemProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, children, onClick, ...props }, ref) => {
    const { setIsOpen, variant } = useDropdown()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      setIsOpen(false)
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cn(dropdownItemVariants({ variant }), className)}
        role="menuitem"
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownItem.displayName = "DropdownItem"

type DropdownSeparatorProps = React.HTMLAttributes<HTMLDivElement>

const DropdownSeparator = React.forwardRef<HTMLDivElement, DropdownSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("my-1 h-px bg-gray-200", className)}
        role="separator"
        {...props}
      />
    )
  }
)
DropdownSeparator.displayName = "DropdownSeparator"

export {
  NeoDropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  dropdownTriggerVariants,
  dropdownContentVariants,
  dropdownItemVariants,
  variantOptions,
  sizeOptions,
}
export type { NeoDropdownProps, DropdownTriggerProps, DropdownContentProps, DropdownItemProps }

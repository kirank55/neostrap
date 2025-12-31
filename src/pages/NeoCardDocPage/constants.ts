import type { PropDefinition } from "@/components/PropsTable"

// ============================================================================
// Props Definitions
// ============================================================================

export const CARD_PROPS: PropDefinition[] = [
  {
    name: "variant",
    type: '"brutal" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the card.",
  },
  {
    name: "className",
    type: "string",
    default: "N/A",
    description: "Additional CSS classes to apply.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content to be displayed inside the card.",
  },
]

export const TESTIMONIAL_CARD_PROPS: PropDefinition[] = [
  {
    name: "quote",
    type: "string",
    default: "N/A",
    description: "The testimonial quote text.",
  },
  {
    name: "author",
    type: "string",
    default: "N/A",
    description: "The name of the person giving the testimonial.",
  },
  {
    name: "role",
    type: "string",
    default: "N/A",
    description: "The role/title of the author.",
  },
  {
    name: "avatarUrl",
    type: "string",
    default: "N/A",
    description: "URL to the author's avatar image.",
  },
]

// ============================================================================
// Code Snippets
// ============================================================================

export const CARD_USAGE_CODE = `import {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
  NeoCardFooter,
} from "@/components/ui/NeoCard"

export function CardDemo() {
  return (
    <NeoCard>
      <NeoCardHeader>
        <NeoCardTitle>Card Title</NeoCardTitle>
        <NeoCardDescription>Card description goes here.</NeoCardDescription>
      </NeoCardHeader>
      <NeoCardContent>
        <p>Card content</p>
      </NeoCardContent>
      <NeoCardFooter>
        <button>Action</button>
      </NeoCardFooter>
    </NeoCard>
  )
}`

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neocard.json`

export const INSTALL_DEPENDENCIES_CODE = `npm install class-variance-authority clsx tailwind-merge`

export const CARD_COMPONENT_CODE = `import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseStyle = "border-2 border-black"
const brutalShadow = "shadow-[4px_4px_0_#000]"

const cardVariants = cva(
  \`\${baseStyle} rounded-lg transition-all\`,
  {
    variants: {
      variant: {
        brutal: \`bg-[var(--primary)] \${brutalShadow}\`,
        outline: "bg-white rounded-none",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

type CardVariant = "brutal" | "outline"

interface NeoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

function NeoCard({ className, variant = "brutal", ...props }: NeoCardProps) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

interface NeoCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

function NeoCardHeader({ className, ...props }: NeoCardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  )
}

interface NeoCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

function NeoCardTitle({ className, ...props }: NeoCardTitleProps) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-xl font-bold text-black", className)}
      {...props}
    />
  )
}

interface NeoCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

function NeoCardDescription({ className, ...props }: NeoCardDescriptionProps) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-black/70", className)}
      {...props}
    />
  )
}

interface NeoCardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

function NeoCardContent({ className, ...props }: NeoCardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}

interface NeoCardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

function NeoCardFooter({ className, ...props }: NeoCardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

export {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
  NeoCardFooter,
}
`

export const UTILS_CODE = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

// ============================================================================
// Demo Data
// ============================================================================

export const TESTIMONIALS = [
  {
    quote:
      "This library has completely transformed how we build UIs. The neo-brutalist style is exactly what we needed.",
    author: "Sarah Chen",
    role: "Lead Designer at Acme",
  },
  {
    quote: "Fast, accessible, and beautiful. What more could you ask for?",
    author: "Alex Rivera",
    role: "Frontend Developer",
  },
]

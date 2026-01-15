import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { NeoButton } from "./NeoButton"

const baseStyle = "border-2 border-black"
const brutalShadow = "shadow-[4px_4px_0_#000]"

const cardVariants = cva(
  `${baseStyle} rounded-lg transition-all`,
  {
    variants: {
      variant: {
        brutal: `bg-[var(--primary)] ${brutalShadow}`,
        outline: "bg-white rounded-none",
      },
    },
    defaultVariants: {
      variant: "brutal",
    },
  }
)

/**
 * Visual variant for the card.
 */
type CardVariant = "brutal" | "outline"

interface NeoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

/**
 * Root container for card content.
 * Applies base styles including border and shadow based on the variant.
 */
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

/**
 * Container for the card's header section.
 */
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

/**
 * The title element of the card.
 */
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

/**
 * A description or subtitle for the card.
 */
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

/**
 * The main content area of the card.
 */
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

/**
 * Container for the card's footer, typically used for actions.
 */
function NeoCardFooter({ className, ...props }: NeoCardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

// Pre-built Card Variants

interface DefaultCardProps {
  title: string
  description: string
  variant?: CardVariant
  className?: string
}

/**
 * A pre-configured card with title and description.
 */
function DefaultCard({ title, description, variant = "brutal", className }: DefaultCardProps) {
  return (
    <NeoCard variant={variant} className={cn("max-w-sm", className)}>
      <NeoCardHeader>
        <NeoCardTitle>{title}</NeoCardTitle>
        <NeoCardDescription>{description}</NeoCardDescription>
      </NeoCardHeader>
    </NeoCard>
  )
}

interface CardWithButtonProps {
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
  variant?: CardVariant
  className?: string
}

/**
 * A pre-configured card with title, description, and an action button in the footer.
 */
function CardWithButton({
  title,
  description,
  buttonText = "Read more",
  onButtonClick,
  variant = "brutal",
  className,
}: CardWithButtonProps) {
  return (
    <NeoCard variant={variant} className={cn("max-w-sm", className)}>
      <NeoCardHeader>
        <NeoCardTitle>{title}</NeoCardTitle>
        <NeoCardDescription>{description}</NeoCardDescription>
      </NeoCardHeader>
      <NeoCardFooter>
        <NeoButton variant={variant} onClick={onButtonClick} className="cursor-pointer">
          {buttonText}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NeoButton>
      </NeoCardFooter>
    </NeoCard>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl?: string
  variant?: CardVariant
  className?: string
}

/**
 * A pre-configured card for displaying testimonials/quotes.
 */
function TestimonialCard({
  quote,
  author,
  role,
  avatarUrl,
  variant = "brutal",
  className,
}: TestimonialCardProps) {
  return (
    <NeoCard variant={variant} className={cn("max-w-sm", className)}>
      <NeoCardContent className="pt-6">
        <svg
          className="w-8 h-8 text-black/30 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-lg text-black/80 mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="w-10 h-10 rounded-full border-2 border-black"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-black/10 border-2 border-black flex items-center justify-center">
              <span className="text-sm font-bold text-black">
                {author.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-black">{author}</p>
            <p className="text-sm text-black/60">{role}</p>
          </div>
        </div>
      </NeoCardContent>
    </NeoCard>
  )
}

interface CardWithImageProps {
  imageUrl: string
  imageAlt: string
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
  variant?: CardVariant
  className?: string
}

/**
 * A pre-configured card with an image, title, description, and action button.
 */
function CardWithButtonandImage({
  imageUrl,
  imageAlt,
  title,
  description,
  buttonText = "Read more",
  onButtonClick,
  variant = "brutal",
  className,
}: CardWithImageProps) {
  return (
    <NeoCard variant={variant} className={cn("max-w-sm overflow-hidden", className)}>
      <div className="aspect-video w-full overflow-hidden border-b-2 border-black">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <NeoCardHeader>
        <NeoCardTitle>{title}</NeoCardTitle>
        <NeoCardDescription>{description}</NeoCardDescription>
      </NeoCardHeader>
      <NeoCardFooter>
        <NeoButton variant={variant} onClick={onButtonClick} className="w-full cursor-pointer">
          {buttonText}
        </NeoButton>
      </NeoCardFooter>
    </NeoCard>
  )
}

export {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
  NeoCardFooter,
  DefaultCard,
  CardWithButton,
  TestimonialCard,
  CardWithButtonandImage,
}

export type {
  NeoCardProps,
  NeoCardHeaderProps,
  NeoCardTitleProps,
  NeoCardDescriptionProps,
  NeoCardContentProps,
  NeoCardFooterProps,
  DefaultCardProps,
  CardWithButtonProps,
  TestimonialCardProps,
  CardWithImageProps,
}

export const variantOptions = [
  { variant: "brutal", label: "Brutal" },
  { variant: "outline", label: "Outline" },
] as const

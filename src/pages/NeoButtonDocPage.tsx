import { NeoButton, variantOptions, sizeOptions } from "@/components/ui/NeoButton"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"
import { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent } from "@/components/ui/NeoTabs"

const buttonProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content to be displayed inside the button.",
  },
  {
    name: "variant",
    type: '"brutal" | "regular" | "danger" | "success" | "inverter" | "disabled" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the button.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the button.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the button for styling.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description: "Whether the button is disabled.",
  },
  {
    name: "onClick",
    type: "() => void (optional)",
    default: "N/A",
    description: "Function to be called when the button is clicked.",
  },
]

const buttonCode = `import { NeoButton } from "@/components/ui/NeoButton"

export function ButtonDemo() {
  return <NeoButton>Click me</NeoButton>
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neobutton.json`

function NeoButtonDocPage() {

  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Button"
          title="Neostrap UI Button"
          description="Neo-brutalist primary button plus all variants and sizes."
        />
        <Codepreview preview={<NeoButton>Punch Me</NeoButton>} code={buttonCode} />
      </DocSection>

      <ShowcaseSurface>

        <DocSection id="installation" title="Installation">
          <NeoTabs defaultValue="cli" className="w-full">
            <NeoTabsList className="w-full flex justify-start items-center gap-8 border-0">
              <NeoTabsTrigger value="cli">CLI</NeoTabsTrigger>
              <NeoTabsTrigger value="manual">Manual</NeoTabsTrigger>
            </NeoTabsList>
            <NeoTabsContent value="cli">
              <CodeBlock code={installCode} highlightCode={false} />
            </NeoTabsContent>
            <NeoTabsContent value="manual">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Step 1: Copy the component code</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a new file at <code className="px-1.5 py-0.5 bg-muted rounded text-sm">src/components/ui/NeoButton.tsx</code> and copy the following code:
                  </p>
                  <CodeBlock
                    code={`import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseBrutalStyle = [
  "border-2 border-black",
  "shadow-[5px_5px_0_#000]",
  "hover:-translate-y-[-5px] hover:translate-x-[5px] hover:shadow-none ",
  "active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000]",
  "focus-visible:ring-black/20 focus-visible:border-black",
].join(" ")

/**
 * Button variants for Neostrap UI
 * Supports multiple styles: brutal (neo-brutalist default), regular, danger, success, inverter, outline, and disabled
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        brutal: \`bg-[var(--primary)] text-black \${baseBrutalStyle}\`,
        inverter: \`bg-black text-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:text-black \${baseBrutalStyle}\`,
        outline:
          "border-2 border-black rounded-none bg-white text-black hover:bg-accent hover:text-accent-foreground",
        disabled: \`bg-gray-400 text-gray-600 opacity-60 cursor-not-allowed \${baseBrutalStyle}\`,
        link: "text-primary hover:underline decoration-[3px] underline-offset-4",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "brutal",
      size: "default",
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

/**
 * Primary button component with neo-brutalist styling.
 * Supports various variants, sizes, and can be rendered as a child component.
 *
 * @example
 * <NeoButton variant="brutal" onClick={() => console.log('clicked')}>
 *   Click me
 * </NeoButton>
 */
function NeoButton({
  className,
  variant = "brutal",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { NeoButton }

export { buttonVariants }
export type { ButtonProps }

export const variantOptions = [
  { variant: "brutal", label: "Brutal", disabled: false },
  { variant: "outline", label: "Outline", disabled: false },
  { variant: "inverter", label: "Inverter", disabled: false },
  { variant: "disabled", label: "Disabled", disabled: true },
  { variant: "link", label: "Link", disabled: false },
] as const

export const sizeOptions = [
  { size: "sm", label: "Small" },
  { size: "default", label: "Default" },
  { size: "lg", label: "Large" },
] as const`}
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Step 2: Install dependencies</h3>
                  <p className="text-sm text-muted-foreground">
                    Make sure you have the required dependencies installed:
                  </p>
                  <CodeBlock code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`} highlightCode={false} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Step 3: Add the utility function</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure you have the <code className="px-1.5 py-0.5 bg-muted rounded text-sm">cn</code> utility at <code className="px-1.5 py-0.5 bg-muted rounded text-sm">src/lib/utils.ts</code>:
                  </p>
                  <CodeBlock
                    code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Step 4: Usage</h3>
                  <p className="text-sm text-muted-foreground">
                    You can now import and use the NeoButton component:
                  </p>
                  <CodeBlock code={buttonCode} />
                </div>
              </div>
            </NeoTabsContent>
          </NeoTabs>
        </DocSection>
      </ShowcaseSurface>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <NeoButton key={variant} variant={variant} disabled={disabled}>
                {label}
              </NeoButton>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <ShowcaseSurface>
          <InlineWrap>
            {sizeOptions.map(({ size, label }) => (
              <NeoButton key={size} size={size}>
                {label}
              </NeoButton>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={buttonProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoButtonDocPage 

/**
 * @fileoverview Essential neobrutalism documentation page.
 * Comprehensive guide to neobrutalism design principles: borders, shadows, colors, typography, animations, and interactive states.
 */

// UI Components
import { NeoButton } from "@/components/ui/NeoButton";
import {
  NeoCard,
  NeoCardContent,
  NeoCardDescription,
  NeoCardFooter,
  NeoCardHeader,
  NeoCardTitle,
} from "@/components/ui/NeoCard";
import { NeoInput } from "@/components/ui/NeoInput";
import { NeoSwitch } from "@/components/ui/NeoSwitch";


// Documentation components
import { CodeBlock } from "@/components/CodeDemo";
import DocSection from "@/components/docs/DocSection";
import DocPageHeader from "@/components/docs/DocPageHeader";
import {
  ShowcaseSurface,
  InlineWrap,
  LabeledItem,
} from "@/components/docs/Showcase";

// Icons
import {
  SquareDashed,
  Zap,
  Palette,
  Type,
  MousePointer,
  Box,
  ArrowRight,
  Check,
  X,
  Info,
} from "lucide-react";

// ============================================================================
// Section: Overview
// ============================================================================

function OverviewSection() {
  return (
    <DocSection id="overview">
      <DocPageHeader
        category="Essential"
        title="Neobrutalism Essentials"
        description="The core building blocks of neobrutalist design. Master these patterns to create bold, fearless interfaces."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-pink) shadow-[8px_8px_0_#000]">
          <h3 className="text-xl font-black mb-3 flex items-center gap-2">
            <SquareDashed className="size-5" /> Thick Borders
          </h3>
          <p className="text-sm font-medium">
            2-4px solid black borders create sharp, defined edges essential to
            the neobrutalist aesthetic.
          </p>
        </div>

        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-amber) shadow-[8px_8px_0_#000]">
          <h3 className="text-xl font-black mb-3 flex items-center gap-2">
            <Box className="size-5" /> Hard Shadows
          </h3>
          <p className="text-sm font-medium">
            Offset box shadows with no blur create depth without softness. The
            signature "floating" effect.
          </p>
        </div>

        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-baby-blue) shadow-[8px_8px_0_#000]">
          <h3 className="text-xl font-black mb-3 flex items-center gap-2">
            <Palette className="size-5" /> Bold Colors
          </h3>
          <p className="text-sm font-medium">
            High-saturation colors that demand attention. No muted or safe
            palettes allowed.
          </p>
        </div>

        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-lavender) shadow-[8px_8px_0_#000]">
          <h3 className="text-xl font-black mb-3 flex items-center gap-2">
            <Type className="size-5" /> Strong Typography
          </h3>
          <p className="text-sm font-medium">
            Bold, distinctive fonts like Syne that make a statement. Headers
            demand to be seen.
          </p>
        </div>
      </div>
    </DocSection>
  );
}

// ============================================================================
// Section: Borders
// ============================================================================

function BordersSection() {
  const borderSizes = [
    { size: "border-0", label: "None" },
    { size: "border", label: "1px" },
    { size: "border-2", label: "2px" },
    { size: "border-4", label: "4px" },
  ];

  return (
    <DocSection id="borders" title="Borders">
      <p className="text-lg text-muted-foreground font-medium mb-8">
        Borders are the backbone of neobrutalism. They create structure, define
        boundaries, and give components their distinctive "sticker" appearance.
      </p>

      {/* Border Widths */}
      <div className="space-y-4">
        <h4 className="text-xl font-black">Border Widths</h4>
        <ShowcaseSurface>
          <InlineWrap>
            {borderSizes.map(({ size, label }) => (
              <LabeledItem key={size} label={label}>
                <div
                  className={`w-16 h-16 bg-white ${size} border-black flex items-center justify-center font-bold`}
                >
                  Aa
                </div>
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
        <CodeBlock
          code={`/* Common border widths */
border-0    /* No border */
border      /* 1px - thin */
border-2    /* 2px - standard */
border-4    /* 4px - thick (most common) */
`}
        />
      </div>
    </DocSection>
  );
}

// ============================================================================
// Section: Shadows
// ============================================================================

function ShadowsSection() {
  const shadowSizes = [
    { shadow: "shadow-[2px_2px_0_#000]", label: "Small" },
    { shadow: "shadow-[4px_4px_0_#000]", label: "Medium" },
    { shadow: "shadow-[6px_6px_0_#000]", label: "Large" },
    { shadow: "shadow-[8px_8px_0_#000]", label: "XL" },
  ];



  return (
    <DocSection id="shadows" title="Shadows">
      <p className="text-lg text-muted-foreground font-medium mb-8">
        Shadows in neobrutalism are hard, offset, and unblurred. They create
        depth through contrast, not softness.
      </p>

      {/* Shadow Sizes */}
      <div className="space-y-4">
        <h4 className="text-xl font-black">Shadow Offset Sizes</h4>
        <ShowcaseSurface>
          <InlineWrap>
            {shadowSizes.map(({ shadow, label }) => (
              <LabeledItem key={shadow} label={label}>
                <div
                  className={`w-16 h-16 bg-white border-4 border-black ${shadow} flex items-center justify-center font-bold`}
                >
                  Aa
                </div>
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
        <CodeBlock
          code={`/* Shadow offset sizes - the pattern is always [x]px [y]px [blur] [spread] [color] */
/* Note: blur is ALWAYS 0 for that crisp hard edge */
shadow-[2px_2px_0_#000]   /* Small - subtle lift */
shadow-[4px_4px_0_#000]   /* Medium - standard (most common) */
shadow-[6px_6px_0_#000]   /* Large - prominent */
shadow-[8px_8px_0_#000]   /* XL - dramatic */`}
        />
      </div>
    </DocSection>
  );
}


// ============================================================================
// Section: Components
// ============================================================================

function ComponentsSection() {
  return (
    <DocSection id="components" title="Core Components">
      <p className="text-lg text-muted-foreground font-medium mb-8">
        These are the essential Neostrap components that embody all neobrutalist
        principles.
      </p>

      {/* Button */}
      <div className="space-y-4 mb-12">
        <h4 className="text-xl font-black flex items-center gap-2">
          <MousePointer className="size-5" /> Button
        </h4>
        <ShowcaseSurface>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeoButton>Default</NeoButton>
            <NeoButton variant="outline">Outline</NeoButton>
            <NeoButton variant="inverter">Inverter</NeoButton>
            <NeoButton variant="disabled" disabled>
              Disabled
            </NeoButton>
          </div>
        </ShowcaseSurface>
        <CodeBlock
          code={`import { NeoButton } from "@/components/ui/NeoButton"

<NeoButton>Default</NeoButton>
<NeoButton variant="outline">Outline</NeoButton>
<NeoButton variant="inverter">Inverter</NeoButton>
<NeoButton variant="disabled" disabled>Disabled</NeoButton>`}
        />
      </div>

      {/* Card */}
      <div className="space-y-4 mb-12">
        <h4 className="text-xl font-black flex items-center gap-2">
          <Box className="size-5" /> Card
        </h4>
        <ShowcaseSurface>
          <div className="max-w-sm">
            <NeoCard>
              <NeoCardHeader>
                <NeoCardTitle>Neobrutal Card</NeoCardTitle>
                <NeoCardDescription>
                  A card with bold borders, hard shadows, and clear hierarchy.
                </NeoCardDescription>
              </NeoCardHeader>
              <NeoCardContent>
                <p className="text-sm font-medium">
                  The card combines all essential neobrutalist elements: thick
                  borders, offset shadows, and vibrant backgrounds.
                </p>
              </NeoCardContent>
              <NeoCardFooter className="gap-2">
                <NeoButton>Accept</NeoButton>
              </NeoCardFooter>
            </NeoCard>
          </div>
        </ShowcaseSurface>
        <CodeBlock
          code={`import { NeoCard, NeoCardContent, NeoCardDescription, NeoCardFooter, NeoCardHeader, NeoCardTitle } from "@/components/ui/NeoCard"

<NeoCard>
    <NeoCardHeader>
        <NeoCardTitle>Title</NeoCardTitle>
        <NeoCardDescription>Description</NeoCardDescription>
    </NeoCardHeader>
    <NeoCardContent>Content</NeoCardContent>
    <NeoCardFooter>Footer</NeoCardFooter>
</NeoCard>`}
        />
      </div>

      {/* Input */}
      <div className="space-y-4 mb-12">
        <h4 className="text-xl font-black flex items-center gap-2">
          <Type className="size-5" /> Input
        </h4>
        <ShowcaseSurface>
          <div className="space-y-4 w-full max-w-md">
            <NeoInput placeholder="Enter text..." />
            <NeoInput placeholder="Disabled" disabled />
            <NeoInput placeholder="With value" defaultValue="Neobrutalism" />
          </div>
        </ShowcaseSurface>
        <CodeBlock
          code={`import { NeoInput } from "@/components/ui/NeoInput"

<NeoInput placeholder="Enter text..." />
<NeoInput placeholder="Disabled" disabled />
<NeoInput defaultValue="Neobrutalism" />`}
        />
      </div>

      {/* Switch */}
      <div className="space-y-4 mb-12">
        <h4 className="text-xl font-black flex items-center gap-2">
          <Zap className="size-5" /> Switch
        </h4>
        <ShowcaseSurface>
          <div className="flex gap-8 items-center justify-center">
            <NeoSwitch />
            <NeoSwitch defaultChecked />
            <NeoSwitch disabled />
          </div>
        </ShowcaseSurface>
        <CodeBlock
          code={`import { NeoSwitch } from "@/components/ui/NeoSwitch"

<NeoSwitch />
<NeoSwitch defaultChecked />
<NeoSwitch disabled />`}
        />
      </div>

    </DocSection>
  );
}


// ============================================================================
// Section: Best Practices
// ============================================================================

function BestPracticesSection() {
  return (
    <DocSection id="best-practices" title="Best Practices">
      <p className="text-lg text-muted-foreground font-medium mb-8">
        Guidelines for creating effective neobrutalist interfaces.
      </p>

      <div className="space-y-6">
        {/* Do */}
        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-baby-blue) shadow-[6px_6px_0_#000]">
          <h4 className="text-xl font-black mb-4 flex items-center gap-2">
            <Check className="size-6 text-green-600" /> Do
          </h4>
          <ul className="space-y-3 font-medium">
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use consistent border widths (usually 2-4px)
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Keep shadows hard with zero blur
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use bold, saturated colors from the palette
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Add hover effects that provide clear feedback
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use strong contrast between elements
            </li>
          </ul>
        </div>

        {/* Don't */}
        <div className="p-6 rounded-2xl border-4 border-black bg-(--color-pink) shadow-[6px_6px_0_#000]">
          <h4 className="text-xl font-black mb-4 flex items-center gap-2">
            <X className="size-6 text-red-600" /> Don't
          </h4>
          <ul className="space-y-3 font-medium">
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use thin or no borders — they weaken the effect
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use blurred or soft shadows
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Use muted or neutral colors
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Mix multiple border widths inconsistently
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="size-5 shrink-0 mt-0.5" />
              Forget interactive states — they matter!
            </li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="flex gap-4 p-6 rounded-xl border-3 border-black bg-(--color-amber) shadow-[4px_4px_0_#000]">
          <Info className="size-6 shrink-0 text-black" />
          <div>
            <p className="font-black text-lg mb-1">Pro Tip</p>
            <p className="font-medium">
              The key to neobrutalism is consistency. Pick your border width,
              shadow offset, and color palette — then apply them uniformly
              across all components.
            </p>
          </div>
        </div>
      </div>
    </DocSection>
  );
}

// ============================================================================
// Main Component
// ============================================================================

function EssentialDocPage() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <OverviewSection />
      <BordersSection />
      <ShadowsSection />
      <ComponentsSection />
      {/* <InteractiveStatesSection /> */}
      <BestPracticesSection />
    </div>
  );
}

export default EssentialDocPage;

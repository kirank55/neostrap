/**
 * @fileoverview Essential neobrutalism documentation page.
 * Comprehensive guide to neobrutalism design principles: borders, shadows, colors, typography, animations, and interactive states.
 */

// UI Components
import { NeoButton } from "@/components/ui/NeoButton"
import { NeoCard, NeoCardContent, NeoCardDescription, NeoCardFooter, NeoCardHeader, NeoCardTitle } from "@/components/ui/NeoCard"
import { NeoInput } from "@/components/ui/NeoInput"
import { NeoSwitch } from "@/components/ui/NeoSwitch"
import { NeoTabs, NeoTabsContent, NeoTabsList, NeoTabsTrigger } from "@/components/ui/NeoTabs"

// Documentation components
import { CodeBlock } from "@/components/CodeDemo"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import { ShowcaseSurface, InlineWrap, LabeledItem } from "@/components/docs/Showcase"

// Icons
import { 
    SquareDashed, 
    Zap, 
    Palette, 
    Type, 
    MousePointer, 
    Box, 
    Layers,
    ArrowRight,
    Check,
    X,
    Info
} from "lucide-react"

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
                        2-4px solid black borders create sharp, defined edges essential to the neobrutalist aesthetic.
                    </p>
                </div>

                <div className="p-6 rounded-2xl border-4 border-black bg-(--color-amber) shadow-[8px_8px_0_#000]">
                    <h3 className="text-xl font-black mb-3 flex items-center gap-2">
                        <Box className="size-5" /> Hard Shadows
                    </h3>
                    <p className="text-sm font-medium">
                        Offset box shadows with no blur create depth without softness. The signature "floating" effect.
                    </p>
                </div>

                <div className="p-6 rounded-2xl border-4 border-black bg-(--color-baby-blue) shadow-[8px_8px_0_#000]">
                    <h3 className="text-xl font-black mb-3 flex items-center gap-2">
                        <Palette className="size-5" /> Bold Colors
                    </h3>
                    <p className="text-sm font-medium">
                        High-saturation colors that demand attention. No muted or safe palettes allowed.
                    </p>
                </div>

                <div className="p-6 rounded-2xl border-4 border-black bg-(--color-lavender) shadow-[8px_8px_0_#000]">
                    <h3 className="text-xl font-black mb-3 flex items-center gap-2">
                        <Type className="size-5" /> Strong Typography
                    </h3>
                    <p className="text-sm font-medium">
                        Bold, distinctive fonts like Syne that make a statement. Headers demand to be seen.
                    </p>
                </div>
            </div>
        </DocSection>
    )
}

// ============================================================================
// Section: Borders
// ============================================================================

function BordersSection() {
    const borderSizes = [
        { size: "border-0", label: "None" },
        { size: "border", label: "1px" },
        { size: "border-2", label: "2px" },
        { size: "border-3", label: "3px" },
        { size: "border-4", label: "4px" },
        { size: "border-8", label: "8px" },
    ]

    return (
        <DocSection id="borders" title="Borders">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                Borders are the backbone of neobrutalism. They create structure, define boundaries, and give components their distinctive "sticker" appearance.
            </p>

            {/* Border Widths */}
            <div className="space-y-4">
                <h4 className="text-xl font-black">Border Widths</h4>
                <ShowcaseSurface>
                    <InlineWrap>
                        {borderSizes.map(({ size, label }) => (
                            <LabeledItem key={size} label={label}>
                                <div className={`w-16 h-16 bg-white ${size} border-black flex items-center justify-center font-bold`}>
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
border-3    /* 3px - medium */
border-4    /* 4px - thick (most common) */
border-8    /* 8px - extreme */`}
                />
            </div>

            {/* Border Styles */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Border Styles</h4>
                <ShowcaseSurface>
                    <InlineWrap>
                        <LabeledItem label="Solid">
                            <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Dashed">
                            <div className="w-16 h-16 bg-white border-4 border-dashed border-black flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Dotted">
                            <div className="w-16 h-16 bg-white border-4 border-dotted border-black flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                    </InlineWrap>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Border styles */
border-4 border-black           /* Solid */
border-4 border-dashed border-black  /* Dashed */
border-4 border-dotted border-black /* Dotted */`}
                />
            </div>

            {/* Border Radius */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Border Radius</h4>
                <ShowcaseSurface>
                    <InlineWrap>
                        <LabeledItem label="None">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-none flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Small">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-sm flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Medium">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-md flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Large">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-lg flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="XL">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-xl flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                        <LabeledItem label="Full">
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center font-bold">
                                Aa
                            </div>
                        </LabeledItem>
                    </InlineWrap>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Border radius */
rounded-none   /* Sharp corners */
rounded-sm     /* Subtle */
rounded-md     /* Standard */
rounded-lg     /* Common in Neostrap */
rounded-xl     /* More pronounced */
rounded-full   /* Circle/pill */`}
                />
            </div>
        </DocSection>
    )
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
    ]

    const shadowColors = [
        { shadow: "shadow-[4px_4px_0_#000]", label: "Black", color: "bg-white" },
        { shadow: "shadow-[4px_4px_0_#FE5BD6]", label: "Pink", color: "bg-white" },
        { shadow: "shadow-[4px_4px_0_#FEC437]", label: "Amber", color: "bg-white" },
        { shadow: "shadow-[4px_4px_0_#9A90CB]", label: "Lavender", color: "bg-white" },
    ]

    return (
        <DocSection id="shadows" title="Shadows">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                Shadows in neobrutalism are hard, offset, and unblurred. They create depth through contrast, not softness.
            </p>

            {/* Shadow Sizes */}
            <div className="space-y-4">
                <h4 className="text-xl font-black">Shadow Offset Sizes</h4>
                <ShowcaseSurface>
                    <InlineWrap>
                        {shadowSizes.map(({ shadow, label }) => (
                            <LabeledItem key={shadow} label={label}>
                                <div className={`w-16 h-16 bg-white border-4 border-black ${shadow} flex items-center justify-center font-bold`}>
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

            {/* Shadow Colors */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Shadow Colors</h4>
                <ShowcaseSurface>
                    <InlineWrap>
                        {shadowColors.map(({ shadow, label, color }) => (
                            <LabeledItem key={shadow} label={label}>
                                <div className={`w-16 h-16 ${color} border-4 border-black ${shadow} flex items-center justify-center font-bold`}>
                                    Aa
                                </div>
                            </LabeledItem>
                        ))}
                    </InlineWrap>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Classic black shadow */
shadow-[4px_4px_0_#000]

/* Brand color shadows */
shadow-[4px_4px_0_#FE5BD6]  /* Pink */
shadow-[4px_4px_0_#FEC437]  /* Amber */
shadow-[4px_4px_0_#9A90CB]  /* Lavender */`}
                />
            </div>

            {/* Hover Effects */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Interactive Shadows</h4>
                <p className="text-muted-foreground font-medium">The classic neobrutalist hover: shadow disappears while element shifts into its place.</p>
                <ShowcaseSurface>
                    <div className="flex gap-8 items-center justify-center">
                        <NeoButton className="hover:translate-x-[4px] hover:-translate-y-[4px] hover:shadow-none">
                            Hover Me
                        </NeoButton>
                        <NeoButton variant="outline" className="hover:shadow-[4px_4px_0_#000]">
                            Hover Me
                        </NeoButton>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* The classic neobrutalist hover */
className="transition-all hover:translate-x-[4px] hover:-translate-y-[4px] hover:shadow-none"

/* Or the reverse - adds shadow on hover */
className="transition-all hover:shadow-[4px_4px_0_#000]"`}
                />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Section: Colors
// ============================================================================

function ColorsSection() {
    const colors = [
        { name: "Pink", variable: "--color-pink", hex: "#FE5BD6", bg: "bg-[#FE5BD6]" },
        { name: "Amber", variable: "--color-amber", hex: "#FEC437", bg: "bg-[#FEC437]" },
        { name: "Baby Blue", variable: "--color-baby-blue", hex: "#C9D9F0", bg: "bg-[#C9D9F0]" },
        { name: "Lavender", variable: "--color-lavender", hex: "#9A90CB", bg: "bg-[#9A90CB]" },
    ]

    return (
        <DocSection id="colors" title="Colors">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                Neobrutalism embraces bold, saturated colors. The palette is unapologetic and designed to stand out.
            </p>

            {/* Color Palette */}
            <div className="space-y-4">
                <h4 className="text-xl font-black">Core Palette</h4>
                <ShowcaseSurface>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {colors.map(({ name, variable, hex, bg }) => (
                            <div key={name} className="space-y-2">
                                <div className={`w-full h-20 ${bg} border-4 border-black shadow-[4px_4px_0_#000] rounded-lg`}></div>
                                <div className="space-y-1">
                                    <p className="font-black text-sm">{name}</p>
                                    <code className="text-xs bg-black text-white px-1.5 py-0.5 rounded">{hex}</code>
                                    <code className="text-xs bg-gray-100 border border-gray-300 px-1.5 py-0.5 rounded block">{variable}</code>
                                </div>
                            </div>
                        ))}
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Define in your CSS */
:root {
  --color-pink: #FE5BD6;
  --color-amber: #FEC437;
  --color-baby-blue: #C9D9F0;
  --color-lavender: #9A90CB;
}

/* Use with Tailwind */
className="bg-[--color-pink]"
className="bg-(--color-pink)" /* Tailwind v4 */`}
                />
            </div>

            {/* Color Usage */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Color Usage</h4>
                <ShowcaseSurface>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h5 className="font-black text-lg">Primary Actions</h5>
                            <NeoButton className="w-full">Primary Button</NeoButton>
                            <NeoButton variant="inverter" className="w-full">Inverted Button</NeoButton>
                        </div>
                        <div className="space-y-3">
                            <h5 className="font-black text-lg">Backgrounds</h5>
                            <div className="p-4 rounded-lg border-4 border-black bg-(--color-pink) shadow-[4px_4px_0_#000]">
                                <p className="font-bold">Pink Background</p>
                            </div>
                            <div className="p-4 rounded-lg border-4 border-black bg-(--color-amber) shadow-[4px_4px_0_#000]">
                                <p className="font-bold">Amber Background</p>
                            </div>
                        </div>
                    </div>
                </ShowcaseSurface>
            </div>
        </DocSection>
    )
}

// ============================================================================
// Section: Typography
// ============================================================================

function TypographySection() {
    return (
        <DocSection id="typography" title="Typography">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                Typography in neobrutalism is bold, expressive, and unapologetic. Headers demand attention.
            </p>

            {/* Font Family */}
            <div className="space-y-4">
                <h4 className="text-xl font-black">Font Family: Syne</h4>
                <ShowcaseSurface>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Body Text — Syne</p>
                                <p className="text-2xl font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                            </div>
                            <p className="text-sm text-neutral-600 font-medium">
                                <strong>Syne</strong> is the primary font for body text. Its geometric shapes and bold weights perfectly embody neobrutalism.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Headings — Syne Mono</p>
                                <p className="text-2xl font-black" style={{ fontFamily: 'Syne Mono, monospace' }}>
                                    BRUTAL HEADINGS
                                </p>
                            </div>
                            <p className="text-sm text-neutral-600 font-medium">
                                <strong>Syne Mono</strong> adds an industrial, raw feel to headings. Perfect for that technical neobrutalist edge.
                            </p>
                        </div>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Google Fonts import */
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap" rel="stylesheet">

/* CSS usage */
body {
  font-family: "Syne", sans-serif;
}

h1, h2, h3 {
  font-family: "Syne Mono", monospace;
}`}
                />
            </div>

            {/* Font Weights */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Font Weights</h4>
                <ShowcaseSurface>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[400, 500, 600, 700, 800].map((weight) => (
                            <div key={weight} className="p-3 rounded-lg border-2 border-black bg-white text-center">
                                <p className="text-2xl mb-1" style={{ fontWeight: weight }}>Aa</p>
                                <p className="text-xs font-bold text-neutral-600">{weight}</p>
                            </div>
                        ))}
                    </div>
                </ShowcaseSurface>
            </div>

            {/* Text Sizes */}
            <div className="space-y-4 mt-8">
                <h4 className="text-xl font-black">Text Sizes</h4>
                <ShowcaseSurface>
                    <div className="space-y-4">
                        <p className="text-xs font-bold">text-xs — Extra Small</p>
                        <p className="text-sm font-bold">text-sm — Small</p>
                        <p className="text-base font-bold">text-base — Base</p>
                        <p className="text-lg font-bold">text-lg — Large</p>
                        <p className="text-xl font-bold">text-xl — Extra Large</p>
                        <p className="text-2xl font-black">text-2xl — 2X Large</p>
                        <p className="text-3xl font-black">text-3xl — 3X Large</p>
                        <p className="text-4xl font-black">text-4xl — 4X Large</p>
                        <p className="text-5xl font-black">text-5xl — 5X Large</p>
                    </div>
                </ShowcaseSurface>
            </div>
        </DocSection>
    )
}

// ============================================================================
// Section: Components
// ============================================================================

function ComponentsSection() {
    return (
        <DocSection id="components" title="Core Components">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                These are the essential Neostrap components that embody all neobrutalist principles.
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
                        <NeoButton variant="disabled" disabled>Disabled</NeoButton>
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
                                    The card combines all essential neobrutalist elements: thick borders, offset shadows, and vibrant backgrounds.
                                </p>
                            </NeoCardContent>
                            <NeoCardFooter className="gap-2">
                                <NeoButton>Accept</NeoButton>
                                <NeoButton variant="outline">Cancel</NeoButton>
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

            {/* Tabs */}
            <div className="space-y-4">
                <h4 className="text-xl font-black flex items-center gap-2">
                    <Layers className="size-5" /> Tabs
                </h4>
                <ShowcaseSurface>
                    <div className="w-full max-w-md">
                        <NeoTabs defaultValue="account">
                            <NeoTabsList>
                                <NeoTabsTrigger value="account">Account</NeoTabsTrigger>
                                <NeoTabsTrigger value="password">Password</NeoTabsTrigger>
                                <NeoTabsTrigger value="settings">Settings</NeoTabsTrigger>
                            </NeoTabsList>
                            <NeoTabsContent value="account">
                                <div className="p-4 rounded-lg border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                                    <p className="font-bold">Account Settings</p>
                                    <p className="text-sm">Manage your account preferences here.</p>
                                </div>
                            </NeoTabsContent>
                            <NeoTabsContent value="password">
                                <div className="p-4 rounded-lg border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                                    <p className="font-bold">Password</p>
                                    <p className="text-sm">Change your password here.</p>
                                </div>
                            </NeoTabsContent>
                            <NeoTabsContent value="settings">
                                <div className="p-4 rounded-lg border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                                    <p className="font-bold">Settings</p>
                                    <p className="text-sm">Configure your preferences.</p>
                                </div>
                            </NeoTabsContent>
                        </NeoTabs>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`import { NeoTabs, NeoTabsContent, NeoTabsList, NeoTabsTrigger } from "@/components/ui/NeoTabs"

<NeoTabs defaultValue="account">
    <NeoTabsList>
        <NeoTabsTrigger value="account">Account</NeoTabsTrigger>
        <NeoTabsTrigger value="password">Password</NeoTabsTrigger>
    </NeoTabsList>
    <NeoTabsContent value="account">Content</NeoTabsContent>
</NeoTabs>`}
                />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Section: Interactive States
// ============================================================================

function InteractiveStatesSection() {
    return (
        <DocSection id="interactive-states" title="Interactive States">
            <p className="text-lg text-muted-foreground font-medium mb-8">
                Neobrutalist interfaces are highly interactive. States should be clear, bold, and provide immediate feedback.
            </p>

            {/* Hover States */}
            <div className="space-y-4 mb-12">
                <h4 className="text-xl font-black">Hover States</h4>
                <ShowcaseSurface>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <NeoButton className="hover:bg-(--color-pink)">Color Change</NeoButton>
                        <NeoButton className="hover:translate-x-[4px] hover:-translate-y-[4px] hover:shadow-none">
                            Move + No Shadow
                        </NeoButton>
                        <NeoButton className="hover:shadow-[8px_8px_0_#000]">Add Shadow</NeoButton>
                        <NeoButton className="hover:scale-105">Scale Up</NeoButton>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Hover effects */
hover:bg-(--color-pink)                              /* Background change */
hover:translate-x-[4px] hover:-translate-y-[4px]    /* Move diagonally */
hover:shadow-none                                    /* Remove shadow */
hover:shadow-[8px_8px_0_#000]                       /* Add shadow */
hover:scale-105                                     /* Scale up */`}
                />
            </div>

            {/* Active States */}
            <div className="space-y-4 mb-12">
                <h4 className="text-xl font-black">Active States</h4>
                <ShowcaseSurface>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <NeoButton className="active:translate-x-[2px] active:-translate-y-[2px] active:shadow-[2px_2px_0_#000]">
                            Press Me
                        </NeoButton>
                        <NeoButton className="active:scale-95">Scale Down</NeoButton>
                        <NeoButton className="active:bg-black active:text-white">Invert on Press</NeoButton>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Active/pressed states */
active:translate-x-[2px] active:-translate-y-[2px]     /* Push in */
active:shadow-[2px_2px_0_#000]                        /* Smaller shadow */
active:scale-95                                        /* Shrink */
active:bg-black active:text-white                      /* Invert colors */`}
                />
            </div>

            {/* Focus States */}
            <div className="space-y-4">
                <h4 className="text-xl font-black">Focus States</h4>
                <ShowcaseSurface>
                    <div className="flex flex-col gap-4 items-center">
                        <NeoInput placeholder="Focus me..." className="focus:ring-4 focus:ring-black/20 focus:border-black" />
                        <p className="text-sm font-medium text-neutral-500">Neobrutalist focus uses thick rings with transparency</p>
                    </div>
                </ShowcaseSurface>
                <CodeBlock
                    code={`/* Focus states */
focus:ring-4 focus:ring-black/20    /* Thick ring */
focus:border-black                   /* Darker border */
focus-visible:outline-none           /* Remove default outline */`}
                />
            </div>
        </DocSection>
    )
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
                            The key to neobrutalism is consistency. Pick your border width, shadow offset, and color palette — then apply them uniformly across all components.
                        </p>
                    </div>
                </div>
            </div>
        </DocSection>
    )
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
            <ColorsSection />
            <TypographySection />
            <ComponentsSection />
            <InteractiveStatesSection />
            <BestPracticesSection />
        </div>
    )
}

export default EssentialDocPage

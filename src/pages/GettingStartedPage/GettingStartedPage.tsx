/**
 * @fileoverview Getting Started documentation page for Neostrap UI.
 * Provides introduction, typography, and colors.
 */

// Documentation components
import DocSection from "@/components/docs/DocSection"
import { CodeBlock } from "@/components/CodeDemo"

// UI components
import { Info, Rocket, Zap, Palette, Type } from "lucide-react"

// Constants
import {
    FONT_INSTALL_CODE,
    FONT_CSS_CODE,
    COLOR_PALETTE,
    FONT_WEIGHTS,
} from "./constants"

// ============================================================================
// Section Components
// ============================================================================

/**
 * Introduction section with overview cards.
 */
function IntroductionSection() {
    return (
        <DocSection id="introduction">
            <div className="relative p-8 rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0_#000] overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Rocket size={120} className="rotate-12" />
                </div>

                <div className="relative z-10 space-y-4">
                    <div className="inline-block px-3 py-1 rounded-full border-2 border-black bg-(--color-amber) text-xs font-bold uppercase tracking-wider">
                        Getting Started
                    </div>
                    <h1 className="text-5xl font-black tracking-tight">Introduction</h1>
                    <p className="text-xl font-medium text-slate-700 max-w-2xl leading-relaxed">
                        Neostrap UI is a fearless collection of neobrutalism-styled components built with React and Tailwind CSS, heavily inspired by the flexibility of Shadcn UI.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-xl border-3 border-black bg-(--color-baby-blue) shadow-[4px_4px_0_#000]">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Zap className="size-5" /> What is Neobrutalism?
                    </h3>
                    <p className="text-sm leading-relaxed font-medium">
                        A modern evolution of brutalism that embraces bold, distinctive color palettes, thick black borders,
                        and playful shadows while maintaining modern standards for typography and animation.
                        It's about being fearless and breaking the standard "minimalist" UX rules.
                    </p>
                </div>

                <div className="p-6 rounded-xl border-3 border-black bg-(--color-lavender) shadow-[4px_4px_0_#000]">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Rocket className="size-5" /> Why choose Neostrap?
                    </h3>
                    <p className="text-sm leading-relaxed font-medium">
                        Built for developers who want their applications to stand out. We provide the
                        brutal honesty of neobrutalism combined with the accessibility and performance of
                        modern web components. Perfect for portfolio sites, creative tools, and landing pages.
                    </p>
                </div>
            </div>
        </DocSection>
    )
}

/**
 * Typography section with font examples and installation.
 */
function TypographySection() {
    return (
        <DocSection id="typography">
            <div className="space-y-2 mb-8 mt-8">
                <h2 className="text-4xl font-black underline decoration-4 underline-offset-8 decoration-(--color-amber)">Typography</h2>
                <p className="text-lg text-muted-foreground font-medium">Bold fonts for a bold design system.</p>
            </div>

            <div className="space-y-8">
                {/* Font Preview */}
                <div className="p-8 rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0_#000]">
                    <div className="flex items-center gap-3 mb-6">
                        <Type className="size-8 p-1.5 rounded-lg bg-(--color-amber) border-2 border-black" />
                        <h3 className="text-2xl font-black">Syne Font Family</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border-3 border-black bg-(--color-baby-blue)/50">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">Body Text — Syne</p>
                                <p className="text-2xl font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    The quick brown fox jumps over the lazy dog.
                                </p>
                            </div>
                            <p className="text-sm text-neutral-600 font-medium">
                                <strong>Syne</strong> is used for body text, paragraphs, and general UI elements. Its geometric shapes and bold weights perfectly embody the neobrutalist aesthetic.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl border-3 border-black bg-(--color-lavender)/50">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">Headings — Syne Mono</p>
                                <p className="text-2xl font-black" style={{ fontFamily: 'Syne Mono, monospace' }}>
                                    BRUTAL HEADINGS
                                </p>
                            </div>
                            <p className="text-sm text-neutral-600 font-medium">
                                <strong>Syne Mono</strong> is used for headings and display text. The monospace character adds a raw, industrial feel that's core to neobrutalism.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Font Installation */}
                <div className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] space-y-4">
                    <h4 className="text-lg font-black uppercase">Install Fonts</h4>
                    <p className="text-sm text-neutral-600 font-medium">
                        Add Syne fonts from Google Fonts to your project.
                    </p>
                    <CodeBlock code={FONT_INSTALL_CODE} highlightCode={true} />
                </div>

                {/* Font CSS */}
                <div className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] space-y-4">
                    <h4 className="text-lg font-black uppercase">Configure CSS</h4>
                    <p className="text-sm text-neutral-600 font-medium">
                        Set the font families in your global styles.
                    </p>
                    <CodeBlock code={FONT_CSS_CODE} highlightCode={true} />
                </div>

                {/* Font Weights */}
                <div className="p-6 rounded-xl border-3 border-black bg-slate-50 shadow-[4px_4px_0_#000]">
                    <h4 className="text-lg font-black uppercase mb-4 flex items-center gap-2">
                        <Info className="size-5" /> Recommended Weights
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {FONT_WEIGHTS.map(({ weight, label }) => (
                            <div key={weight} className="p-3 rounded-lg border-2 border-black bg-white text-center">
                                <p className="text-2xl mb-1" style={{ fontWeight: weight }}>Aa</p>
                                <p className="text-xs font-bold text-neutral-600">{weight} — {label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DocSection>
    )
}

/**
 * Colors section with palette and usage examples.
 */
function ColorsSection() {
    return (
        <DocSection id="colors">
            <div className="space-y-2 mb-8 mt-8">
                <h2 className="text-4xl font-black underline decoration-4 underline-offset-8 decoration-(--color-lavender)">Colors</h2>
                <p className="text-lg text-muted-foreground font-medium">A vibrant palette that demands attention.</p>
            </div>

            <div className="space-y-8">
                {/* Color Philosophy */}
                <div className="p-8 rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0_#000]">
                    <div className="flex items-center gap-3 mb-6">
                        <Palette className="size-8 p-1.5 rounded-lg bg-(--color-pink) border-2 border-black" />
                        <h3 className="text-2xl font-black">Color Philosophy</h3>
                    </div>
                    <p className="text-base font-medium text-neutral-700 max-w-3xl leading-relaxed">
                        Neobrutalism rejects the muted, safe color palettes of modern minimalism. Our colors are <strong>bold</strong>, <strong>saturated</strong>, and <strong>unapologetic</strong>. Each color serves a purpose while creating visual tension that makes interfaces memorable.
                    </p>
                </div>

                {/* Color Palette Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {COLOR_PALETTE.map((color) => (
                        <div
                            key={color.name}
                            className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] overflow-hidden"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="size-20 rounded-xl border-3 border-black shadow-[3px_3px_0_#000] shrink-0"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="flex-1 space-y-2">
                                    <h4 className="text-xl font-black">{color.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <code className="px-2 py-1 bg-black text-white text-xs font-mono rounded">
                                            {color.hex}
                                        </code>
                                        <code className="px-2 py-1 bg-neutral-100 border border-neutral-300 text-xs font-mono rounded">
                                            var({color.variable})
                                        </code>
                                    </div>
                                    <p className="text-sm text-neutral-600 font-medium">{color.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Color Usage Examples */}
                <div className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] space-y-4">
                    <h4 className="text-lg font-black uppercase">Usage in CSS</h4>
                    <CodeBlock
                        code={`:root {
  --color-pink: #FE5BD6;
  --color-amber: #FEC437;
  --color-baby-blue: #C9D9F0;
  --color-lavender: #9A90CB;
}

/* Use with CSS variables */
.my-element {
  background-color: var(--color-pink);
}

/* Or use Tailwind classes */
<div class="bg-(--color-amber)">...</div>`}
                        highlightCode={true}
                    />
                </div>

                {/* Color Combinations */}
                <div className="p-6 rounded-xl border-3 border-black bg-slate-50 shadow-[4px_4px_0_#000]">
                    <h4 className="text-lg font-black uppercase mb-4">Recommended Combinations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl border-3 border-black bg-(--color-pink) shadow-[3px_3px_0_#000]">
                            <div className="p-3 rounded-lg border-2 border-black bg-(--color-amber) text-center font-bold">
                                Pink + Amber
                            </div>
                            <p className="text-xs font-bold mt-2 text-center">High energy CTAs</p>
                        </div>
                        <div className="p-4 rounded-xl border-3 border-black bg-(--color-baby-blue) shadow-[3px_3px_0_#000]">
                            <div className="p-3 rounded-lg border-2 border-black bg-(--color-lavender) text-center font-bold">
                                Blue + Lavender
                            </div>
                            <p className="text-xs font-bold mt-2 text-center">Calm informational</p>
                        </div>
                        <div className="p-4 rounded-xl border-3 border-black bg-white shadow-[3px_3px_0_#000]">
                            <div className="p-3 rounded-lg border-2 border-black bg-(--color-pink) text-center font-bold">
                                White + Pink
                            </div>
                            <p className="text-xs font-bold mt-2 text-center">Clean with pop</p>
                        </div>
                    </div>
                </div>

                {/* Black is Essential */}
                <div className="flex gap-4 p-6 rounded-xl border-3 border-black bg-black text-white shadow-[4px_4px_0_#FEC437]">
                    <Info className="size-6 shrink-0 text-(--color-amber)" />
                    <div className="space-y-2">
                        <p className="font-black text-lg">Black is Essential</p>
                        <p className="text-sm font-medium text-neutral-300 leading-relaxed">
                            In neobrutalism, black borders and shadows are non-negotiable. They create the sharp, defined edges that give components their distinctive "sticker" or "cutout" appearance. Always use <code className="px-1.5 py-0.5 bg-neutral-800 rounded text-xs">border-black</code> and hard shadows like <code className="px-1.5 py-0.5 bg-neutral-800 rounded text-xs">shadow-[4px_4px_0_#000]</code>.
                        </p>
                    </div>
                </div>
            </div>
        </DocSection>
    )
}

/**
 * Getting Started documentation page.
 *
 * Provides comprehensive onboarding including:
 * - Introduction to Neostrap UI and neobrutalism
 * - Typography guidelines with Syne font family
 * - Color palette and usage
 */
function GettingStartedPage() {
    return (
        <div className="flex flex-col gap-12 pb-20">
            <IntroductionSection />
            <TypographySection />
            <ColorsSection />
        </div>
    )
}

export default GettingStartedPage

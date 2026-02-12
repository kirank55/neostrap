/**
 * @fileoverview Installation documentation page for Neostrap UI.
 * Provides step-by-step installation instructions.
 */

// Documentation components
import DocSection from "@/components/docs/DocSection"
import { CodeBlock } from "@/components/CodeDemo"

// UI components
import { Info, Wrench, Copy, Terminal, ExternalLink } from "lucide-react"
import { NeoButton } from "@/components/ui/NeoButton"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/NeoDialog"

// Constants
import {
    INDEX_CSS_CONTENT,
} from "../GettingStartedPage/constants"

// ============================================================================
// Section Components
// ============================================================================

/**
 * Installation section with step-by-step guide.
 */
function InstallationSection() {
    return (
        <DocSection id="installation">
            <div className="space-y-2 mb-8 mt-8">
                <h2 className="text-4xl font-black underline decoration-4 underline-offset-8 decoration-(--color-pink)">Installation</h2>
                <p className="text-lg text-muted-foreground font-medium">Setup your neobrutalist workspace in minutes.</p>
            </div>

            <div className="space-y-12">
                {/* Step 1 */}
                <div className="group relative pl-12">
                    <div className="absolute left-0 top-0 size-10 rounded-full border-3 border-black bg-white flex items-center justify-center font-black text-xl shadow-[2px_2px_0_#000] z-10 group-hover:bg-(--color-amber) transition-colors">
                        1
                    </div>
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 border-l-2 border-dashed border-black/30"></div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black">Initialize Shadcn UI</h3>
                        <p className="text-base text-muted-foreground font-medium">
                            Most Neostrap components are built on top of Shadcn UI foundations. You'll need an active Shadcn project to get started.
                        </p>

                        <NeoButton asChild variant="brutal" className="bg-white hover:bg-(--color-baby-blue)">
                            <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                Visit Shadcn Docs <ExternalLink className="size-4" />
                            </a>
                        </NeoButton>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="group relative pl-12">
                    <div className="absolute left-0 top-0 size-10 rounded-full border-3 border-black bg-white flex items-center justify-center font-black text-xl shadow-[2px_2px_0_#000] z-10 group-hover:bg-(--color-pink) transition-colors">
                        2
                    </div>
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 border-l-2 border-dashed border-black/30"></div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-black">Global Styling</h3>
                        <p className="text-base text-muted-foreground font-medium">
                            To achieve the signature Neostrap look, you need our specific CSS variables and reset styles.
                        </p>
                        <div className="p-4 rounded-lg bg-black text-white border-2 border-black font-mono text-sm shadow-[4px_4px_0_#000]">
                            Replace contents of your
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-(--color-amber) font-bold hover:underline cursor-pointer ml-1">
                                        globals.css
                                    </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
                                    <DialogHeader>
                                        <DialogTitle>globals.css</DialogTitle>
                                        <DialogDescription>
                                            Copy and paste this into your global CSS file to enable neobrutalism styling.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="mt-4 flex-1 overflow-auto">
                                        <CodeBlock code={INDEX_CSS_CONTENT} highlightCode={true} />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="group relative pl-12">
                    <div className="absolute left-0 top-0 size-10 rounded-full border-3 border-black bg-white flex items-center justify-center font-black text-xl shadow-[2px_2px_0_#000] z-10 group-hover:bg-(--color-baby-blue) transition-colors">
                        3
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-black">Install Components</h3>

                        {/* CLI Method */}
                        <div className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] space-y-4">
                            <div className="flex items-center gap-2">
                                <Terminal className="size-6 p-1 rounded bg-black text-white" />
                                <h4 className="text-lg font-black uppercase">Via Shadcn CLI</h4>
                            </div>
                            <p className="text-sm text-neutral-600 font-medium">
                                The fastest way. Use our registry URL to add components directly to your project.
                            </p>
                            <CodeBlock
                                code="npx shadcn@latest add https://neostrapui.pages.dev/r/neobutton.json"
                                highlightCode={false}
                            />
                        </div>

                        {/* Manual Method */}
                        <div className="p-6 rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0_#000] space-y-4">
                            <div className="flex items-center gap-2">
                                <Copy className="size-6 p-1 rounded bg-(--color-lavender) text-black" />
                                <h4 className="text-lg font-black uppercase">Manual Installation</h4>
                            </div>
                            <div className="space-y-4 text-sm font-medium leading-relaxed">
                                <p>
                                    1. Navigate to the component documentation page.
                                </p>
                                <p>
                                    2. Use the provided Shadcn base component link to install the dependency.
                                </p>
                                <p>
                                    3. Copy the Neostrap component code into your <code className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-bold font-mono">components/ui/</code> directory.
                                </p>
                            </div>

                            <div className="flex gap-4 p-4 rounded-xl border-3 border-black bg-(--color-baby-blue) shadow-[4px_4px_0_#000]">
                                <Info className="size-6 text-black shrink-0" />
                                <p className="text-sm font-bold leading-snug">
                                    Remember: Neostrap components often include custom variants that differ significantly from default Shadcn styles.
                                </p>
                            </div>
                        </div>

                        {/* Other Components */}
                        <div className="p-6 rounded-xl border-3 border-black bg-slate-50 shadow-[4px_4px_0_#000] flex items-center justify-between gap-4">
                            <div className="space-y-1">
                                <h4 className="text-lg font-black uppercase flex items-center gap-2"><Wrench className="size-5" /> Other Components</h4>
                                <p className="text-xs text-neutral-600 font-bold">No CLI link available? Just copy the source code directly from the component page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * Installation documentation page.
 *
 * Provides comprehensive installation instructions including:
 * - Initializing Shadcn UI
 * - Global styling setup
 * - Component installation methods
 */
function InstallationPage() {
    return (
        <div className="flex flex-col gap-12 pb-20">
            <InstallationSection />
        </div>
    )
}

export default InstallationPage

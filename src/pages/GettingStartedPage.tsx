import DocSection from "@/components/docs/DocSection"
import { CodeBlock } from "@/components/CodeDemo"
import { TriangleAlert, Info, Rocket, Wrench, Copy, Terminal, ExternalLink, Zap } from "lucide-react"
import { NeoButton } from "@/components/ui/NeoButton"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/NeoDialog"

const indexCssContent = `@import "tailwindcss";
@import "tw-animate-css";

:root {
  --color-pink: #FE5BD6;
  --color-amber: #FEC437;
  --color-baby-blue: #C9D9F0;
  --color-lavender: #9A90CB;

  --color-bg: var(--color-pink);
  --color-text: #000;

  --primary-bg: linear-gradient(90deg, #fff 0%, var(--color-pink) 100%);

  --secondary: var(--color-amber);
  --accent: var(--color-pink);
  --neutral: var(--color-baby-blue);

  /* Sugar High syntax highlighting theme */
  --sh-class: #4d9375;
  --sh-identifier: #e0def4;
  --sh-sign: #8b949e;
  --sh-string: #9ece6a;
  --sh-keyword: #bb9af7;
  --sh-comment: #6e7681;
  --sh-jsxliterals: #f9826c;
  --sh-property: #7dcfff;
  --sh-entity: #7aa2f7;
}

body {
  background-color: var(--color-bg);
  background: var(--primary-bg);
}

header {
  background-color: var(--color-amber);
}

aside {
  background: rgb(166 250 255 / 1);
}

/* Accordion animations */
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}

/* Marquee animations */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}

/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50% { transform: translateY(-20px) rotate(45deg); }
}

/* Cursor blink animation */
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Fade in animation */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@theme {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
  --animate-marquee: marquee 30s linear infinite;
  --animate-marquee-reverse: marquee-reverse 30s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-blink: blink 1s step-end infinite;
  --animate-fade-in: fade-in 0.6s ease-out forwards;
}`;

function GettingStartedPage() {
    return (
        <div className="flex flex-col gap-12 pb-20">
            {/* Introduction Section */}
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

            {/* Installation Section */}
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
                                            <CodeBlock code={indexCssContent} highlightCode={true} />
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
                                    The fastest way. Use our private registry URL to add components directly to your project.
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
        </div>
    )
}

export default GettingStartedPage


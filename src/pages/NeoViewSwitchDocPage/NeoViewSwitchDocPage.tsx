/**
 * @fileoverview Documentation page for the NeoViewSwitch component.
 */

import { useState } from "react"
import { motion } from "framer-motion"
import { NeoViewSwitch } from "@/components/ui/NeoViewSwitch"
import { NeoCard, NeoCardHeader, NeoCardTitle, NeoCardDescription, NeoCardContent } from "@/components/ui/NeoCard"

import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import {
    ShowcaseSurface,
    InlineWrap,
    LabeledItem,
} from "@/components/docs/Showcase"
import {
    InstallationTabs,
    InstallationStep,
    InlineCode,
} from "@/components/docs/InstallationComponents"

import {
    SWITCH_PROPS,
    SWITCH_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    SWITCH_COMPONENT_CODE,
    UTILS_CODE,
    VARIANT_OPTIONS,
    SIZE_OPTIONS,
} from "./constants"

// ============================================================================
// Section Components
// ============================================================================

function VariantsSection() {
    const [view, setView] = useState<"grid" | "list">("grid")
    
    return (
        <DocSection id="variants" title="Variants">
            <ShowcaseSurface>
                <InlineWrap>
                    {VARIANT_OPTIONS.map(({ variant, label }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoViewSwitch
                                value={view}
                                onValueChange={setView}
                                variant={variant as any}
                            />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

function SizesSection() {
    const [view, setView] = useState<"grid" | "list">("grid")
    
    return (
        <DocSection id="sizes" title="Sizes">
            <ShowcaseSurface>
                <InlineWrap>
                    {SIZE_OPTIONS.map(({ size, label }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoViewSwitch
                                value={view}
                                onValueChange={setView}
                                size={size as any}
                            />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

function PropsSection() {
    return (
        <DocSection id="props" title="Props">
            <div className="py-4">
                <PropsTable props={SWITCH_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

function NeoViewSwitchDocPage() {
    const [previewView, setPreviewView] = useState<"grid" | "list">("grid")

    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="View Switch"
                    title="Neostrap UI View Switch"
                    description="Neo-brutalist view toggle component with smooth layout transitions using Framer Motion."
                />
                <Codepreview
                    preview={
                        <div className="flex flex-col items-center gap-6 p-4">
                            <NeoViewSwitch 
                                value={previewView} 
                                onValueChange={setPreviewView} 
                            />
                            
                            <NeoCard className="w-full max-w-md transition-all duration-300">
                                <NeoCardHeader>
                                    <NeoCardTitle>{previewView === "grid" ? "Grid View" : "List View"}</NeoCardTitle>
                                    <NeoCardDescription>
                                        Currently displaying items in {previewView} layout
                                    </NeoCardDescription>
                                </NeoCardHeader>
                                <NeoCardContent>
                                    <motion.div 
                                        layout 
                                        className={previewView === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-2"}
                                    >
                                        {[1, 2, 3, 4].map((i) => (
                                            <motion.div
                                                layout
                                                key={i}
                                                className={
                                                    previewView === "grid"
                                                        ? "aspect-square bg-black/5 rounded-lg border-2 border-black/10 flex items-center justify-center font-bold"
                                                        : "h-12 bg-black/5 rounded-lg border-2 border-black/10 flex items-center px-4 font-bold"
                                                }
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ 
                                                    layout: { duration: 0.3, type: "spring", bounce: 0.2 },
                                                    opacity: { duration: 0.2 }
                                                }}
                                            >
                                                Item {i}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </NeoCardContent>
                            </NeoCard>
                        </div>
                    }
                    code={SWITCH_USAGE_CODE}
                />
            </DocSection>

            <InstallationTabs cliCode={INSTALL_CLI_CODE}>
                <div className="space-y-4">
                    <InstallationStep
                        step={1}
                        title="Copy the component code"
                        description={
                            <>
                                Create a new file at{" "}
                                <InlineCode>src/components/ui/NeoViewSwitch.tsx</InlineCode> and copy
                                the following code:
                            </>
                        }
                    >
                        <CodeBlock code={SWITCH_COMPONENT_CODE} />
                    </InstallationStep>

                    <InstallationStep
                        step={2}
                        title="Install dependencies"
                        description="Make sure you have the required dependencies installed:"
                    >
                        <CodeBlock code={INSTALL_DEPENDENCIES_CODE} highlightCode={false} />
                    </InstallationStep>

                    <InstallationStep
                        step={3}
                        title="Add the utility function"
                        description={
                            <>
                                Ensure you have the <InlineCode>cn</InlineCode> utility at{" "}
                                <InlineCode>src/lib/utils.ts</InlineCode>:
                            </>
                        }
                    >
                        <CodeBlock code={UTILS_CODE} />
                    </InstallationStep>

                    <InstallationStep
                        step={4}
                        title="Usage"
                        description="You can now import and use the NeoViewSwitch component:"
                    >
                        <CodeBlock code={SWITCH_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <SizesSection />
            <PropsSection />
        </>
    )
}

export default NeoViewSwitchDocPage

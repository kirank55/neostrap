/**
 * @fileoverview Documentation page for the NeoViewSwitch component.
 */

import { useState } from "react"
import { NeoViewSwitch } from "@/components/ui/NeoViewSwitch"
import { NeoButton } from "@/components/ui/NeoButton"

import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
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
} from "./constants"

// ============================================================================
// Section Components
// ============================================================================

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

const DEMO_ITEMS = [
    {
        id: 1,
        title: "Retro Computer",
        description: "A classic workstation from the 80s.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500",
        actionContent: "View Details",
    },
    {
        id: 2,
        title: "Synthwave City",
        description: "Neon lights and futuristic vibes.",
        imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=500",
        actionContent: "Explore",
    },
    {
        id: 3,
        title: "Cyberpunk Street",
        description: "High tech, low life aesthetic.",
        imageUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=500",
        actionContent: "Learn More",
    },
    {
        id: 4,
        title: "Digital Abstract",
        description: "Generated art patterns.",
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=500",
        actionContent: "Discover",
    },
]

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
                        <div className="w-3xl">
                            <NeoViewSwitch 
                                value={previewView} 
                                onValueChange={setPreviewView}
                                items={DEMO_ITEMS}
                                title={previewView === "grid" ? "Grid View" : "List View"}
                                description={`Currently displaying items in ${previewView} layout`}
                                renderAction={(item, view) => (
                                    <NeoButton className={view === 'grid' ? "w-full" : ""}>
                                        {item.actionContent}
                                    </NeoButton>
                                )}
                            />
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

            <PropsSection />
        </>
    )
}

export default NeoViewSwitchDocPage

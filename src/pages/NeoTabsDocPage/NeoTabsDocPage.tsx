/**
 * @fileoverview Documentation page for the NeoTabs component.
 */

import { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent, NeoTabsCarousel } from "@/components/ui/NeoTabs"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import { ShowcaseSurface } from "@/components/docs/Showcase"
import {
    InstallationTabs,
    InstallationStep,
    InlineCode,
} from "@/components/docs/InstallationComponents"

import {
    TABS_PROPS,
    TABS_TRIGGER_PROPS,
    TABS_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    TABS_COMPONENT_CODE,
    UTILS_CODE,
} from "./constants"

// ============================================================================
// Helper Components
// ============================================================================

function TabsDemoRender() {
    return (
        <NeoTabs defaultValue="tab1" className="w-full max-w-md">
            <NeoTabsList>
                <NeoTabsTrigger value="tab1">Overview</NeoTabsTrigger>
                <NeoTabsTrigger value="tab2">Features</NeoTabsTrigger>
                <NeoTabsTrigger value="tab3">Settings</NeoTabsTrigger>
            </NeoTabsList>
            <NeoTabsCarousel>
                <NeoTabsContent value="tab1">
                    <h3 className="font-bold text-lg mb-2">Overview</h3>
                    <p className="text-black/70">Welcome to NeoStrap Tabs. Click on other tabs to explore.</p>
                </NeoTabsContent>
                <NeoTabsContent value="tab2">
                    <h3 className="font-bold text-lg mb-2">Features</h3>
                    <p className="text-black/70">Neo-brutalist styling with bold shadows and clean design.</p>
                </NeoTabsContent>
                <NeoTabsContent value="tab3">
                    <h3 className="font-bold text-lg mb-2">Settings</h3>
                    <p className="text-black/70">Configure your preferences here.</p>
                </NeoTabsContent>
            </NeoTabsCarousel>
        </NeoTabs>
    )
}

// ============================================================================
// Section Components
// ============================================================================

function ManualInstallationGuide() {
    return (
        <>
            <InstallationStep
                step={1}
                title="Copy the component code"
                description={
                    <>
                        Create a new file at{" "}
                        <InlineCode>src/components/ui/NeoTabs.tsx</InlineCode> and copy
                        the following code:
                    </>
                }
            >
                <CodeBlock code={TABS_COMPONENT_CODE} />
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
                description="You can now import and use the NeoTabs component:"
            >
                <CodeBlock code={TABS_USAGE_CODE} />
            </InstallationStep>
        </>
    )
}

function UsageExamplesSection() {
    return (
        <DocSection id="usage" title="Usage Examples">
            <ShowcaseSurface>
                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold mb-4">Default Tabs</h3>
                        <NeoTabs defaultValue="first" className="w-full">
                            <NeoTabsList className="border-0">
                                <NeoTabsTrigger value="first">First</NeoTabsTrigger>
                                <NeoTabsTrigger value="second">Second</NeoTabsTrigger>
                                <NeoTabsTrigger value="third">Third</NeoTabsTrigger>
                            </NeoTabsList>
                            <NeoTabsCarousel>
                                <NeoTabsContent value="first">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-baby-blue)">
                                        First tab content
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="second">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-lavender)">
                                        Second tab content
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="third">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-amber)">
                                        Third tab content
                                    </div>
                                </NeoTabsContent>
                            </NeoTabsCarousel>
                        </NeoTabs>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">With Disabled Tab</h3>
                        <NeoTabs defaultValue="enabled" className="w-full">
                            <NeoTabsList className="border-0">
                                <NeoTabsTrigger value="enabled">Enabled</NeoTabsTrigger>
                                <NeoTabsTrigger value="disabled" disabled>Disabled</NeoTabsTrigger>
                                <NeoTabsTrigger value="another">Another</NeoTabsTrigger>
                            </NeoTabsList>
                            <NeoTabsCarousel>
                                <NeoTabsContent value="enabled">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_#000]">
                                        This tab is enabled and interactive.
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="another">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_#000]">
                                        Another enabled tab.
                                    </div>
                                </NeoTabsContent>
                            </NeoTabsCarousel>
                        </NeoTabs>
                    </div>
                </div>
            </ShowcaseSurface>
        </DocSection>
    )
}

function TabsPropsSection() {
    return (
        <DocSection id="props" title="NeoTabs Props">
            <div className="py-4">
                <PropsTable props={TABS_PROPS} />
            </div>
        </DocSection>
    )
}

function TabsTriggerPropsSection() {
    return (
        <DocSection id="trigger-props" title="NeoTabsTrigger Props">
            <div className="py-4">
                <PropsTable props={TABS_TRIGGER_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * NeoTabs documentation page.
 *
 * Provides comprehensive documentation including:
 * - Overview with live preview
 * - Installation instructions (CLI & Manual)
 * - Usage examples
 * - Complete props reference
 */
function NeoTabsDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Tabs"
                    title="Neostrap UI Tabs"
                    description="A set of layered sections of content that display one panel at a time."
                />
                <Codepreview
                    preview={<TabsDemoRender />}
                    code={TABS_USAGE_CODE}
                />
            </DocSection>

            <InstallationTabs cliCode={INSTALL_CLI_CODE}>
                <ManualInstallationGuide />
            </InstallationTabs>

            <UsageExamplesSection />
            <TabsPropsSection />
            <TabsTriggerPropsSection />
        </>
    )
}

export default NeoTabsDocPage

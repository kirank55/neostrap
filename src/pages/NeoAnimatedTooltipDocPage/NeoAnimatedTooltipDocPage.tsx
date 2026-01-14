/**
 * @fileoverview Documentation page for the NeoAnimatedTooltip component.
 */

import { NeoAnimatedTooltip } from "@/components/ui/NeoAnimatedTooltip"
import { NeoButton } from "@/components/ui/NeoButton"
import {
    NeoCard,
    NeoCardHeader,
    NeoCardTitle,
    NeoCardDescription,
    NeoCardContent,
    NeoCardFooter,
} from "@/components/ui/NeoCard"

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
    TOOLTIP_PROPS,
    TOOLTIP_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    TOOLTIP_COMPONENT_CODE,
    UTILS_CODE,
    VARIANT_OPTIONS,
} from "./constants"

// ============================================================================
// Section Components
// ============================================================================

function VariantsSection() {
    return (
        <DocSection id="variants" title="Variants">
            <ShowcaseSurface>
                <InlineWrap>
                    {VARIANT_OPTIONS.map(({ variant, label }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoAnimatedTooltip
                                content={`${label} tooltip`}
                                variant={variant as any}
                            >
                                <NeoButton variant={variant as any}>
                                    {label}
                                </NeoButton>
                            </NeoAnimatedTooltip>
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
                <PropsTable props={TOOLTIP_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

function NeoAnimatedTooltipDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Tooltip"
                    title="Neostrap UI Animated Tooltip"
                    description="Neo-brutalist animated tooltip with smooth animations on hover. Built on Radix UI for accessibility."
                />
                <Codepreview
                    preview={
                        <>
                            <div className="flex flex-wrap gap-6 justify-center">
                                <NeoCard variant="brutal" className="max-w-lg">
                                    <NeoCardHeader>
                                        <NeoCardTitle>Brutal Tooltip</NeoCardTitle>
                                        <NeoCardDescription>
                                            Hover over the icons for more info
                                        </NeoCardDescription>
                                    </NeoCardHeader>
                                    <NeoCardContent>
                                        <div className="flex gap-4">
                                            <NeoAnimatedTooltip content="Total downloads this month">
                                                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg border-2 border-black cursor-help">
                                                    <span className="text-2xl font-bold">12.5k</span>
                                                    <span className="text-xs text-black/60">Downloads</span>
                                                </div>
                                            </NeoAnimatedTooltip>
                                            <NeoAnimatedTooltip content="GitHub stars count">
                                                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg border-2 border-black cursor-help">
                                                    <span className="text-2xl font-bold">3.2k</span>
                                                    <span className="text-xs text-black/60">Stars</span>
                                                </div>
                                            </NeoAnimatedTooltip>
                                            <NeoAnimatedTooltip content="Active contributors">
                                                <div className="flex flex-col items-center p-3 bg-white/50 rounded-lg border-2 border-black cursor-help">
                                                    <span className="text-2xl font-bold">42</span>
                                                    <span className="text-xs text-black/60">Contributors</span>
                                                </div>
                                            </NeoAnimatedTooltip>
                                        </div>
                                    </NeoCardContent>
                                    <NeoCardFooter>
                                        <NeoAnimatedTooltip content="View full analytics dashboard">
                                            <NeoButton variant="brutal" className="w-full">
                                                View Details →
                                            </NeoButton>
                                        </NeoAnimatedTooltip>
                                    </NeoCardFooter>
                                </NeoCard>

                                <NeoCard variant="outline" className="max-w-xs">
                                    <NeoCardHeader>
                                        <NeoCardTitle>Outline Tooltip</NeoCardTitle>
                                        <NeoCardDescription>
                                            Common tasks at your fingertips
                                        </NeoCardDescription>
                                    </NeoCardHeader>
                                    <NeoCardContent>
                                        <div className="flex flex-col gap-2">
                                            <NeoAnimatedTooltip content="Create a new project from template" variant="outline">
                                                <NeoButton variant="outline" className="w-full justify-start">
                                                    📁 New Project
                                                </NeoButton>
                                            </NeoAnimatedTooltip>
                                            <NeoAnimatedTooltip content="Import existing repository" variant="outline">
                                                <NeoButton variant="outline" className="w-full justify-start">
                                                    📥 Import Repo
                                                </NeoButton>
                                            </NeoAnimatedTooltip>
                                            <NeoAnimatedTooltip content="Access documentation and guides" variant="outline">
                                                <NeoButton variant="outline" className="w-full justify-start">
                                                    📚 Documentation
                                                </NeoButton>
                                            </NeoAnimatedTooltip>
                                        </div>
                                    </NeoCardContent>
                                </NeoCard>
                            </div>
                        </>
                    }
                    code={TOOLTIP_USAGE_CODE}
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
                                <InlineCode>src/components/ui/NeoAnimatedTooltip.tsx</InlineCode> and copy
                                the following code:
                            </>
                        }
                    >
                        <CodeBlock code={TOOLTIP_COMPONENT_CODE} />
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
                        description="You can now import and use the NeoAnimatedTooltip component:"
                    >
                        <CodeBlock code={TOOLTIP_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <PropsSection />
        </>
    )
}

export default NeoAnimatedTooltipDocPage

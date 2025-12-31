/**
 * @fileoverview Documentation page for the NeoSwitch component.
 */

import { NeoSwitch } from "@/components/ui/NeoSwitch"

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
    return (
        <DocSection id="variants" title="Variants">
            <ShowcaseSurface>
                <InlineWrap>
                    {VARIANT_OPTIONS.map(({ variant, label, disabled = false }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoSwitch variant={variant as any} disabled={disabled} />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

function SizesSection() {
    return (
        <DocSection id="sizes" title="Sizes">
            <ShowcaseSurface>
                <InlineWrap alignEnd>
                    {SIZE_OPTIONS.map(({ size, label }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoSwitch size={size as any} />
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

function NeoSwitchDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Switch"
                    title="Neostrap UI Switch"
                    description="Neo-brutalist primary switch plus all variants and sizes."
                />
                <Codepreview
                    preview={<NeoSwitch>Punch Me</NeoSwitch>}
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
                                <InlineCode>src/components/ui/NeoSwitch.tsx</InlineCode> and copy
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
                        description="You can now import and use the NeoSwitch component:"
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

export default NeoSwitchDocPage

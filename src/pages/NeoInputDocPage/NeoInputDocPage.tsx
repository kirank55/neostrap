/**
 * @fileoverview Documentation page for the NeoInput component.
 */

import { NeoInput } from "@/components/ui/NeoInput"

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
    INPUT_PROPS,
    INPUT_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    INPUT_COMPONENT_CODE,
    UTILS_CODE,
    VARIANT_OPTIONS,
    SIZE_OPTIONS,
    TYPE_OPTIONS,
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
                            <NeoInput
                                variant={variant as any}
                                disabled={disabled}
                                placeholder={`${label} input...`}
                            />
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
                            <NeoInput
                                size={size as any}
                                placeholder={`${label} size...`}
                            />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

function TypesSection() {
    return (
        <DocSection id="types" title="Input Types">
            <ShowcaseSurface>
                <InlineWrap>
                    {TYPE_OPTIONS.map(({ type, label, placeholder }) => (
                        <LabeledItem key={label} label={label}>
                            <NeoInput
                                type={type as any}
                                placeholder={placeholder}
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
                <PropsTable props={INPUT_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

function NeoInputDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Input"
                    title="Neostrap UI Input"
                    description="Neo-brutalist input field plus all variants, sizes, and types."
                />
                <Codepreview
                    preview={<NeoInput placeholder="Enter text..." className="max-w-xs" />}
                    code={INPUT_USAGE_CODE}
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
                                <InlineCode>src/components/ui/NeoInput.tsx</InlineCode> and copy
                                the following code:
                            </>
                        }
                    >
                        <CodeBlock code={INPUT_COMPONENT_CODE} />
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
                        description="You can now import and use the NeoInput component:"
                    >
                        <CodeBlock code={INPUT_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <SizesSection />
            <TypesSection />
            <PropsSection />
        </>
    )
}

export default NeoInputDocPage

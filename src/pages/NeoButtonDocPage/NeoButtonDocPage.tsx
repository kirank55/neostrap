/**
 * @fileoverview Documentation page for the NeoButton component.
 * Displays overview, installation instructions, variants, sizes, and props.
 */

// External dependencies
import { NeoButton, variantOptions, sizeOptions } from "@/components/ui/NeoButton"

// Documentation components
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import { ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import {
    InstallationTabs,
    InstallationStep,
    InlineCode,
} from "@/components/docs/InstallationComponents"

// Constants and code snippets
import {
    BUTTON_PROPS,
    BUTTON_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    BUTTON_COMPONENT_CODE,
    UTILS_CODE,
} from "./constants"

// ============================================================================
// Sub-components
// ============================================================================

/**
 * Step-by-step manual installation guide.
 */
function ManualInstallationGuide() {
    return (
        <>
            {/* Step 1: Component Code */}
            <InstallationStep
                step={1}
                title="Copy the component code"
                description={
                    <>
                        Create a new file at{" "}
                        <InlineCode>src/components/ui/NeoButton.tsx</InlineCode> and copy
                        the following code:
                    </>
                }
            >
                <CodeBlock code={BUTTON_COMPONENT_CODE} />
            </InstallationStep>

            {/* Step 2: Dependencies */}
            <InstallationStep
                step={2}
                title="Install dependencies"
                description="Make sure you have the required dependencies installed:"
            >
                <CodeBlock code={INSTALL_DEPENDENCIES_CODE} highlightCode={false} />
            </InstallationStep>

            {/* Step 3: Utility Function */}
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

            {/* Step 4: Usage */}
            <InstallationStep
                step={4}
                title="Usage"
                description="You can now import and use the NeoButton component:"
            >
                <CodeBlock code={BUTTON_USAGE_CODE} />
            </InstallationStep>
        </>
    )
}

/**
 * Variants showcase section.
 */
function VariantsSection() {
    return (
        <DocSection id="variants" title="Variants">
            <ShowcaseSurface>
                <InlineWrap>
                    {variantOptions.map(({ variant, label, disabled = false }) => (
                        <NeoButton key={variant} variant={variant} disabled={disabled}>
                            {label}
                        </NeoButton>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Sizes showcase section.
 */
function SizesSection() {
    return (
        <DocSection id="sizes" title="Sizes">
            <ShowcaseSurface>
                <InlineWrap>
                    {sizeOptions.map(({ size, label }) => (
                        <NeoButton key={size} size={size}>
                            {label}
                        </NeoButton>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Props documentation section.
 */
function PropsSection() {
    return (
        <DocSection id="props" title="Props">
            <div className="py-4">
                <PropsTable props={BUTTON_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * NeoButton documentation page.
 *
 * Provides comprehensive documentation including:
 * - Overview with live preview
 * - Installation instructions (CLI & Manual)
 * - All available variants
 * - Size options
 * - Complete props reference
 */
function NeoButtonDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Button"
                    title="Neostrap UI Button"
                    description="Neo-brutalist primary button plus all variants and sizes."
                />
                <Codepreview
                    preview={<NeoButton>Punch Me</NeoButton>}
                    code={BUTTON_USAGE_CODE}
                />
            </DocSection>

            <InstallationTabs cliCode={INSTALL_CLI_CODE}>
                <ManualInstallationGuide />
            </InstallationTabs>

            <VariantsSection />
            <SizesSection />
            <PropsSection />
        </>
    )
}

export default NeoButtonDocPage

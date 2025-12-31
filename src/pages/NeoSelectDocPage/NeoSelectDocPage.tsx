/**
 * @fileoverview Documentation page for the NeoSelect component.
 */

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/NeoSelect"

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
    SELECT_PROPS,
    SELECT_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    SELECT_COMPONENT_CODE,
    UTILS_CODE,
    VARIANT_OPTIONS,
    SIZE_OPTIONS,
} from "./constants"

// ============================================================================
// Helper Components
// ============================================================================

function SelectDemoRender({ variant, size }: { variant?: any, size?: any } = {}) {
    return (
        <Select>
            <SelectTrigger className="w-[200px]" variant={variant} size={size}>
                <SelectValue placeholder="Select a specific option used for testing" />
            </SelectTrigger>
            <SelectContent variant={variant}>
                <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="alpha">Alpha</SelectItem>
                    <SelectItem value="beta">Beta</SelectItem>
                    <SelectItem value="gamma">Gamma</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

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
                            <SelectDemoRender variant={variant} />
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
                            <SelectDemoRender size={size} />
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
                <PropsTable props={SELECT_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

function NeoSelectDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Select"
                    title="Neostrap UI Select"
                    description="Displays a list of options for the user to pick from—triggered by a button."
                />
                <Codepreview
                    preview={<SelectDemoRender />}
                    code={SELECT_USAGE_CODE}
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
                                <InlineCode>src/components/ui/NeoSelect.tsx</InlineCode> and copy
                                the following code:
                            </>
                        }
                    >
                        <CodeBlock code={SELECT_COMPONENT_CODE} />
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
                        description="You can now import and use the NeoSelect component:"
                    >
                        <CodeBlock code={SELECT_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <SizesSection />
            <PropsSection />
        </>
    )
}

export default NeoSelectDocPage

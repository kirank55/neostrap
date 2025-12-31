/**
 * @fileoverview Documentation page for the NeoDropdown component.
 */

import {
    DropdownMenu,
    NeoDropdownTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/NeoDropdown"

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
    DROPDOWN_PROPS,
    TRIGGER_PROPS,
    CONTENT_PROPS,
    ITEM_PROPS,
    DROPDOWN_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    DROPDOWN_COMPONENT_CODE,
    UTILS_CODE,
    VARIANT_OPTIONS,
    SIZE_OPTIONS,
} from "./constants"

// ============================================================================
// Helper Components
// ============================================================================

function DropdownDemo({ variant, size }: { variant?: any, size?: any }) {
    return (
        <DropdownMenu>
            <NeoDropdownTrigger variant={variant} size={size}>
                Options
            </NeoDropdownTrigger>
            <DropdownMenuContent variant={variant}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
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
                            <DropdownDemo variant={variant} />
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
                <InlineWrap>
                    {SIZE_OPTIONS.map(({ size, label }) => (
                        <LabeledItem key={label} label={label}>
                            <DropdownDemo size={size} />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

function PropsSection() {
    return (
        <>
            <DocSection id="dropdown-props" title="DropdownMenu Props">
                <div className="py-4">
                    <PropsTable props={DROPDOWN_PROPS} />
                </div>
            </DocSection>

            <DocSection id="trigger-props" title="DropdownTrigger Props">
                <div className="py-4">
                    <PropsTable props={TRIGGER_PROPS} />
                </div>
            </DocSection>

            <DocSection id="content-props" title="DropdownContent Props">
                <div className="py-4">
                    <PropsTable props={CONTENT_PROPS} />
                </div>
            </DocSection>

            <DocSection id="item-props" title="DropdownItem Props">
                <div className="py-4">
                    <PropsTable props={ITEM_PROPS} />
                </div>
            </DocSection>
        </>
    )
}

// ============================================================================
// Main Component
// ============================================================================

function NeoDropdownDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Dropdown"
                    title="Neostrap UI Dropdown"
                    description="Neo-brutalist dropdown menu component with keyboard navigation and customizable variants."
                />
                <Codepreview
                    preview={<DropdownDemo />}
                    code={DROPDOWN_USAGE_CODE}
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
                                <InlineCode>src/components/ui/NeoDropdown.tsx</InlineCode> and
                                copy the following code:
                            </>
                        }
                    >
                        <CodeBlock code={DROPDOWN_COMPONENT_CODE} />
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
                        description="You can now import and use the NeoDropdown component:"
                    >
                        <CodeBlock code={DROPDOWN_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <SizesSection />
            <PropsSection />
        </>
    )
}

export default NeoDropdownDocPage

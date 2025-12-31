/**
 * @fileoverview Documentation page for the NeoAccordion component.
 * Displays overview, installation instructions, variants, behaviors, and props.
 */

// External dependencies
import {
    NeoAccordion,
    NeoAccordionItem,
    NeoAccordionTrigger,
    NeoAccordionContent,
    variantOptions,
    behaviorOptions,
} from "@/components/ui/NeoAccordion"

// Documentation components
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

// Constants and code snippets
import {
    ACCORDION_PROPS,
    ACCORDION_ITEM_PROPS,
    ACCORDION_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    ACCORDION_COMPONENT_CODE,
    GLOBAL_CSS_CODE,
    UTILS_CODE,
    DEMO_ITEMS,
    VARIANT_DEMO_ITEMS,
    type DemoItem,
} from "./constants"

// ============================================================================
// Demo Components
// ============================================================================

/**
 * Props for AccordionDemo component.
 */
interface AccordionDemoProps {
    items: DemoItem[]
    type?: "single" | "multiple"
    variant?: "brutal" | "outline"
    collapsible?: boolean
    defaultValue?: string
}

/**
 * Reusable accordion demo component for showcasing different configurations.
 */
function AccordionDemo({
    items,
    type = "single",
    variant = "brutal",
    collapsible = true,
    defaultValue,
}: AccordionDemoProps) {
    if (type === "multiple") {
        return (
            <NeoAccordion
                type="multiple"
                defaultValue={defaultValue ? [defaultValue] : undefined}
                variant={variant}
                className="w-full max-w-md mx-auto"
            >
                {items.map((item) => (
                    <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
                        <NeoAccordionTrigger variant={variant}>
                            {item.trigger}
                        </NeoAccordionTrigger>
                        <NeoAccordionContent variant={variant}>
                            {item.content}
                        </NeoAccordionContent>
                    </NeoAccordionItem>
                ))}
            </NeoAccordion>
        )
    }

    return (
        <NeoAccordion
            type="single"
            collapsible={collapsible}
            defaultValue={defaultValue}
            variant={variant}
            className="w-full max-w-md mx-auto"
        >
            {items.map((item) => (
                <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
                    <NeoAccordionTrigger variant={variant}>
                        {item.trigger}
                    </NeoAccordionTrigger>
                    <NeoAccordionContent variant={variant}>
                        {item.content}
                    </NeoAccordionContent>
                </NeoAccordionItem>
            ))}
        </NeoAccordion>
    )
}

// ============================================================================
// Section Components
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
                        <InlineCode>src/components/ui/NeoAccordion.tsx</InlineCode> and copy
                        the following code:
                    </>
                }
            >
                <CodeBlock code={ACCORDION_COMPONENT_CODE} />
            </InstallationStep>

            {/* Step 2: Dependencies */}
            <InstallationStep
                step={2}
                title="Install dependencies"
                description="Make sure you have the required dependencies installed:"
            >
                <CodeBlock code={INSTALL_DEPENDENCIES_CODE} highlightCode={false} />
            </InstallationStep>

            {/* Step 3: Global CSS */}
            <InstallationStep
                step={3}
                title="Add animations to index.css"
                description="Add the following keyframes and theme animations to your global CSS file:"
            >
                <CodeBlock code={GLOBAL_CSS_CODE} />
            </InstallationStep>

            {/* Step 4: Utility Function */}
            <InstallationStep
                step={4}
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

            {/* Step 5: Usage */}
            <InstallationStep
                step={5}
                title="Usage"
                description="You can now import and use the NeoAccordion component:"
            >
                <CodeBlock code={ACCORDION_USAGE_CODE} />
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
                    {variantOptions.map(({ variant, label }) => (
                        <LabeledItem key={variant} label={label} widthClass="w-full max-w-xl">
                            <AccordionDemo items={VARIANT_DEMO_ITEMS} variant={variant} />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Behaviors showcase section.
 */
function BehaviorsSection() {
    return (
        <DocSection id="behaviors" title="Behaviors">
            <ShowcaseSurface>
                <InlineWrap>
                    {behaviorOptions.map((option) => (
                        <LabeledItem
                            key={option.label}
                            label={option.label}
                            widthClass="w-full max-w-xl"
                        >
                            <AccordionDemo
                                items={VARIANT_DEMO_ITEMS}
                                type={option.type}
                                collapsible={
                                    "collapsible" in option ? option.collapsible : undefined
                                }
                                defaultValue={
                                    "defaultValue" in option ? option.defaultValue : undefined
                                }
                            />
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Accordion props documentation section.
 */
function AccordionPropsSection() {
    return (
        <DocSection id="props" title="Accordion Props">
            <div className="py-4">
                <PropsTable props={ACCORDION_PROPS} />
            </div>
        </DocSection>
    )
}

/**
 * AccordionItem props documentation section.
 */
function AccordionItemPropsSection() {
    return (
        <DocSection id="item-props" title="AccordionItem Props">
            <div className="py-4">
                <PropsTable props={ACCORDION_ITEM_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * NeoAccordion documentation page.
 *
 * Provides comprehensive documentation including:
 * - Overview with live preview
 * - Installation instructions (CLI & Manual)
 * - All available variants
 * - Behavior options (single, multiple, collapsible)
 * - Complete props reference
 */
function NeoAccordionDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Accordion"
                    title="Neostrap UI Accordion"
                    description="Neo-brutalist accordion component with collapsible sections."
                />
                <Codepreview
                    preview={<AccordionDemo items={DEMO_ITEMS} />}
                    code={ACCORDION_USAGE_CODE}
                />
            </DocSection>

            <InstallationTabs cliCode={INSTALL_CLI_CODE}>
                <ManualInstallationGuide />
            </InstallationTabs>

            <VariantsSection />
            <BehaviorsSection />
            <AccordionPropsSection />
            <AccordionItemPropsSection />
        </>
    )
}

export default NeoAccordionDocPage

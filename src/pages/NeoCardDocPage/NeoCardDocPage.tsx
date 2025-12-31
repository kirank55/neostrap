/**
 * @fileoverview Documentation page for the NeoCard component.
 * Displays overview, installation instructions, variants, and examples.
 */

// External dependencies
import {
    DefaultCard,
    CardWithButton,
    TestimonialCard,
    variantOptions,
} from "@/components/ui/NeoCard"

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
    CARD_PROPS,
    TESTIMONIAL_CARD_PROPS,
    CARD_USAGE_CODE,
    INSTALL_CLI_CODE,
    INSTALL_DEPENDENCIES_CODE,
    CARD_COMPONENT_CODE,
    UTILS_CODE,
    TESTIMONIALS,
} from "./constants"

// ============================================================================
// Section Components
// ============================================================================

/**
 * Variants showcase section.
 */
function VariantsSection() {
    return (
        <DocSection id="variants" title="Variants">
            <ShowcaseSurface>
                <InlineWrap>
                    {variantOptions.map(({ variant, label }) => (
                        <LabeledItem
                            key={variant}
                            label={label}
                            widthClass="w-full max-w-xl"
                        >
                            <div className="flex justify-center">
                                <DefaultCard
                                    variant={variant}
                                    title="Card Title"
                                    description="This is a card description showing the variant style."
                                />
                            </div>
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Card with Button showcase section.
 */
function CardWithButtonSection() {
    return (
        <DocSection id="card-with-button" title="Card with Button">
            <p className="text-muted-foreground">
                A card with a call-to-action button for user interaction.
            </p>
            <ShowcaseSurface>
                <InlineWrap>
                    {variantOptions.map(({ variant, label }) => (
                        <LabeledItem
                            key={variant}
                            label={`${label} Card`}
                            widthClass="w-full max-w-xl"
                        >
                            <div className="flex justify-center">
                                <CardWithButton
                                    variant={variant}
                                    title={`${label} Card`}
                                    description="Click the button below to learn more about this feature."
                                    buttonText="Read more"
                                />
                            </div>
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Testimonial Card showcase section.
 */
function TestimonialCardSection() {
    return (
        <DocSection id="testimonial-card" title="Testimonial Card">
            <p className="text-muted-foreground">
                Display customer testimonials and reviews.
            </p>
            <ShowcaseSurface>
                <InlineWrap>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <LabeledItem
                            key={index}
                            label={testimonial.author}
                            widthClass="w-full max-w-xl"
                        >
                            <div className="flex justify-center">
                                <TestimonialCard
                                    quote={testimonial.quote}
                                    author={testimonial.author}
                                    role={testimonial.role}
                                    variant={index === 0 ? "brutal" : "outline"}
                                />
                            </div>
                        </LabeledItem>
                    ))}
                </InlineWrap>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Props documentation section.
 */
function CardPropsSection() {
    return (
        <DocSection id="props" title="Card Props">
            <div className="py-4">
                <PropsTable props={CARD_PROPS} />
            </div>
        </DocSection>
    )
}

/**
 * Testimonial Card Props documentation section.
 */
function TestimonialCardPropsSection() {
    return (
        <DocSection id="testimonial-props" title="TestimonialCard Props">
            <div className="py-4">
                <PropsTable props={TESTIMONIAL_CARD_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * NeoCard documentation page.
 *
 * Provides comprehensive documentation including:
 * - Overview with live preview
 * - Installation instructions (CLI & Manual)
 * - Variants, examples, and props
 */
function NeoCardDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Card"
                    title="Neostrap UI Card"
                    description="Neo-brutalist card component for displaying content in a contained format."
                />
                <Codepreview
                    preview={
                        <DefaultCard
                            title="Noteworthy technology acquisitions"
                            description="Here are the biggest technology acquisitions of 2024 so far, in reverse chronological order."
                        />
                    }
                    code={CARD_USAGE_CODE}
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
                                <InlineCode>src/components/ui/NeoCard.tsx</InlineCode> and copy
                                the following code:
                            </>
                        }
                    >
                        <CodeBlock code={CARD_COMPONENT_CODE} />
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
                        description="You can now import and use the NeoCard component:"
                    >
                        <CodeBlock code={CARD_USAGE_CODE} />
                    </InstallationStep>
                </div>
            </InstallationTabs>

            <VariantsSection />
            <CardPropsSection />
            <CardWithButtonSection />
            <TestimonialCardSection />
            <TestimonialCardPropsSection />
        </>
    )
}

export default NeoCardDocPage

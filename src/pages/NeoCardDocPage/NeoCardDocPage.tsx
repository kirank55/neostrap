/**
 * @fileoverview Documentation page for the NeoCard component.
 * Displays overview, installation instructions, variants, and examples.
 */

// External dependencies
import {
    DefaultCard,
    CardWithButtonandImage,
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
                <div className="flex">

                    {variantOptions.map(({ variant, label }) => (
                // <InlineWrap>
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
                    </div>
                {/* </InlineWrap> */}
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Card with Image showcase section.
 */
function CardWithButtonandImageSection() {
    return (
        <DocSection id="card-with-image" title="Card with Image">
            <p className="text-muted-foreground">
                A card featuring a header image, content, and an action button.
            </p>
            <ShowcaseSurface>
                {/* <InlineWrap> */}
                <div className="flex">

                    {variantOptions.map(({ variant, label }) => (
                        <LabeledItem
                            key={variant}
                            label={`${label} Card`}
                            widthClass="w-full"
                        >
                            <div className="flex justify-center">
                                <CardWithButtonandImage
                                    variant={variant}
                                    imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500"
                                    imageAlt="Retro technology"
                                    title={`${label} Project`}
                                    description="Explore our latest retro-futuristic design projects and components."
                                    buttonText="View Project"
                                />
                            </div>
                        </LabeledItem>
                    ))}
                </div>

                {/* </InlineWrap> */}
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
                <div className="flex" >
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
                </div>
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
            <CardWithButtonandImageSection />
            <TestimonialCardSection />
            <TestimonialCardPropsSection />
        </>
    )
}

export default NeoCardDocPage

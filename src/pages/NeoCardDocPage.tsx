import {
  DefaultCard,
  CardWithButton,
  TestimonialCard,
  variantOptions,
} from "@/components/ui/NeoCard";
import { Codepreview, CodeBlock } from "@/components/CodeDemo";
import PropsTable, { type PropDefinition } from "@/components/PropsTable";
import DocSection from "@/components/docs/DocSection";
import { ShowcaseSurface, InlineWrap, LabeledItem } from "@/components/docs/Showcase";
import DocPageHeader from "@/components/docs/DocPageHeader";

const cardProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"brutal" | "outline"',
    default: '"brutal"',
    description: "The visual style variant of the card.",
  },
  {
    name: "className",
    type: "string",
    default: "N/A",
    description: "Additional CSS classes to apply.",
  },
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "The content to be displayed inside the card.",
  },
];

const testimonialCardProps: PropDefinition[] = [
  {
    name: "quote",
    type: "string",
    default: "N/A",
    description: "The testimonial quote text.",
  },
  {
    name: "author",
    type: "string",
    default: "N/A",
    description: "The name of the person giving the testimonial.",
  },
  {
    name: "role",
    type: "string",
    default: "N/A",
    description: "The role/title of the author.",
  },
  {
    name: "avatarUrl",
    type: "string",
    default: "N/A",
    description: "URL to the author's avatar image.",
  },
];

const cardCode = `import {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
  NeoCardFooter,
} from "@/components/ui/NeoCard"

export function CardDemo() {
  return (
    <NeoCard>
      <NeoCardHeader>
        <NeoCardTitle>Card Title</NeoCardTitle>
        <NeoCardDescription>Card description goes here.</NeoCardDescription>
      </NeoCardHeader>
      <NeoCardContent>
        <p>Card content</p>
      </NeoCardContent>
      <NeoCardFooter>
        <button>Action</button>
      </NeoCardFooter>
    </NeoCard>
  )
}`;

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neocard.json`;

const testimonials = [
  {
    quote:
      "This library has completely transformed how we build UIs. The neo-brutalist style is exactly what we needed.",
    author: "Sarah Chen",
    role: "Lead Designer at Acme",
  },
  {
    quote: "Fast, accessible, and beautiful. What more could you ask for?",
    author: "Alex Rivera",
    role: "Frontend Developer",
  },
];

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
          preview={<DefaultCard title="Noteworthy technology acquisitions" description="Here are the biggest technology acquisitions of 2024 so far, in reverse chronological order." />}
          code={cardCode}
        />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label }) => (
              <LabeledItem key={variant} label={label} widthClass="w-full max-w-xl">
                <div className="flex justify-center">
                  <DefaultCard variant={variant} title="Card Title" description="This is a card description showing the variant style." />
                </div>
              </LabeledItem>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Card Props">
        <div className="py-4">
          <PropsTable props={cardProps} />
        </div>
      </DocSection>

      <DocSection id="card-with-button" title="Card with Button">
        <p className="text-muted-foreground">A card with a call-to-action button for user interaction.</p>
          <ShowcaseSurface>
        <InlineWrap>
          {variantOptions.map(({ variant, label }) => (
            <LabeledItem key={variant} label={`${label} Card`} widthClass="w-full max-w-xl">
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

      <DocSection id="testimonial-card" title="Testimonial Card">
        <p className="text-muted-foreground">Display customer testimonials and reviews.</p>
          <ShowcaseSurface>
        <InlineWrap>
          {testimonials.map((testimonial, index) => (
            <LabeledItem key={index} label={testimonial.author} widthClass="w-full max-w-xl">
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

      <DocSection id="testimonial-props" title="TestimonialCard Props">
        <div className="py-4">
          <PropsTable props={testimonialCardProps} />
        </div>
      </DocSection>
    </>
  );
}

export default NeoCardDocPage;

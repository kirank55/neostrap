import {
  DefaultCard,
  CardWithButton,
  TestimonialCard,
  variantOptions,
} from "@/components/ui/NeoCard";
import { Codepreview, CodeBlock } from "@/components/CodeDemo";
import PropsTable, { type PropDefinition } from "@/components/PropsTable";

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
      <section id="overview" className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Components / Card
        </p>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Neostrap UI Card</h1>
          <p className="text-base text-muted-foreground">
            Neo-brutalist card component for displaying content in a contained
            format.
          </p>
        </div>

        <Codepreview
          preview={
            <DefaultCard
              title="Noteworthy technology acquisitions"
              description="Here are the biggest technology acquisitions of 2024 so far, in reverse chronological order."
            />
          }
          code={cardCode}
        />
      </section>

      <section id="installation" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Installation</h2>
        </div>
        <CodeBlock code={installCode} />
      </section>

      <section id="variants" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Variants</h2>
        </div>
        <div className="flex flex-col gap-6">
          {variantOptions.map(({ variant, label }) => (
            <div key={variant} className="flex flex-col gap-2">
              <h3 className="text-lg font-medium">{label}</h3>
              <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
                <div className="flex justify-center">
                  <DefaultCard
                    variant={variant}
                    title="Card Title"
                    description="This is a card description showing the variant style."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Card Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={cardProps} />
        </div>
      </section>

      <section id="card-with-button" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Card with Button</h2>
        </div>
        <p className="text-muted-foreground">
          A card with a call-to-action button for user interaction.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {variantOptions.map(({ variant, label }) => (
            <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm w-full flex justify-center">
              <CardWithButton
                key={variant}
                variant={variant}
                title={`${label} Card`}
                description="Click the button below to learn more about this feature."
                buttonText="Read more"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="testimonial-card" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Testimonial Card</h2>
        </div>
        <p className="text-muted-foreground">
          Display customer testimonials and reviews.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm w-full flex justify-center">
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                variant={index === 0 ? "brutal" : "outline"}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="testimonial-props" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">TestimonialCard Props</h2>
        </div>
        <div className="py-4">
          <PropsTable props={testimonialCardProps} />
        </div>
      </section>
    </>
  );
}

export default NeoCardDocPage;

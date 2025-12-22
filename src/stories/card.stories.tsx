import type { Meta, StoryObj } from "@storybook/react"

import {
  DefaultCard,
  CardWithButton,
  TestimonialCard,
} from "@/components/ui/NeoCard"


// Default Card Stories

const meta: Meta<typeof DefaultCard> = {
  title: "UI/Card",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "outline"],
    },
  },
  args: {
    variant: "brutal",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta

type DefaultCardStory = StoryObj<typeof DefaultCard>
type CardWithButtonStory = StoryObj<typeof CardWithButton>
type TestimonialCardStory = StoryObj<typeof TestimonialCard>

export const Brutal: DefaultCardStory = {
  render: () => (
    <DefaultCard
      variant="brutal"
      title="Noteworthy technology acquisitions"
      description="Here are the biggest technology acquisitions of 2024 so far, in reverse chronological order."
    />
  ),
}

export const Outline: DefaultCardStory = {
  render: () => (
    <DefaultCard
      variant="outline"
      title="Noteworthy technology acquisitions"
      description="Here are the biggest technology acquisitions of 2024 so far, in reverse chronological order."
    />
  ),
}

export const WithButton: CardWithButtonStory = {
  render: (args) => (
    <CardWithButton
      variant={args.variant}
      title="Learn More"
      description="Click the button below to explore more features and documentation."
      buttonText="Read more"
    />
  ),
  args: {
    variant: "brutal",
  },
}

export const WithButtonOutline: CardWithButtonStory = {
  render: () => (
    <CardWithButton
      variant="outline"
      title="Learn More"
      description="Click the button below to explore more features and documentation."
      buttonText="Read more"
    />
  ),
}

export const Testimonial: TestimonialCardStory = {
  render: (args) => (
    <TestimonialCard
      variant={args.variant}
      quote="This library has completely transformed how we build UIs. The neo-brutalist style is exactly what we needed."
      author="Sarah Chen"
      role="Lead Designer at Acme"
    />
  ),
  args: {
    variant: "brutal",
  },
}

export const TestimonialOutline: TestimonialCardStory = {
  render: () => (
    <TestimonialCard
      variant="outline"
      quote="Fast, accessible, and beautiful. What more could you ask for?"
      author="Alex Rivera"
      role="Frontend Developer"
    />
  ),
}

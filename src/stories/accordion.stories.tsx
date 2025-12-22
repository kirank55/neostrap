import type { Meta, StoryObj } from "@storybook/react"

import {
  NeoAccordion,
  NeoAccordionItem,
  NeoAccordionTrigger,
  NeoAccordionContent,
} from "@/components/ui/NeoAccordion"

type AccordionVariant = "brutal" | "outline"

const demoItems = [
  {
    value: "item-1",
    trigger: "What is Neostrap UI?",
    content:
      "Neostrap UI is a collection of neo-brutalist styled components built on top of Radix UI primitives and Tailwind CSS.",
  },
  {
    value: "item-2",
    trigger: "Is it accessible?",
    content:
      "Yes. All components are built using Radix UI primitives which follow WAI-ARIA design patterns for accessibility.",
  },
  {
    value: "item-3",
    trigger: "Can I customize the styles?",
    content:
      "Absolutely! Components use Tailwind CSS classes and support className props for full customization.",
  },
]

interface AccordionStoryProps {
  variant: AccordionVariant
  type: "single" | "multiple"
  collapsible: boolean
  defaultValue?: string
}

const AccordionTemplate = ({ variant = "brutal", type, collapsible, defaultValue }: AccordionStoryProps) => {
  if (type === "multiple") {
    return (
      <NeoAccordion type="multiple" defaultValue={defaultValue ? [defaultValue] : undefined} variant={variant}>
        {demoItems.map((item) => (
          <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
            <NeoAccordionTrigger variant={variant}>{item.trigger}</NeoAccordionTrigger>
            <NeoAccordionContent variant={variant}>{item.content}</NeoAccordionContent>
          </NeoAccordionItem>
        ))}
      </NeoAccordion>
    )
  }

  return (
    <NeoAccordion type="single" collapsible={collapsible} defaultValue={defaultValue} variant={variant}>
      {demoItems.map((item) => (
        <NeoAccordionItem key={item.value} value={item.value} variant={variant}>
          <NeoAccordionTrigger variant={variant}>{item.trigger}</NeoAccordionTrigger>
          <NeoAccordionContent variant={variant}>{item.content}</NeoAccordionContent>
        </NeoAccordionItem>
      ))}
    </NeoAccordion>
  )
}

const meta: Meta<AccordionStoryProps> = {
  title: "UI/Accordion",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "outline"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
  args: {
    variant: "brutal",
    type: "single",
    collapsible: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
  render: (args) => <AccordionTemplate {...args} />,
}

export default meta

type Story = StoryObj<AccordionStoryProps>

export const Brutal: Story = {
  args: {
    variant: "brutal",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
}

export const Multiple: Story = {
  args: {
    variant: "brutal",
    type: "multiple",
  },
}

export const NonCollapsible: Story = {
  args: {
    variant: "brutal",
    type: "single",
    collapsible: false,
    defaultValue: "item-1",
  },
}

export const DefaultOpen: Story = {
  args: {
    variant: "brutal",
    defaultValue: "item-2",
  },
}

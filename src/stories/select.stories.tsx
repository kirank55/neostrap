import type { Meta, StoryObj } from "@storybook/react"

import { NeoSelect } from "@/components/ui/NeoSelect"

const meta = {
  title: "UI/Select",
  component: NeoSelect,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "regular", "disabled"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  args: {
    variant: "brutal",
    size: "default",
  },
  render: (args) => (
    <NeoSelect {...args}>
      <option value="">Choose an option</option>
      <option value="alpha">Alpha</option>
      <option value="beta">Beta</option>
      <option value="gamma">Gamma</option>
    </NeoSelect>
  ),
} satisfies Meta<typeof NeoSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Brutal: Story = {
  args: {
    variant: "brutal",
  },
}

export const Regular: Story = {
  args: {
    variant: "regular",
  },
}

export const Disabled: Story = {
  args: {
    variant: "disabled",
    disabled: true,
  },
}

export const SmallSize: Story = {
  args: {
    size: "sm",
  },
}

export const LargeSize: Story = {
  args: {
    size: "lg",
  },
}

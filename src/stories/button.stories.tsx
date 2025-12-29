import type { Meta, StoryObj } from "@storybook/react"

import { NeoButton } from "@/components/ui/NeoButton"


const meta = {
  title: "UI/Button",
  component: NeoButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "regular", "danger", "success", "inverter", "disabled"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
    },
  },
  args: {
    children: "Button",
    variant: "brutal",
    size: "default",
  },
} satisfies Meta<typeof NeoButton>

export default meta

type Story = StoryObj<typeof meta>

export const Brutal: Story = {
  args: {
    variant: "brutal",
    children: "Brutal",
  },
}


export const Inverter: Story = {
  args: {
    variant: "inverter",
    children: "Inverter",
  },
}

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Disabled",
  },
}

export const SmallSize: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
}

export const LargeSize: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
}

export const Icon: Story = {
  args: {
    size: "icon",
    children: "★",
    "aria-label": "Icon button",
  },
}

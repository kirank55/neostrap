import type { Meta, StoryObj } from "@storybook/react"

import { NeoButton as Button } from "@/components/ui/NeoButton"

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "default", "outline", "secondary", "ghost", "link", "destructive"],
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
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Brutal: Story = {}

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Learn more",
  },
}

export const Icon: Story = {
  args: {
    size: "icon",
    children: "★",
    "aria-label": "Icon button",
  },
}

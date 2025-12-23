import type { Meta, StoryObj } from "@storybook/react"

import { NeoInput } from "@/components/ui/NeoInput"

const meta = {
  title: "UI/Input",
  component: NeoInput,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["brutal", "outline", "disabled"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    type: {
      control: "select",
      options: ["text", "number", "password"],
    },
  },
  args: {
    placeholder: "Enter text...",
    variant: "brutal",
    size: "default",
    type: "text",
  },
} satisfies Meta<typeof NeoInput>

export default meta

type Story = StoryObj<typeof meta>

export const Brutal: Story = {
  args: {
    variant: "brutal",
    placeholder: "Brutal input...",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    placeholder: "Outline input...",
  },
}

export const Disabled: Story = {
  args: {
    variant: "disabled",
    placeholder: "Disabled input...",
    disabled: true,
  },
}

export const SmallSize: Story = {
  args: {
    size: "sm",
    placeholder: "Small input...",
  },
}

export const LargeSize: Story = {
  args: {
    size: "lg",
    placeholder: "Large input...",
  },
}

export const TextType: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
}

export const NumberType: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
  },
}

export const PasswordType: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
}

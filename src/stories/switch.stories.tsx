import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { NeoSwitch } from "@/components/ui/NeoSwitch"

const meta = {
    title: "UI/Switch",
    component: NeoSwitch,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["brutal", "danger", "success", "inverter", "outline", "disabled"],
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg"],
        },
    },
} satisfies Meta<typeof NeoSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: "brutal",
    },
}

export const Brutal: Story = {
    args: {
        variant: "brutal",
    },
}

export const Danger: Story = {
    args: {
        variant: "danger",
    },
}

export const Success: Story = {
    args: {
        variant: "success",
    },
}

export const Inverter: Story = {
    args: {
        variant: "inverter",
    },
}

export const Outline: Story = {
    args: {
        variant: "outline",
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
        variant: "brutal",
        size: "sm",
    },
}

export const LargeSize: Story = {
    args: {
        variant: "brutal",
        size: "lg",
    },
}

export const Controlled: Story = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false)

        return (
            <div className="flex flex-col items-center gap-4">
                <NeoSwitch
                    variant="brutal"
                    checked={isChecked}
                    onCheckedChange={setIsChecked}
                />
                <p className="text-sm text-gray-600">
                    Switch is {isChecked ? "ON" : "OFF"}
                </p>
            </div>
        )
    },
}

export const WithLabel: Story = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false)

        return (
            <div className="flex items-center space-x-2">
                <NeoSwitch
                    id="airplane-mode"
                    variant="brutal"
                    checked={isChecked}
                    onCheckedChange={setIsChecked}
                />
                <label
                    htmlFor="airplane-mode"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                    Airplane Mode
                </label>
            </div>
        )
    },
}

export const AllVariants: Story = {
    render: () => {
        const variants = [
            "brutal",
            "danger",
            "success",
            "inverter",
            "outline",
            "disabled",
        ] as const

        return (
            <div className="flex flex-col gap-4">
                {variants.map((variant) => (
                    <div key={variant} className="flex items-center gap-4">
                        <NeoSwitch
                            variant={variant}
                            disabled={variant === "disabled"}
                            defaultChecked={false}
                        />
                        <span className="text-sm font-semibold capitalize">{variant}</span>
                    </div>
                ))}
            </div>
        )
    },
}

export const AllSizes: Story = {
    render: () => {
        const sizes = ["sm", "default", "lg"] as const

        return (
            <div className="flex flex-col gap-4">
                {sizes.map((size) => (
                    <div key={size} className="flex items-center gap-4">
                        <NeoSwitch variant="brutal" size={size} defaultChecked={false} />
                        <span className="text-sm font-semibold capitalize">
                            {size === "default" ? "Default" : size.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>
        )
    },
}

export const FormExample: Story = {
    render: () => {
        const [settings, setSettings] = useState({
            notifications: true,
            marketing: false,
            analytics: true,
        })

        return (
            <div className="w-[350px] space-y-4 p-6 border-2 border-black rounded-lg shadow-[4px_4px_0_#000]">
                <h3 className="text-lg font-bold">Notification Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-semibold">Push Notifications</label>
                            <p className="text-xs text-gray-600">
                                Receive notifications about your activity
                            </p>
                        </div>
                        <NeoSwitch
                            variant="brutal"
                            checked={settings.notifications}
                            onCheckedChange={(checked) =>
                                setSettings({ ...settings, notifications: checked })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-semibold">Marketing Emails</label>
                            <p className="text-xs text-gray-600">
                                Receive emails about new features
                            </p>
                        </div>
                        <NeoSwitch
                            variant="brutal"
                            checked={settings.marketing}
                            onCheckedChange={(checked) =>
                                setSettings({ ...settings, marketing: checked })
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <label className="text-sm font-semibold">Analytics</label>
                            <p className="text-xs text-gray-600">
                                Help us improve by sharing usage data
                            </p>
                        </div>
                        <NeoSwitch
                            variant="success"
                            checked={settings.analytics}
                            onCheckedChange={(checked) =>
                                setSettings({ ...settings, analytics: checked })
                            }
                        />
                    </div>
                </div>
            </div>
        )
    },
}

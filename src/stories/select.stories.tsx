import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/NeoSelect"

const meta = {
    title: "UI/Select",
    component: Select,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]" variant="brutal">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const BrutalVariant: Story = {
    render: () => (
        <Select defaultValue="apple">
            <SelectTrigger className="w-[180px]" variant="brutal">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const OutlineVariant: Story = {
    render: () => (
        <Select defaultValue="apple">
            <SelectTrigger className="w-[180px]" variant="outline">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent variant="outline">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const WithGroups: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[220px]" variant="brutal">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
}

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState("apple")

        return (
            <div className="space-y-4">
                <Select value={value} onValueChange={setValue}>
                    <SelectTrigger className="w-[180px]" variant="brutal">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent variant="brutal">
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                </Select>
                <p className="text-sm text-gray-600">Selected: {value}</p>
            </div>
        )
    },
}

export const SmallSize: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]" variant="brutal" size="sm">
                <SelectValue placeholder="Small select" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const LargeSize: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]" variant="brutal" size="lg">
                <SelectValue placeholder="Large select" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
                <SelectItem value="3">Option 3</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const Disabled: Story = {
    render: () => (
        <Select disabled>
            <SelectTrigger className="w-[180px]" variant="disabled">
                <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
        </Select>
    ),
}

export const LongList: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]" variant="brutal">
                <SelectValue placeholder="Choose a number" />
            </SelectTrigger>
            <SelectContent variant="brutal">
                {Array.from({ length: 20 }, (_, i) => (
                    <SelectItem key={i} value={String(i + 1)}>
                        Option {i + 1}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    ),
}

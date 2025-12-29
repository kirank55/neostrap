import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    NeoDropdownTrigger,
} from "@/components/ui/NeoDropdown"
import { User, Settings, LogOut, Mail, MessageSquare, Plus } from "lucide-react"

const meta = {
    title: "UI/Dropdown",
    component: DropdownMenu,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof DropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="brutal">Open Menu</NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const BrutalVariant: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="brutal">Brutal Style</NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const OutlineVariant: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="outline">Outline Style</NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const WithCheckboxes: Story = {
    render: () => {
        const [showStatusBar, setShowStatusBar] = useState(true)
        const [showActivityBar, setShowActivityBar] = useState(false)
        const [showPanel, setShowPanel] = useState(false)

        return (
            <DropdownMenu>
                <NeoDropdownTrigger variant="brutal">View Options</NeoDropdownTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                    >
                        Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                    >
                        Activity Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                    >
                        Panel
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
}

export const WithRadioGroup: Story = {
    render: () => {
        const [position, setPosition] = useState("bottom")

        return (
            <DropdownMenu>
                <NeoDropdownTrigger variant="brutal">Position</NeoDropdownTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
}

export const WithSubmenu: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="brutal">File Menu</NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    New File
                </DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Mail className="mr-2 h-4 w-4" />
                        Share
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Email link</DropdownMenuItem>
                        <DropdownMenuItem>Copy link</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const SmallSize: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="brutal" size="sm">
                Small
            </NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

export const LargeSize: Story = {
    render: () => (
        <DropdownMenu>
            <NeoDropdownTrigger variant="brutal" size="lg">
                Large
            </NeoDropdownTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
}

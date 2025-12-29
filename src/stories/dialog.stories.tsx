import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/NeoDialog"
import { NeoButton } from "@/components/ui/NeoButton"

const meta = {
    title: "UI/Dialog",
    component: Dialog,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton variant="brutal">Open Dialog</NeoButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    ),
}

export const WithFooter: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton variant="brutal">Open Dialog</NeoButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right font-semibold">
                            Name
                        </label>
                        <input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3 border-2 border-black px-3 py-2 rounded-md"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right font-semibold">
                            Username
                        </label>
                        <input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3 border-2 border-black px-3 py-2 rounded-md"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <NeoButton variant="brutal">Save changes</NeoButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
}

export const Controlled: Story = {
    render: () => {
        const [open, setOpen] = useState(false)

        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <NeoButton variant="brutal">Open Dialog</NeoButton>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Controlled Dialog</DialogTitle>
                        <DialogDescription>
                            This dialog's open state is controlled programmatically.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <NeoButton variant="brutal" onClick={() => setOpen(false)}>
                            Close
                        </NeoButton>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    },
}

export const DangerAction: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton variant="danger">Delete Account</NeoButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Account</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete your account? This action cannot be
                        undone and all your data will be permanently removed.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2">
                    <NeoButton variant="brutal">Cancel</NeoButton>
                    <NeoButton variant="danger">Delete Account</NeoButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
}

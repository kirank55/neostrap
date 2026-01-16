/**
 * @fileoverview Documentation page for the NeoDialog component.
 * Displays overview, installation instructions, examples, and props.
 */

import * as React from "react"

// External dependencies
import { NeoButton } from "@/components/ui/NeoButton"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/NeoDialog"

// Documentation components
import { CodeBlock, Codepreview } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

// Constants and code snippets
import {
    DIALOG_PROPS,
    DIALOG_USAGE_CODE,
    INSTALL_CLI_CODE,
    CONFIRM_DIALOG_CODE,
    FORM_DIALOG_CODE,
    FULLSCREEN_DIALOG_CODE,
} from "./constants"

// ============================================================================
// Example Components
// ============================================================================

/**
 * Confirm dialog demo component.
 */
function ConfirmDialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton>Open Confirm</NeoButton>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Delete item?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. Are you sure you want to proceed?
                </DialogDescription>
                <div className="mt-4 flex justify-end gap-2">
                    <DialogClose asChild>
                        <NeoButton variant="outline">Cancel</NeoButton>
                    </DialogClose>
                    <DialogClose asChild>
                        <NeoButton>Confirm</NeoButton>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/**
 * Form dialog demo component.
 */
function FormDialogDemo() {
    const [value, setValue] = React.useState("")

    return (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton>Open Form</NeoButton>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Sign up</DialogTitle>
                <DialogDescription>Enter your email to subscribe.</DialogDescription>
                <div className="mt-4">
                    <input
                        className="w-full rounded-md border px-3 py-2"
                        placeholder="you@example.com"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <DialogClose asChild>
                        <NeoButton variant="outline">Cancel</NeoButton>
                    </DialogClose>
                    <DialogClose asChild>
                        <NeoButton onClick={() => alert(`Subscribed: ${value}`)}>
                            Submit
                        </NeoButton>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/**
 * Fullscreen dialog demo component.
 */
function FullscreenDialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <NeoButton>Open Fullscreen</NeoButton>
            </DialogTrigger>

            <DialogContent className="w-screen h-screen max-w-none p-6 sm:rounded-none flex flex-col items-center justify-around">
                <DialogTitle>Full-screen dialog</DialogTitle>
                <DialogDescription>Useful for immersive experiences.</DialogDescription>
                <div className="mt-4">Large content goes here...</div>
                <div className="mt-4 flex justify-end">
                    <DialogClose asChild>
                        <NeoButton variant="outline">Close</NeoButton>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}

// ============================================================================
// Section Components
// ============================================================================

/**
 * Examples showcase section.
 */
function ExamplesSection() {
    return (
        <DocSection id="examples" title="Examples">
            <ShowcaseSurface type="bg">
                <div className="flex flex-col gap-4 w-full">
                    <div>
                        <h4 className="mb-2 font-medium">Confirm Dialog</h4>
                        <Codepreview
                            preview={<ConfirmDialogDemo />}
                            code={CONFIRM_DIALOG_CODE}
                        />
                    </div>

                    <div>
                        <h4 className="mb-2 font-medium">Form Dialog</h4>
                        <Codepreview preview={<FormDialogDemo />} code={FORM_DIALOG_CODE} />
                    </div>

                    <div>
                        <h4 className="mb-2 font-medium">Full-screen Dialog</h4>
                        <Codepreview
                            preview={<FullscreenDialogDemo />}
                            code={FULLSCREEN_DIALOG_CODE}
                        />
                    </div>
                </div>
            </ShowcaseSurface>
        </DocSection>
    )
}

/**
 * Props documentation section.
 */
function PropsSection() {
    return (
        <DocSection id="props" title="Props">
            <div className="py-4">
                <PropsTable props={DIALOG_PROPS} />
            </div>
        </DocSection>
    )
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * NeoDialog documentation page.
 *
 * Provides comprehensive documentation including:
 * - Overview with live preview
 * - Installation instructions
 * - Example dialogs (Confirm, Form, Fullscreen)
 * - Complete props reference
 */
function NeoDialogDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Dialog"
                    title="Neostrap UI Dialog"
                    description="Accessible dialog wrapper using Radix primitives and Neostrap styling."
                />
                <Codepreview
                    preview={
                        <Dialog>
                            <DialogTrigger asChild>
                                <NeoButton>Open Dialog</NeoButton>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Dialog Title</DialogTitle>
                                <DialogDescription>This is a short description.</DialogDescription>
                                <div className="mt-4 flex justify-end">
                                    <DialogClose asChild>
                                        <NeoButton variant="outline">Close</NeoButton>
                                    </DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                    }
                    code={DIALOG_USAGE_CODE}
                />
            </DocSection>

            <DocSection id="installation" title="Installation">
                <CodeBlock code={INSTALL_CLI_CODE} />
            </DocSection>

            <ExamplesSection />
            <PropsSection />
        </>
    )
}

export default NeoDialogDocPage

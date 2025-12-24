import * as React from "react"
import NeoButton from "@/components/ui/NeoButton"
import { CodeBlock, Codepreview } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface, InlineWrap } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/NeoDialog"

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neodialog.json`

const dialogProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    default: "N/A",
    description: "Content to render inside the dialog (usually DialogContent and children).",
  },
  {
    name: "open",
    type: "boolean (optional)",
    default: "N/A",
    description: "Controlled open state.",
  },
  {
    name: "defaultOpen",
    type: "boolean (optional)",
    default: "false",
    description: "Initial uncontrolled open state.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void (optional)",
    default: "N/A",
    description: "Callback when open state changes.",
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes for dialog content.",
  },
]

const demoCode = `import NeoButton from "@/components/ui/NeoButton"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/NeoDialog"

export function DialogDemo() {
  return (
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
  )
}`

// --- Examples: Confirm, Form, Full-screen ---
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

const confirmCode = `function ConfirmDialogDemo() {
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
}`

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

const formCode = `function FormDialogDemo() {
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
            <NeoButton onClick={() => alert('Subscribed: ' + value)}>
              Submit
            </NeoButton>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}`

function FullscreenDialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <NeoButton>Open Fullscreen</NeoButton>
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-none p-6 sm:rounded-none">
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

const fullscreenCode = `function FullscreenDialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <NeoButton>Open Fullscreen</NeoButton>
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-none p-6 sm:rounded-none">
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
}`

function NeoDialogDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Dialog"
          title="Neostrap UI Dialog"
          description="Accessible dialog wrapper using Radix primitives and Neostrap styling."
        />
        <Codepreview preview={<Dialog>
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
        </Dialog>} code={demoCode} />
      </DocSection>

      <DocSection id="examples" title="Examples">
        <ShowcaseSurface>
          <InlineWrap>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="mb-2 font-medium">Confirm Dialog</h4>
                <Codepreview
                  preview={<ConfirmDialogDemo />}
                  code={confirmCode}
                />
              </div>

              <div>
                <h4 className="mb-2 font-medium">Form Dialog</h4>
                <Codepreview preview={<FormDialogDemo />} code={formCode} />
              </div>

              <div>
                <h4 className="mb-2 font-medium">Full-screen Dialog</h4>
                <Codepreview
                  preview={<FullscreenDialogDemo />}
                  code={fullscreenCode}
                />
              </div>
            </div>
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={dialogProps} />
        </div>
      </DocSection>
    </>
  )
}

export default NeoDialogDocPage

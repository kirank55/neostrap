import type { PropDefinition } from "@/components/PropsTable"

/**
 * Props table definitions for the NeoDialog component documentation.
 */
export const DIALOG_PROPS: PropDefinition[] = [
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

/**
 * CLI installation command using shadcn registry.
 */
export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neodialog.json`

/**
 * Basic usage code example for the dialog component.
 */
export const DIALOG_USAGE_CODE = `import { NeoButton } from "@/components/ui/NeoButton"
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

/**
 * Confirm dialog example code.
 */
export const CONFIRM_DIALOG_CODE = `function ConfirmDialogDemo() {
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

/**
 * Form dialog example code.
 */
export const FORM_DIALOG_CODE = `function FormDialogDemo() {
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

/**
 * Fullscreen dialog example code.
 */
export const FULLSCREEN_DIALOG_CODE = `function FullscreenDialogDemo() {
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

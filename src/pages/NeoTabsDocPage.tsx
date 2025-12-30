import { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent } from "@/components/ui/NeoTabs"
import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable, { type PropDefinition } from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface } from "@/components/docs/Showcase"
import DocPageHeader from "@/components/docs/DocPageHeader"

const tabsProps: PropDefinition[] = [
    {
        name: "defaultValue",
        type: "string",
        default: "N/A",
        description: "The value of the tab that should be active when initially rendered.",
    },
    {
        name: "value",
        type: "string",
        default: "N/A",
        description: "The controlled value of the tab to activate.",
    },
    {
        name: "onValueChange",
        type: "(value: string) => void",
        default: "N/A",
        description: "Event handler called when the value changes.",
    },
    {
        name: "className",
        type: "string (optional)",
        default: "N/A",
        description: "Additional CSS classes to apply to the tabs container.",
    },
]

const tabsTriggerProps: PropDefinition[] = [
    {
        name: "value",
        type: "string",
        default: "N/A",
        description: "A unique value that associates the trigger with a content.",
    },
    {
        name: "disabled",
        type: "boolean",
        default: "false",
        description: "When true, prevents the user from interacting with the tab.",
    },
    {
        name: "className",
        type: "string (optional)",
        default: "N/A",
        description: "Additional CSS classes to apply to the trigger.",
    },
]

const tabsCode = `import { NeoTabs, NeoTabsList, NeoTabsTrigger, NeoTabsContent } from "@/components/ui/NeoTabs"

export function TabsDemo() {
  return (
    <NeoTabs defaultValue="account" className="w-[400px]">
      <NeoTabsList>
        <NeoTabsTrigger value="account">Account</NeoTabsTrigger>
        <NeoTabsTrigger value="password">Password</NeoTabsTrigger>
      </NeoTabsList>
      <NeoTabsContent value="account">
        <p>Make changes to your account here.</p>
      </NeoTabsContent>
      <NeoTabsContent value="password">
        <p>Change your password here.</p>
      </NeoTabsContent>
    </NeoTabs>
  )
}`

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neotabs.json`

function NeoTabsDocPage() {
    return (
        <>
            <DocSection id="overview">
                <DocPageHeader
                    category="Tabs"
                    title="Neostrap UI Tabs"
                    description="A set of layered sections of content that display one panel at a time."
                />
                <Codepreview
                    preview={
                        <NeoTabs defaultValue="tab1" className="w-full max-w-md">
                            <NeoTabsList className="w-full border-0">
                                <NeoTabsTrigger value="tab1">Overview</NeoTabsTrigger>
                                <NeoTabsTrigger value="tab2">Features</NeoTabsTrigger>
                                <NeoTabsTrigger value="tab3">Settings</NeoTabsTrigger>
                            </NeoTabsList>
                            <NeoTabsContent value="tab1" className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0_#000]">
                                <h3 className="font-bold text-lg mb-2">Overview</h3>
                                <p className="text-black/70">Welcome to NeoStrap Tabs. Click on other tabs to explore.</p>
                            </NeoTabsContent>
                            <NeoTabsContent value="tab2" className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0_#000]">
                                <h3 className="font-bold text-lg mb-2">Features</h3>
                                <p className="text-black/70">Neo-brutalist styling with bold shadows and clean design.</p>
                            </NeoTabsContent>
                            <NeoTabsContent value="tab3" className="p-4 border-2 border-black rounded-lg bg-white shadow-[4px_4px_0_#000]">
                                <h3 className="font-bold text-lg mb-2">Settings</h3>
                                <p className="text-black/70">Configure your preferences here.</p>
                            </NeoTabsContent>
                        </NeoTabs>
                    }
                    code={tabsCode}
                />
            </DocSection>

            <DocSection id="installation" title="Installation">
                <ShowcaseSurface>
                    <CodeBlock code={installCode} highlightCode={false} />
                </ShowcaseSurface>
            </DocSection>

            <DocSection id="usage" title="Usage Examples">
                <ShowcaseSurface>
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-bold mb-4">Default Tabs</h3>
                            <NeoTabs defaultValue="first" className="w-full">
                                <NeoTabsList className="border-0">
                                    <NeoTabsTrigger value="first">First</NeoTabsTrigger>
                                    <NeoTabsTrigger value="second">Second</NeoTabsTrigger>
                                    <NeoTabsTrigger value="third">Third</NeoTabsTrigger>
                                </NeoTabsList>
                                <NeoTabsContent value="first">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-baby-blue)">
                                        First tab content
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="second">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-lavender)">
                                        Second tab content
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="third">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-(--color-amber)">
                                        Third tab content
                                    </div>
                                </NeoTabsContent>
                            </NeoTabs>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">With Disabled Tab</h3>
                            <NeoTabs defaultValue="enabled" className="w-full">
                                <NeoTabsList className="border-0">
                                    <NeoTabsTrigger value="enabled">Enabled</NeoTabsTrigger>
                                    <NeoTabsTrigger value="disabled" disabled>Disabled</NeoTabsTrigger>
                                    <NeoTabsTrigger value="another">Another</NeoTabsTrigger>
                                </NeoTabsList>
                                <NeoTabsContent value="enabled">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_#000]">
                                        This tab is enabled and interactive.
                                    </div>
                                </NeoTabsContent>
                                <NeoTabsContent value="another">
                                    <div className="p-4 mt-2 border-2 border-black rounded-lg bg-white shadow-[3px_3px_0_#000]">
                                        Another enabled tab.
                                    </div>
                                </NeoTabsContent>
                            </NeoTabs>
                        </div>
                    </div>
                </ShowcaseSurface>
            </DocSection>

            <DocSection id="props" title="NeoTabs Props">
                <div className="py-4">
                    <PropsTable props={tabsProps} />
                </div>
            </DocSection>

            <DocSection id="trigger-props" title="NeoTabsTrigger Props">
                <div className="py-4">
                    <PropsTable props={tabsTriggerProps} />
                </div>
            </DocSection>
        </>
    )
}

export default NeoTabsDocPage

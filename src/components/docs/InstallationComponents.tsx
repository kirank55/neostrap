import * as React from "react"
import { CodeBlock } from "@/components/CodeDemo"
import {
    NeoTabs,
    NeoTabsList,
    NeoTabsTrigger,
    NeoTabsContent,
} from "@/components/ui/NeoTabs"
import DocSection from "@/components/docs/DocSection"
import { ShowcaseSurface } from "@/components/docs/Showcase"

// ============================================================================
// Types
// ============================================================================

export interface InstallationStepProps {
    step: number
    title: string
    description?: React.ReactNode
    children: React.ReactNode
}

export interface InstallationTabsProps {
    cliCode: string
    children: React.ReactNode // The manual installation guide content
}

// ============================================================================
// Components
// ============================================================================

/**
 * Standard inline code styling for documentation.
 */
export function InlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="px-1.5 py-0.5 bg-muted rounded text-sm">{children}</code>
    )
}

/**
 * A single step in the manual installation guide.
 */
export function InstallationStep({
    step,
    title,
    description,
    children,
}: InstallationStepProps) {
    return (
        <div className="space-y-2">
            <h3 className="text-lg font-semibold">
                Step {step}: {title}
            </h3>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
            {children}
        </div>
    )
}

/**
 * Wrapper for the installation section that handles the CLI/Manual tabs.
 */
export function InstallationTabs({ cliCode, children }: InstallationTabsProps) {
    return (
        <DocSection id="installation" title="Installation">
            <ShowcaseSurface>
                <NeoTabs defaultValue="cli" className="w-full">
                    <NeoTabsList className="w-full flex justify-start items-center gap-8 border-0">
                        <NeoTabsTrigger value="cli">CLI</NeoTabsTrigger>
                        <NeoTabsTrigger value="manual">Manual</NeoTabsTrigger>
                    </NeoTabsList>

                    <NeoTabsContent value="cli">
                        <CodeBlock code={cliCode} highlightCode={false} />
                    </NeoTabsContent>

                    <NeoTabsContent value="manual">
                        <div className="space-y-4">{children}</div>
                    </NeoTabsContent>
                </NeoTabs>
            </ShowcaseSurface>
        </DocSection>
    )
}

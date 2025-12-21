import { useState } from "react"
import { Copy, Check } from "lucide-react"
import NeoButton from "@/components/ui/NeoButton"

type CodeBlockProps = {
  code: string
  language?: string
}

function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border/60 bg-slate-900 p-4 text-sm text-slate-100 relative shadow-[3px_3px_0_#000]">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded hover:bg-slate-800 transition-colors"
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
          <Check className="size-4 text-green-400" />
        ) : (
          <Copy className="size-4 text-slate-400 hover:text-slate-300" />
        )}
      </button>
      <pre className="font-mono pr-8">
        <code>{code}</code>
      </pre>
    </div>
  )
}

type CodepreviewProps = {
  code: string
  preview: React.ReactNode
  language?: string
}

function Codepreview({ code, preview, language = "tsx" }: CodepreviewProps) {
  const [mode, setMode] = useState<"preview" | "code">("preview")

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6 pt-4 pb-1">
        <NeoButton
          size="sm"
          variant={mode === "preview" ? "brutal" : "outline"}
          onClick={() => setMode("preview")}
        >
          Preview
        </NeoButton>
        <NeoButton
          size="sm"
          variant={mode === "code" ? "brutal" : "outline"}
          onClick={() => setMode("code")}
        >
          Code
        </NeoButton>
      </div>

      {mode === "preview" && (
        <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
          <div className="flex justify-center">{preview}</div>
        </div>
      )}

      {mode === "code" && (
        <CodeBlock code={code} language={language} />
      )}
    </div>
  )
}

export { Codepreview, CodeBlock }

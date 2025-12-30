import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { NeoButton } from "@/components/ui/NeoButton";
import { highlight } from "sugar-high";

type CodeBlockProps = {
  code: string;
  highlightCode?: boolean;
  language?: string;
};

function CodeBlock({ code, highlightCode = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  const shouldTruncate = code.length > 400;
  const displayCode = shouldTruncate && !isExpanded ? code.slice(0, 400) + "..." : code;
  const highlightedCode = highlight(displayCode);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleExpand = () => {
    if (isExpanded) {
      // Scroll to top before collapsing with offset
      const element = codeContainerRef.current;
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 200; // 200px offset from top

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Use setTimeout to ensure scroll completes before state change
      setTimeout(() => setIsExpanded(false), 100);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className="w-full"
      ref={codeContainerRef}
    >
      <div
        className={`w-full rounded-lg border border-border/60 bg-slate-900 p-4 text-sm text-slate-100 relative shadow-[3px_3px_0_#000] 
        ${shouldTruncate && !isExpanded ? "max-h-[250px] overflow-hidden" : "overflow-x-auto"}`}>
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

          {
            highlightCode ? (
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            ) : (
              <code>{displayCode}</code>
            )
          }
        </pre>

        {shouldTruncate && (<div className={` absolute bottom-0 left-0 right-0 z-20 flex justify-center items-end pb-4 h-24 
            ${!isExpanded
            ? "bg-linear-to-t from-slate-900 via-slate-900/80 to-transparent"
            : "relative h-auto pt-4 bg-transparent"}`}
        >         <NeoButton
          size="sm"
          onClick={handleToggleExpand}
          className="cursor-pointer"
          variant="outline"
        >
            {isExpanded ? "Show Less" : "Read More"}
          </NeoButton>
        </div>
        )}

      </div>


    </div>
  );
}

type CodepreviewProps = {
  code: string;
  preview: React.ReactNode;
  language?: string;
};

function Codepreview({ code, preview, language = "tsx" }: CodepreviewProps) {
  const [mode, setMode] = useState<"preview" | "code">("preview");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-6 pt-4 pb-1">
        <NeoButton
          size="sm"
          // variant={mode === "preview" ? "brutal" : "brutal"}
          onClick={() => setMode("preview")}
          className={mode === "preview" ? "shadow-none hover:translate-0" : "bg-white cursor-pointer"}
        >
          Preview
        </NeoButton>
        <NeoButton
          size="sm"
          // variant={mode === "code" ? "brutal" : "brutal"}
          onClick={() => setMode("code")}
          className={mode === "code" ? "shadow-none hover:translate-0" : "bg-white cursor-pointer"}
        >
          Code
        </NeoButton>
      </div>

      {mode === "preview" && (
        <div className="rounded-xl my-3 p-8 shadow-sm border-3 border-black">
          <div className="flex justify-center">{preview}</div>
        </div>
      )}

      {mode === "code" && <CodeBlock code={code} language={language} />}
    </div>
  );
}

export { Codepreview, CodeBlock };

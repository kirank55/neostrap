import { CodeBlock, Codepreview } from "@/components/CodeDemo";
import DocPageHeader from "@/components/docs/DocPageHeader";
import DocSection from "@/components/docs/DocSection";

import { InlineWrap, ShowcaseSurface } from "@/components/docs/Showcase";

import NeoSwitch, {
  variantOptions,
  sizeOptions,
} from "@/components/ui/NeoSwitch";
import PropsTable, { type PropDefinition } from "@/components/PropsTable";

const installCode = `npx shadcn@latest add https://neostrapui.pages.dev/r/neoswitch.json`;

const switchProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"brutal" | "outline" | "inverter" | "disabled" | "danger" | "success"',
    default: '"brutal"',
    description: "The visual style variant of the switch.",
  },
  {
    name: "size",
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: "The size of the switch.",
  },
  {
    name: "disabled",
    type: "boolean (optional)",
    default: "false",
    description:
      'Whether the switch is disabled. You can also set variant="disabled".',
  },
  {
    name: "className",
    type: "string (optional)",
    default: "N/A",
    description: "Additional CSS classes to apply to the switch.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void (optional)",
    default: "N/A",
    description: "Callback when checked state changes.",
  },
];

const switchCode = `import NeoSwitch from "@/components/ui/NeoSwitch

export function SwitchDemo() {
  return <NeoSwitch>Toggle me</NeoSwitch>
}`


function NeoSwitchDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Switch"
          title="Neostrap UI Switch"
          description="Neo-brutalist primary switch plus all variants and sizes."
        />
        <Codepreview
          preview={<NeoSwitch>Punch Me</NeoSwitch>}
          code={switchCode}
        />
      </DocSection>

      <DocSection id="installation" title="Installation">
        <CodeBlock code={installCode} />
      </DocSection>

      <DocSection id="variants" title="Variants">
        <ShowcaseSurface>
          <InlineWrap>
            {variantOptions.map(({ variant, label, disabled = false }) => (
              <div key={variant} className="flex items-center gap-2 flex-col">
                <NeoSwitch variant={variant} disabled={disabled} />
                <span>{label}</span>
              </div>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="sizes" title="Sizes">
        <ShowcaseSurface>
          <InlineWrap>
            {sizeOptions.map(({ size, label }) => (
              <div key={size} className="flex items-center gap-2">
                <NeoSwitch size={size} />
                <span>{label}</span>
              </div>
            ))}
          </InlineWrap>
        </ShowcaseSurface>
      </DocSection>

      <DocSection id="props" title="Props">
        <div className="py-4">
          <PropsTable props={switchProps} />
        </div>
      </DocSection>
    </>
  );
}

export default NeoSwitchDocPage;

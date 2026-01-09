import { Codepreview, CodeBlock } from "@/components/CodeDemo"
import PropsTable from "@/components/PropsTable"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import {
  ShowcaseSurface,
  InlineWrap,
  LabeledItem,
} from "@/components/docs/Showcase"
import {
  InstallationTabs,
  InstallationStep,
  InlineCode,
} from "@/components/docs/InstallationComponents"

import {
  CAROUSEL_PROPS,
  CAROUSEL_USAGE_CODE,
  INSTALL_CLI_CODE,
  INSTALL_DEPENDENCIES_CODE,
  CAROUSEL_COMPONENT_CODE,
  UTILS_CODE,
} from "./constants"

import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselIndicators,
} from "@/components/ui/NeoCarousel"

function DemoCarousel({ ...props }: React.ComponentProps<typeof Carousel>) {
  return (
    <Carousel className="w-full max-w-xl" {...props}>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
          <div className="h-75 bg-linear-to-br from-pink-300 to-purple-400 flex items-center justify-center text-black font-bold">Slide 1</div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-75 bg-linear-to-br from-green-200 to-lime-300 flex items-center justify-center text-black font-bold">Slide 2</div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-75 bg-linear-to-br from-sky-200 to-indigo-300 flex items-center justify-center text-black font-bold">Slide 3</div>
        </CarouselItem>
      </CarouselContent>
        <CarouselIndicators />
      <CarouselNext />
    </Carousel>
  )
}

function ExamplesSection() {
  return (
    <DocSection id="examples" title="Examples">
      <ShowcaseSurface>
        <InlineWrap>
          <LabeledItem label="Basic" widthClass="w-full max-w-xl">
            <div className="flex justify-center">
              <DemoCarousel />
            </div>
          </LabeledItem>

          <LabeledItem label="Autoplay" widthClass="w-full max-w-xl">
            <div className="flex justify-center">
              <DemoCarousel interval={1000} autoplay />
            </div>
          </LabeledItem>

          <LabeledItem label="Without Loop" widthClass="w-full max-w-xl">
            <div className="flex justify-center">
              <DemoCarousel opts={{ loop: false }} />
            </div>
          </LabeledItem>
        </InlineWrap>
      </ShowcaseSurface>
    </DocSection>
  )
}

function PropsSection() {
  return (
    <DocSection id="props" title="Carousel Props">
      <div className="py-4">
        <PropsTable props={CAROUSEL_PROPS} />
      </div>
    </DocSection>
  )
}

export default function NeoCarouselDocPage() {
  return (
    <>
      <DocSection id="overview">
        <DocPageHeader
          category="Carousel"
          title="Neostrap UI Carousel"
          description="Carousel component for cycling through slides with autoplay, indicators, and keyboard navigation support."
        />
        <Codepreview preview={<DemoCarousel />} code={CAROUSEL_USAGE_CODE} />
      </DocSection>

      <InstallationTabs cliCode={INSTALL_CLI_CODE}>
        <div className="space-y-4">
          <InstallationStep
            step={1}
            title="Copy the component code"
            description={
              <>
                Create a new file at <InlineCode>src/components/ui/NeoCarousel.tsx</InlineCode> and copy
                the following code:
              </>
            }
          >
            <CodeBlock code={CAROUSEL_COMPONENT_CODE} />
          </InstallationStep>

          <InstallationStep step={2} title="Install dependencies" description="Make sure you have the required dependencies installed:">
            <CodeBlock code={INSTALL_DEPENDENCIES_CODE} highlightCode={false} />
          </InstallationStep>

          <InstallationStep
            step={3}
            title="Add the utility function"
            description={
              <>
                Ensure you have the <InlineCode>cn</InlineCode> utility at <InlineCode>src/lib/utils.ts</InlineCode>:
              </>
            }
          >
            <CodeBlock code={UTILS_CODE} />
          </InstallationStep>
        </div>
      </InstallationTabs>

      <ExamplesSection />
      <PropsSection />
    </>
  )
}

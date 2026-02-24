import { Link } from "react-router-dom"
import DocSection from "@/components/docs/DocSection"
import DocPageHeader from "@/components/docs/DocPageHeader"
import { NeoButton } from "@/components/ui/NeoButton"

const COMPONENT_NAMES = [
  "Essential",
  "NeoAnimatedTooltip",
  "NeoCarousel",
  "NeoTabs",
  "NeoViewSwitch",
] as const

function ExploreDocPage() {
  return (
    <DocSection id="explore">
      <DocPageHeader
        category="Overview"
        title="Explore Components"
        description="All components listed in one simple grid."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENT_NAMES.map((componentName) => (
          <NeoButton
            key={componentName}
            asChild
            variant="brutal"
            className="bg-white w-full justify-center py-6 text-base font-bold"
          >
            <Link to={`/docs/${componentName}`}>{componentName}</Link>
          </NeoButton>
        ))}
      </div>
    </DocSection>
  )
}

export default ExploreDocPage

export const INSTALL_CLI_CODE = `npx shadcn@latest add https://neostrapui.pages.dev/r/neocarousel.json`

export const INSTALL_DEPENDENCIES_CODE = `# No extra dependencies required for the placeholder carousel implementation.`

export const UTILS_CODE = `// src/lib/utils.ts
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}`

export const CAROUSEL_USAGE_CODE = `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from 'src/components/ui/NeoCarousel'

export default function Demo() {
  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem><div className="h-40">Slide 1</div></CarouselItem>
        <CarouselItem><div className="h-40">Slide 2</div></CarouselItem>
        <CarouselItem><div className="h-40">Slide 3</div></CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}`

export const CAROUSEL_COMPONENT_CODE = `import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './NeoCarousel'

export default function MyCarousel() {
  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem><div className="h-40">Slide A</div></CarouselItem>
        <CarouselItem><div className="h-40">Slide B</div></CarouselItem>
        <CarouselItem><div className="h-40">Slide C</div></CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}`

export const CAROUSEL_PROPS = [
  { name: 'slides', type: 'React.ReactNode[]', default: '[]', description: 'Array of slide nodes to render.' },
  { name: 'autoplay', type: 'boolean', default: 'false', description: 'Enable automatic slide advancing.' },
  { name: 'interval', type: 'number', default: '3000', description: 'Autoplay interval in milliseconds.' },
]

export const VARIANT_OPTIONS = [
  { variant: 'basic', label: 'Basic' },
  { variant: 'autoplay', label: 'Autoplay' },
  { variant: 'controlled', label: 'Controlled' },
]

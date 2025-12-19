/**
 * Neostrap UI Components
 * A React component library built on shadcn/ui with neo-brutalist design
 *
 * Import options:
 * 1. Scoped (recommended for mixed shadcn + Neostrap projects):
 *    import { Neostrap } from '@/components/ui'
 *    <Neostrap.Button variant="brutal">Click</Neostrap.Button>
 *
 * 2. Direct (when using only Neostrap):
 *    import { Button } from '@/components/ui'
 *    <Button variant="brutal">Click</Button>
 */

// Scoped namespace - use when mixing with other UI libraries
export * as Neostrap from "./neostrap-exports"

// Direct exports - use when using only Neostrap
export { Button, buttonVariants } from "./button"
export type { ButtonProps } from "./button"

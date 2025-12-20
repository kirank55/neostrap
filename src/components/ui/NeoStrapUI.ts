/**
 * Neostrap UI Components
 * A React component library built on shadcn/ui with neo-brutalist design
 *
 * Import options:
 * 1. Scoped (recommended for mixed shadcn + Neostrap projects):
 *    import { Neostrap } from '@/components/ui/NeoStrapUI'
 *    <Neostrap.Button variant="brutal">Click</Neostrap.Button>
 *
 * 2. Direct (when using only Neostrap):
 *    import { Button } from '@/components/ui/NeoStrapUI'
 *    <Button variant="brutal">Click</Button>
 */

import { Button, buttonVariants } from "./button"
import type { ButtonProps } from "./button"

// Scoped namespace - use when mixing with other UI libraries
export const Neostrap = {
  Button,
}

// Direct exports - use when using only Neostrap
export { Button, buttonVariants }
export type { ButtonProps }

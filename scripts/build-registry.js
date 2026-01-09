#!/usr/bin/env node

/**
 * Build Registry - Generate component registry files for publishing
 * Converts source components into registry format for public/r distribution
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const publicRegistryDir = path.join(rootDir, 'public', 'r')

// Ensure public/r directory exists
if (!fs.existsSync(publicRegistryDir)) {
  fs.mkdirSync(publicRegistryDir, { recursive: true })
}

const components = [
  {
    name: 'neobutton',
    sourcePath: 'src/components/ui/NeoButton.tsx',
    targetPath: 'components/ui/NeoButton.tsx',
    title: 'NeoButton',
    description: 'Neo-brutalist button with multiple variants and sizes.',
    dependencies: [
      '@radix-ui/react-slot',
      'class-variance-authority'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neoaccordion',
    sourcePath: 'src/components/ui/NeoAccordion.tsx',
    targetPath: 'components/ui/NeoAccordion.tsx',
    title: 'NeoAccordion',
    description: 'Neo-brutalist accordion component with collapsible sections.',
    dependencies: [
      '@radix-ui/react-accordion',
      'class-variance-authority',
      'lucide-react'
    ],
    registryDependencies: ['utils'],
    cssVars: {
      theme: {
        '--animate-accordion-down': 'accordion-down 0.2s ease-out',
        '--animate-accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
    css: {
      '@keyframes accordion-down': {
        'from': 'height: 0;',
        'to': 'height: var(--radix-accordion-content-height);'
      },
      '@keyframes accordion-up': {
        'from': 'height: var(--radix-accordion-content-height);',
        'to': 'height: 0;'
      }
    }
  },
  {
    name: 'neocard',
    sourcePath: 'src/components/ui/NeoCard.tsx',
    targetPath: 'components/ui/NeoCard.tsx',
    title: 'NeoCard',
    description: 'Neo-brutalist card component with multiple layouts and variants.',
    dependencies: [
      'class-variance-authority'
    ],
    registryDependencies: ['utils', 'neobutton']
  },
  {
    name: 'neocarousel',
    sourcePath: 'src/components/ui/NeoCarousel.tsx',
    targetPath: 'components/ui/NeoCarousel.tsx',
    title: 'NeoCarousel',
    description: 'Neo-brutalist carousel component with autoplay and controls.',
    dependencies: [],
    registryDependencies: ['utils']
  },
  {
    name: 'neodialog',
    sourcePath: 'src/components/ui/NeoDialog.tsx',
    targetPath: 'components/ui/NeoDialog.tsx',
    title: 'NeoDialog',
    description: 'Neo-brutalist dialog/modal component with overlay.',
    dependencies: [
      '@radix-ui/react-dialog',
      'lucide-react'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neodropdown',
    sourcePath: 'src/components/ui/NeoDropdown.tsx',
    targetPath: 'components/ui/NeoDropdown.tsx',
    title: 'NeoDropdown',
    description: 'Neo-brutalist dropdown menu with multiple variants.',
    dependencies: [
      '@radix-ui/react-dropdown-menu',
      'class-variance-authority',
      'lucide-react'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neoinput',
    sourcePath: 'src/components/ui/NeoInput.tsx',
    targetPath: 'components/ui/NeoInput.tsx',
    title: 'NeoInput',
    description: 'Neo-brutalist input component with multiple variants and sizes.',
    dependencies: [
      'class-variance-authority'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neoselect',
    sourcePath: 'src/components/ui/NeoSelect.tsx',
    targetPath: 'components/ui/NeoSelect.tsx',
    title: 'NeoSelect',
    description: 'Neo-brutalist select dropdown component.',
    dependencies: [
      '@radix-ui/react-select',
      'class-variance-authority',
      'lucide-react'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neoswitch',
    sourcePath: 'src/components/ui/NeoSwitch.tsx',
    targetPath: 'components/ui/NeoSwitch.tsx',
    title: 'NeoSwitch',
    description: 'Neo-brutalist switch toggle component with multiple variants.',
    dependencies: [
      '@radix-ui/react-switch',
      'class-variance-authority'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'neotabs',
    sourcePath: 'src/components/ui/NeoTabs.tsx',
    targetPath: 'components/ui/NeoTabs.tsx',
    title: 'NeoTabs',
    description: 'Neo-brutalist tabs component with GSAP animations.',
    dependencies: [
      '@radix-ui/react-tabs',
      'gsap',
      '@gsap/react'
    ],
    registryDependencies: ['utils']
  },
  {
    name: 'utils',
    sourcePath: 'src/lib/utils.ts',
    targetPath: 'lib/utils.ts',
    title: 'Utils',
    description: 'Shared utility helpers for NeoStrap (e.g., cn)',
    dependencies: [
      'clsx',
      'tailwind-merge'
    ]
  }
]

function readSourceFile(relativePath) {
  const fullPath = path.join(rootDir, relativePath)
  if (!fs.existsSync(fullPath)) {
    console.error(`Source file not found: ${fullPath}`)
    return null
  }
  return fs.readFileSync(fullPath, 'utf-8')
}

function generateRegistryFile(component) {
  const content = readSourceFile(component.sourcePath)
  if (!content) return null

  const registry = {
    '$schema': 'https://ui.shadcn.com/schema/registry-item.json',
    name: component.name,
    type: component.name === 'utils' ? 'registry:lib' : 'registry:ui',
    title: component.title,
    description: component.description,
    dependencies: component.dependencies || [],
    registryDependencies: component.registryDependencies || []
  }

  // Add CSS variables if present
  if (component.cssVars) {
    registry.cssVars = component.cssVars
  }

  // Add CSS rules if present
  if (component.css) {
    registry.css = component.css
  }

  // Add files
  registry.files = [
    {
      path: component.targetPath,
      type: component.name === 'utils' ? 'registry:file' : 'registry:ui',
      ...(component.name === 'utils' ? { target: component.targetPath } : {}),
      content: content
    }
  ]

  return registry
}

function buildRegistry() {
  console.log('Building component registry...')
  
  const builtComponents = []
  
  for (const component of components) {
    console.log(`Processing ${component.name}...`)
    
    const registryData = generateRegistryFile(component)
    if (!registryData) {
      console.error(`Failed to process ${component.name}`)
      continue
    }
    
    // Write individual component registry file
    const outputPath = path.join(publicRegistryDir, `${component.name}.json`)
    fs.writeFileSync(outputPath, JSON.stringify(registryData, null, 2))
    console.log(`Generated ${outputPath}`)
    
    builtComponents.push({
      name: component.name,
      path: `r/${component.name}.json`,
      description: component.description
    })
  }
  
  // Generate index file for all components
  const indexData = {
    components: builtComponents,
    version: '1.0.0',
    registry: '@neostrap/ui',
    description: 'Neo-brutalist UI components registry'
  }
  
  const indexPath = path.join(publicRegistryDir, 'index.json')
  fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2))
  console.log(`Generated registry index: ${indexPath}`)
  
  console.log(`Registry build complete! Generated ${builtComponents.length} components`)
}

console.log('Script loaded!')
console.log('import.meta.url:', import.meta.url)
console.log('process.argv[1]:', process.argv[1])

// Always run the build
buildRegistry()

export { buildRegistry }
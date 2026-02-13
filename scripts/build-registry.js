#!/usr/bin/env node

/**
 * Build Registry - Generate component registry files for publishing
 * Dynamically discovers Neo UI components and generates shadcn registry files.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const uiDir = path.join(srcDir, 'components', 'ui')
const utilsPath = path.join(srcDir, 'lib', 'utils.ts')
const publicRegistryDir = path.join(rootDir, 'public', 'r')

const EXTERNAL_DEP_IGNORES = new Set(['react', 'react-dom'])

const COMPONENT_OVERRIDES = {
  neobutton: {
    description: 'Neo-brutalist button with multiple variants and sizes.'
  },
  neoaccordion: {
    description: 'Neo-brutalist accordion component with collapsible sections.',
    cssVars: {
      theme: {
        '--animate-accordion-down': 'accordion-down 0.2s ease-out',
        '--animate-accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
    css: {
      '@keyframes accordion-down': {
        from: 'height: 0;',
        to: 'height: var(--radix-accordion-content-height);'
      },
      '@keyframes accordion-up': {
        from: 'height: var(--radix-accordion-content-height);',
        to: 'height: 0;'
      }
    }
  },
  neocard: {
    description: 'Neo-brutalist card component with multiple layouts and variants.'
  },
  neocarousel: {
    description: 'Carousel component with autoplay, indicators, and keyboard navigation.'
  },
  neodialog: {
    description: 'Neo-brutalist dialog/modal component with overlay.'
  },
  neodropdown: {
    description: 'Neo-brutalist dropdown menu with multiple variants.'
  },
  neoinput: {
    description: 'Neo-brutalist input component with multiple variants and sizes.'
  },
  neoselect: {
    description: 'Neo-brutalist select dropdown component.'
  },
  neoswitch: {
    description: 'Neo-brutalist switch toggle component with multiple variants.'
  },
  neotabs: {
    description: 'Neo-brutalist tabs component with GSAP animations.'
  },
  utils: {
    description: 'Shared utility helpers for NeoStrap (e.g., cn)'
  }
}

function ensureRegistryDir() {
  if (!fs.existsSync(publicRegistryDir)) {
    fs.mkdirSync(publicRegistryDir, { recursive: true })
  }
}

function readSourceFile(fullPath) {
  if (!fs.existsSync(fullPath)) {
    console.error(`Source file not found: ${fullPath}`)
    return null
  }
  return fs.readFileSync(fullPath, 'utf-8')
}

function toRegistryName(componentFileName) {
  return componentFileName.replace(/\.[^.]+$/, '').toLowerCase()
}

function packageNameFromImport(specifier) {
  if (specifier.startsWith('@')) {
    const [scope, name] = specifier.split('/')
    return scope && name ? `${scope}/${name}` : specifier
  }

  return specifier.split('/')[0]
}

function inferExternalDependencies(content) {
  const deps = new Set()
  const importRegex = /from\s+["']([^"']+)["']/g

  for (const match of content.matchAll(importRegex)) {
    const rawSpecifier = match[1]
    if (rawSpecifier.startsWith('.') || rawSpecifier.startsWith('@/')) {
      continue
    }

    const dep = packageNameFromImport(rawSpecifier)
    if (!EXTERNAL_DEP_IGNORES.has(dep)) {
      deps.add(dep)
    }
  }

  return [...deps].sort()
}

function inferRegistryDependencies(content, currentComponentName) {
  const registryDeps = new Set()

  if (content.includes('from "@/lib/utils"') || content.includes("from '@/lib/utils'")) {
    registryDeps.add('utils')
  }

  const uiImportRegex = /from\s+["']@\/components\/ui\/([^"']+)["']/g
  for (const match of content.matchAll(uiImportRegex)) {
    const imported = match[1].replace(/\.[^.]+$/, '').toLowerCase()
    if (imported && imported !== currentComponentName) {
      registryDeps.add(imported)
    }
  }

  return [...registryDeps].sort()
}

function getDynamicComponents() {
  const components = []

  components.push({
    name: 'utils',
    title: 'Utils',
    sourcePath: utilsPath,
    targetPath: 'lib/utils.ts',
    type: 'registry:lib'
  })

  if (!fs.existsSync(uiDir)) {
    return components
  }

  const files = fs.readdirSync(uiDir)
    .filter((file) => /^Neo[A-Za-z0-9]+\.tsx$/.test(file))
    .sort()

  for (const file of files) {
    const fullPath = path.join(uiDir, file)
    const title = file.replace('.tsx', '')
    const name = toRegistryName(file)

    components.push({
      name,
      title,
      sourcePath: fullPath,
      targetPath: `components/ui/${file}`,
      type: 'registry:ui'
    })
  }

  return components
}

function generateRegistryFile(component) {
  const content = readSourceFile(component.sourcePath)
  if (!content) return null

  const override = COMPONENT_OVERRIDES[component.name] ?? {}

  const inferredDependencies = inferExternalDependencies(content)
  const inferredRegistryDependencies = inferRegistryDependencies(content, component.name)

  const registry = {
    '$schema': 'https://ui.shadcn.com/schema/registry-item.json',
    name: component.name,
    type: component.type,
    title: component.title,
    description: override.description ?? `${component.title} component for NeoStrap UI.`,
    dependencies: inferredDependencies,
    registryDependencies: inferredRegistryDependencies
  }

  // Add CSS variables if present
  if (override.cssVars) {
    registry.cssVars = override.cssVars
  }

  // Add CSS rules if present
  if (override.css) {
    registry.css = override.css
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
  ensureRegistryDir()
  console.log('Building component registry...')
  
  const builtComponents = []
  const components = getDynamicComponents()
  
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
      description: registryData.description
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

buildRegistry()

export { buildRegistry }
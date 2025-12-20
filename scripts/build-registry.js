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
    name: 'button',
    sourcePath: 'src/components/ui/button.tsx',
    targetPath: 'components/ui/button.tsx',
    description: 'Neo-brutalist button with brutal variant as default',
    dependencies: [
      'react',
      '@radix-ui/react-slot',
      'class-variance-authority'
    ],
    peerDependencies: {
      'tailwindcss': '^4.0.0 || ^3.0.0'
    }
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

  return {
    type: 'registry:component',
    name: `@neostrap/${component.name}`,
    description: component.description,
    dependencies: component.dependencies,
    peerDependencies: component.peerDependencies,
    files: [
      {
        type: 'registry:file',
        path: component.targetPath,
        target: component.targetPath,
        content: content
      }
    ]
  }
}

function buildRegistry() {
  console.log('🔨 Building component registry...')
  
  const builtComponents = []
  
  for (const component of components) {
    console.log(`📦 Processing ${component.name}...`)
    
    const registryData = generateRegistryFile(component)
    if (!registryData) {
      console.error(`❌ Failed to process ${component.name}`)
      continue
    }
    
    // Write individual component registry file
    const outputPath = path.join(publicRegistryDir, `${component.name}.json`)
    fs.writeFileSync(outputPath, JSON.stringify(registryData, null, 2))
    console.log(`✅ Generated ${outputPath}`)
    
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
  console.log(`📋 Generated registry index: ${indexPath}`)
  
  console.log(`✨ Registry build complete! Generated ${builtComponents.length} components`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildRegistry()
}

export { buildRegistry }
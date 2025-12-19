#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { defaultRegistry } from "../registry/index.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function addComponent(componentName: string) {
  const component = defaultRegistry.find((c) => c.name === componentName)

  if (!component) {
    console.error(`Component "${componentName}" not found in registry.`)
    console.log(
      "Available components:",
      defaultRegistry.map((c) => c.name).join(", ")
    )
    process.exit(1)
  }

  console.log(`Adding component: ${componentName}`)

  for (const file of component.files) {
    const filePath = path.resolve(process.cwd(), file.path)
    const dir = path.dirname(filePath)

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Write file
    fs.writeFileSync(filePath, file.content)
    console.log(`✓ Created ${file.path}`)
  }

  console.log(`✓ ${componentName} component added successfully`)
}

const componentName = process.argv[2]

if (!componentName) {
  console.error("Usage: npx @neostrap/cli add <component-name>")
  console.log(
    "Available components:",
    defaultRegistry.map((c) => c.name).join(", ")
  )
  process.exit(1)
}

addComponent(componentName).catch((error) => {
  console.error("Error adding component:", error)
  process.exit(1)
})

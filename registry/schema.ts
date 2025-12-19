export type Registry = {
  name: string
  type: "component:ui" | "component:new" | "hook" | "lib"
  description?: string
  registryDependencies?: string[]
  files: RegistryFile[]
}

export type RegistryFile = {
  path: string
  content: string
}

import "./App.css"
import { NeoButton } from "@/components/ui/NeoButton"

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Neostrap UI Components</h1>

      {/* Neo-brutalist default */}
      <NeoButton>Brutal NeoButton</NeoButton>

      {/* Variant examples */}
      <div className="flex gap-2 flex-wrap">
        <NeoButton variant="default">Default</NeoButton>
        <NeoButton variant="outline">Outline</NeoButton>
        <NeoButton variant="secondary">Secondary</NeoButton>
        <NeoButton variant="ghost">Ghost</NeoButton>
        <NeoButton variant="destructive">Delete</NeoButton>
        <NeoButton variant="link">Link</NeoButton>
      </div>

      {/* Size examples */}
      <div className="flex gap-2 flex-wrap items-center">
        <NeoButton size="sm">Small</NeoButton>
        <NeoButton size="default">Default</NeoButton>
        <NeoButton size="lg">Large</NeoButton>
      </div>
    </div>
  )
}

export default App

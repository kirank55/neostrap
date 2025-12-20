import "./App.css"
import { Button } from "@/components/ui/NeoStrapUI"

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Neostrap UI Components</h1>

      {/* Neo-brutalist default */}
      <Button>Brutal Button</Button>

      {/* Variant examples */}
      <div className="flex gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="link">Link</Button>
      </div>

      {/* Size examples */}
      <div className="flex gap-2 flex-wrap items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}

export default App

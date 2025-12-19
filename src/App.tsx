import "./App.css"
import { Neostrap } from "@/components/ui"

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Neostrap UI Components</h1>

      {/* Neo-brutalist default */}
      <Neostrap.Button>Brutal Button</Neostrap.Button>

      {/* Variant examples */}
      <div className="flex gap-2 flex-wrap">
        <Neostrap.Button variant="default">Default</Neostrap.Button>
        <Neostrap.Button variant="outline">Outline</Neostrap.Button>
        <Neostrap.Button variant="secondary">Secondary</Neostrap.Button>
        <Neostrap.Button variant="ghost">Ghost</Neostrap.Button>
        <Neostrap.Button variant="destructive">Delete</Neostrap.Button>
        <Neostrap.Button variant="link">Link</Neostrap.Button>
      </div>

      {/* Size examples */}
      <div className="flex gap-2 flex-wrap items-center">
        <Neostrap.Button size="sm">Small</Neostrap.Button>
        <Neostrap.Button size="default">Default</Neostrap.Button>
        <Neostrap.Button size="lg">Large</Neostrap.Button>
      </div>
    </div>
  )
}

export default App

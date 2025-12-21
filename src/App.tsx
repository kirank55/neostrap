import { Link, Navigate, Route, Routes } from "react-router-dom"
import { DocRouteLayout } from "@/components/layout/DocRouteLayout"
import { Header } from "@/components/layout/Header"
import { NeoButtonDocPage } from "@/pages/NeoButtonDocPage"
import { NeoSelectDocPage } from "@/pages/NeoSelectDocPage"

function HomePage() {
  return (
    <div className="container w-280 mx-auto text-center flex flex-col gap-6 p-12">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.25em]">
          Neostrap UI
        </p>
        <h1 className="text-3xl font-bold">Component Docs</h1>
        <p className="text-base text-muted-foreground">
          Explore the docs for each component, including variants, sizes, and usage.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/doc/NeoButton"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-amber-300 px-4 py-2 text-base font-semibold shadow-[6px_6px_0_#000] transition-all hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
          >
            Open Button Docs
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/doc/NeoSelect"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-amber-100 px-4 py-2 text-base font-semibold shadow-[6px_6px_0_#000] transition-all hover:-translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_#000] active:translate-x-[1px] active:-translate-y-[1px] active:shadow-[2px_2px_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
          >
            Open Select Docs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doc" element={<DocRouteLayout />}>
          <Route index element={<Navigate to="NeoButton" replace />} />
          <Route path="NeoButton" element={<NeoButtonDocPage />} />
          <Route path="NeoSelect" element={<NeoSelectDocPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App

import { Link } from "react-router-dom";

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
            to="/docs/NeoButton"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-amber-300 px-4 py-2 text-base font-semibold shadow-[6px_6px_0_#000] transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-px active:-translate-y-px active:shadow-[2px_2px_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
          >
            Open Button Docs
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/docs/NeoSelect"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black bg-amber-100 px-4 py-2 text-base font-semibold shadow-[6px_6px_0_#000] transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[4px_4px_0_#000] active:translate-x-px active:-translate-y-px active:shadow-[2px_2px_0_#000] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/20"
          >
            Open Select Docs
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage 
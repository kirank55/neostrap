import React from "react"

type LabeledItemProps = {
  label: string
  children: React.ReactNode
  widthClass?: string
}

export function LabeledItem({ label, children, widthClass = "w-48" }: LabeledItemProps) {
  return (
    <div className={`flex flex-col gap-3 items-center ${widthClass}`}>
      <span className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-black text-white rounded">
        {label}
      </span>
      {children}
    </div>
  )
}

type ShowcaseSurfaceProps = {
  children: React.ReactNode
  type?: "border" | "bg"
}

export function ShowcaseSurface({ children, type = "bg" }: ShowcaseSurfaceProps) {
  if (type === "border") {
    return (
      <div className="rounded-xl p-8 transition-all border-2 border-dashed border-gray-400 bg-gray-50">
        {children}
      </div>
    )
  }

  return (
    <div className="rounded-xl p-8 transition-all border-3 border-black bg-white shadow-[4px_4px_0_#000]">
      {children}
    </div>
  )
}

type InlineWrapProps = {
  children: React.ReactNode
  alignEnd?: boolean
}

export function InlineWrap({ children, alignEnd = false }: InlineWrapProps) {
  return (
    <div className={`flex flex-wrap ${alignEnd ? "items-end" : "items-center"} gap-8 justify-center`}>
      {children}
    </div>
  )
}

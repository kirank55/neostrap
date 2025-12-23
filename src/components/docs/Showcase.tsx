import React from "react"

type LabeledItemProps = {
  label: string
  children: React.ReactNode
  widthClass?: string
}

export function LabeledItem({ label, children, widthClass = "w-48" }: LabeledItemProps) {
  return (
    <div className={`flex flex-col gap-2 ${widthClass}`}>
      <p className="text-sm font-semibold text-center">{label}</p>
      {children}
    </div>
  )
}

type ShowcaseSurfaceProps = {
  children: React.ReactNode
}

export function ShowcaseSurface({ children }: ShowcaseSurfaceProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm">
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
    <div className={`flex flex-wrap ${alignEnd ? "items-end" : "items-center"} justify-center gap-6`}>
      {children}
    </div>
  )
}

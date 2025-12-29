import React from "react"

import { cn } from "@/lib/utils"

type LabeledItemProps = {
  label: string
  children: React.ReactNode
  widthClass?: string
}

export function LabeledItem({ label, children, widthClass = "w-48" }: LabeledItemProps) {
  return (
    <div className={`flex flex-col gap-2 items-center ${widthClass}`}>
      <p className="text-sm font-semibold text-center">{label}</p>
      {children}
    </div>
  )
}

type ShowcaseSurfaceProps = {
  children: React.ReactNode
  type?: "border" | "bg"
}

export function ShowcaseSurface({ children, type = "bg" }: ShowcaseSurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-8",
        type === "border" && "border border-border/60 bg-card/60 shadow-sm",
        type === "bg" && "border-3 border-black"
      )}
    >
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
    <div className={`flex flex-wrap ${alignEnd ? "items-end" : "items-center"} gap-6 justify-center`}>
      {children}
    </div>
  )
}

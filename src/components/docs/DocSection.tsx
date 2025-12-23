import React from "react"

type DocSectionProps = {
  id?: string
  title?: string
  subtitle?: string
  headerRight?: React.ReactNode
  children: React.ReactNode
}

function DocSection({ id, title, subtitle, headerRight, children }: DocSectionProps) {
  return (
    <section id={id} className="flex flex-col gap-3">
      {(title || subtitle) && (
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}
            {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </section>
  )
}

export default DocSection

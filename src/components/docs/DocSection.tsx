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
    <section id={id} className="flex flex-col gap-4">
      {(title || subtitle) && (
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex flex-col gap-1">
            {title && (
              <h2 className="text-2xl bg-(--color-pink) px-4  rounded-sm font-black tracking-tight flex items-center gap-3">
                {/* <span className="w-2 h-6 " /> */}
                {title}
              </h2>
            )}
            {subtitle && <span className="text-sm text-black/60 font-medium">{subtitle}</span>}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </section>
  )
}

export default DocSection

interface DocPageHeaderProps {
  category: string
  title: string
  description: string
}

function DocPageHeader({ category, title, description }: DocPageHeaderProps) {
  return (
    <div className="relative">
      {/* Decorative element */}

      <div className="space-y-4">
        <span className="inline-block px-3 py-1 border border-black text-xs font-bold uppercase tracking-wider shadow-md rounded-md">
          Components / {category}
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight">{title}</h1>
          <p className="text-lg text-black/70 font-medium max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default DocPageHeader

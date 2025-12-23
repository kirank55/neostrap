interface DocPageHeaderProps {
  category: string
  title: string
  description: string
}

function DocPageHeader({ category, title, description }: DocPageHeaderProps) {
  return (
    <>
      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
        Components / {category}
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </>
  )
}

export default DocPageHeader

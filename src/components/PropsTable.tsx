interface PropDefinition {
  name: string
  type: string
  default: string
  description: string
}

interface PropsTableProps {
  props: PropDefinition[]
}

function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-border/60">
        <thead>
          <tr className="bg-muted/50 border-b-2 border-border/60">
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">
              Prop
            </th>
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">
              Type
            </th>
            <th className="text-left py-3 px-4 font-medium text-foreground border-r border-border/60">
              Default
            </th>
            <th className="text-left py-3 px-4 font-medium text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={`hover:bg-muted/40 transition-colors ${
                index < props.length - 1 ? "border-b border-border/60" : ""
              } ${index % 2 === 1 ? "bg-amber-200" : ""}`}
            >
              <td className="py-3 px-4 font-mono text-sm text-foreground border-r border-border/60">
                {prop.name}
              </td>
              <td className="py-3 px-4 font-mono text-sm text-muted-foreground border-r border-border/60">
                {prop.type}
              </td>
              <td className="py-3 px-4 text-sm text-muted-foreground border-r border-border/60">
                {prop.default}
              </td>
              <td className="py-3 px-4 text-sm text-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PropsTable
export type { PropDefinition, PropsTableProps }

import { NeoAccordion, NeoAccordionContent, NeoAccordionItem, NeoAccordionTrigger } from "./components/ui/NeoAccordion"

 const DEMO_ITEMS = [
  {
    value: "item-1",
    trigger: "What is Neostrap UI?",
    content: `Neostrap UI is a collection of neo-brutalist styled components. 
      Built on top of Radix UI primitives and Tailwind CSS.`,
  },
  {
    value: "item-2",
    trigger: "Is it accessible?",
    content:
      "Yes. All components are built using Radix UI primitives which follow WAI-ARIA design patterns for accessibility.",
  },
  {
    value: "item-3",
    trigger: "Can I customize the styles?",
    content:
      "Absolutely! Components use Tailwind CSS classes and support className props for full customization.",
  },
]

export function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="font-medium">Hello World</div>

<NeoAccordion
            type="single"
            collapsible
            className="w-full max-w-md mx-auto"
        >
            {DEMO_ITEMS.map((item) => (
                <NeoAccordionItem key={item.value} value={item.value}>
                    <NeoAccordionTrigger >
                        {item.trigger}
                    </NeoAccordionTrigger>
                    <NeoAccordionContent>
                        {item.content}
                    </NeoAccordionContent>
                </NeoAccordionItem>
            ))}
        </NeoAccordion>  
    </div>
  )
}

export default App

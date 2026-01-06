import {
  NeoAccordion,
  NeoAccordionContent,
  NeoAccordionItem,
  NeoAccordionTrigger,
} from "./components/ui/NeoAccordion";

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
];

function PreviewContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto p-4 bg-gray-100">
      <div className="rounded-xl w-full my-3 p-8 shadow-sm border-3 border-black bg-white">
        <div className="flex-col align-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div>
    <PreviewContainer>
      <h2 className="mb-4 text-2xl font-bold text-center">Accordion</h2>

      <NeoAccordion
        type="single"
        collapsible
        className="w-full max-w-md mx-auto"
      >
        {DEMO_ITEMS.map((item) => (
          <NeoAccordionItem key={item.value} value={item.value}>
            <NeoAccordionTrigger>{item.trigger}</NeoAccordionTrigger>
            <NeoAccordionContent>{item.content}</NeoAccordionContent>
          </NeoAccordionItem>
        ))}
      </NeoAccordion>
    </PreviewContainer>

    
    </div>

  );
}

export default App;

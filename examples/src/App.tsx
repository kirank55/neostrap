import {
  NeoAccordion,
  NeoAccordionContent,
  NeoAccordionItem,
  NeoAccordionTrigger,
} from "./components/ui/NeoAccordion";
import { NeoButton } from "@/components/ui/NeoButton";
import {
  NeoCard,
  NeoCardContent,
  NeoCardDescription,
  NeoCardFooter,
  NeoCardHeader,
  NeoCardTitle,
} from "./components/ui/NeoCard";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
  NeoDropdownTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "./components/ui/NeoDropdown";
import { NeoInput } from "./components/ui/NeoInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/NeoSelect";
import { NeoSwitch } from "./components/ui/NeoSwitch";
import { NeoTabs, NeoTabsCarousel, NeoTabsContent, NeoTabsList, NeoTabsTrigger } from "./components/ui/NeoTabs";

const DEMO_ITEMS = [
  {
    value: "item-1",
    trigger: "What is Neostrap UI?",
    content: `Neostrap UI is a collection of neo-brutalist styled components. 
      Built on top of Radix UI primitives and Tailwind CSS.`,
  },
  {
    value: "item-6",
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

function PreviewContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center p-6 container mx-auto bg-gray-100">
      <div className="rounded-xl w-full my-3 p-8 shadow-sm border-3 border-black bg-white">
        <div className="flex-col align-center justify-center gap-6">
          <h2 className="mb-4 text-2xl font-bold text-center">{title}</h2>
          <div className="flex gap-3  justify-between items-center max-w-3xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div>
      <PreviewContainer title="Accordion">
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

      <PreviewContainer title="Buttons">
        <NeoButton>Click me</NeoButton>
        <NeoButton variant="outline">Click me</NeoButton>
        <NeoButton variant="disabled">Click me</NeoButton>
        <NeoButton variant="inverter" className="text-white">
          Click me
        </NeoButton>
        <NeoButton variant="link">Click me</NeoButton>
        <NeoButton variant="outline">Click me</NeoButton>
      </PreviewContainer>

      <PreviewContainer title="Cards">
        <NeoCard>
          <NeoCardHeader>
            <NeoCardTitle>Card Title</NeoCardTitle>
            <NeoCardDescription>
              This is a card description showing the variant style.
            </NeoCardDescription>
          </NeoCardHeader>
          <NeoCardContent>
            <p>Card content</p>
          </NeoCardContent>
          <NeoCardFooter>
            <NeoButton>Action</NeoButton>
          </NeoCardFooter>
        </NeoCard>
        <NeoCard variant="outline">
          <NeoCardHeader>
            <NeoCardTitle>Card Title</NeoCardTitle>
            <NeoCardDescription>This is a card description showing the variant style.</NeoCardDescription>
          </NeoCardHeader>
          <NeoCardContent>
            <p>Card content</p>
          </NeoCardContent>
          <NeoCardFooter>
            <NeoButton>Action</NeoButton>
          </NeoCardFooter>
        </NeoCard>
      </PreviewContainer>

      <PreviewContainer title="Dropdown Menu">
        <DropdownMenu>
          <NeoDropdownTrigger className="bg-white">Options</NeoDropdownTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem onClick={() => console.log("profile click")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <NeoDropdownTrigger variant="outline" className="bg-white">
            Options
          </NeoDropdownTrigger>
          <DropdownMenuContent variant="outline" className="bg-white">
            <DropdownMenuItem onClick={() => console.log("profile click")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </PreviewContainer>
      <PreviewContainer title="Input">
        <NeoInput placeholder="Enter text..." />
        <NeoInput placeholder="Enter text..." variant="outline" />
      </PreviewContainer>

      <PreviewContainer title="Select">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger variant="outline">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent variant="outline">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </PreviewContainer>
      <PreviewContainer title="switch">
        <NeoSwitch>Toggle me</NeoSwitch>
        <NeoSwitch variant={"outline"}>Toggle me</NeoSwitch>
      </PreviewContainer>
      <PreviewContainer title="tabs">
        <NeoTabs defaultValue="tab1" className="w-full max-w-md">
      <NeoTabsList className="w-full border-0">
        <NeoTabsTrigger value="tab1">Overview</NeoTabsTrigger>
        <NeoTabsTrigger value="tab2">Features</NeoTabsTrigger>
        <NeoTabsTrigger value="tab3">Settings</NeoTabsTrigger>
      </NeoTabsList>
      <NeoTabsCarousel>
        <NeoTabsContent value="tab1">
          <h3 className="font-bold text-lg mb-2">Overview</h3>
          <p className="text-black/70">Welcome to NeoStrap Tabs. Click on other tabs to explore.</p>
        </NeoTabsContent>
        <NeoTabsContent value="tab2">
          <h3 className="font-bold text-lg mb-2">Features</h3>
          <p className="text-black/70">Neo-brutalist styling with bold shadows and clean design.</p>
        </NeoTabsContent>
        <NeoTabsContent value="tab3">
          <h3 className="font-bold text-lg mb-2">Settings</h3>
          <p className="text-black/70">Configure your preferences here.</p>
        </NeoTabsContent>
      </NeoTabsCarousel>
    </NeoTabs>
        <NeoTabs  defaultValue="tab1" className="w-full max-w-md">
      <NeoTabsList className="w-full border-0">
        <NeoTabsTrigger value="tab1">Overview</NeoTabsTrigger>
        <NeoTabsTrigger disabled value="tab2">Features</NeoTabsTrigger>
        <NeoTabsTrigger value="tab3">Settings</NeoTabsTrigger>
      </NeoTabsList>
      <NeoTabsCarousel>
        <NeoTabsContent value="tab1">
          <h3 className="font-bold text-lg mb-2">Overview</h3>
          <p className="text-black/70">Welcome to NeoStrap Tabs. Click on other tabs to explore.</p>
        </NeoTabsContent>
        <NeoTabsContent value="tab2">
          <h3 className="font-bold text-lg mb-2">Features</h3>
          <p className="text-black/70">Neo-brutalist styling with bold shadows and clean design.</p>
        </NeoTabsContent>
        <NeoTabsContent value="tab3">
          <h3 className="font-bold text-lg mb-2">Settings</h3>
          <p className="text-black/70">Configure your preferences here.</p>
        </NeoTabsContent>
      </NeoTabsCarousel>
    </NeoTabs>
      </PreviewContainer>


      <div className=" h-100 w-full"></div>
    </div>
  );
}

export default App;

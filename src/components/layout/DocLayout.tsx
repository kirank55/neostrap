import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NeoButton } from "../ui/NeoButton";

interface NavComponent {
  label: string;
  to: string;
}

const navSections: NavComponent[] = [

  { label: "Accordion", to: "/docs/NeoAccordion" },
  { label: "Button", to: "/docs/NeoButton" },
  { label: "Card", to: "/docs/NeoCard" },
  { label: "Dialog", to: "/docs/NeoDialog" },
  { label: "Dropdown", to: "/docs/NeoDropdown" },
  { label: "Input", to: "/docs/NeoInput" },
  { label: "Select", to: "/docs/NeoSelect" },
  { label: "Switch", to: "/docs/NeoSwitch" }
];

function DocLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <div className="mx-auto flex px-6 py-10"> */}
      <div className="grid w-full grid-cols-[17em_1fr] gap-8">
        {/* shadow-md */}
        <aside className="h-full bg-(--primary-bg) p-4  overflow-auto scrollbar-hide hover:scrollbar-default sticky top-16 max-h-screen px-5 py-10 ">
          <p className="text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground ">
            Components
          </p>
          <nav className="mt-3 flex flex-col gap-3 text-sm">
            {navSections.map((component) => {
              const isActive = location.pathname === component.to;
              return (
                <NeoButton
                  key={component.to}
                  asChild
                  variant={isActive ? "outline" : "link"}
                  className={cn(
                    "rounded-lg px-6 py-2 justify-start font-medium transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive &&
                    "bg-accent"
                  )}
                >
                  <Link
                    to={component.to}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {component.label}
                  </Link>
                </NeoButton>
              );
            })}
          </nav>
        </aside>
        <main className="flex flex-col gap-8 container max-w-[1100px] mx-auto py-10">

          <Outlet />
        </main>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DocLayout;

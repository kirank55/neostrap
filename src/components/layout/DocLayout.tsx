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
  { label: "Carousel", to: "/docs/NeoCarousel" },
  { label: "Dropdown", to: "/docs/NeoDropdown" },
  { label: "Input", to: "/docs/NeoInput" },
  { label: "Select", to: "/docs/NeoSelect" },
  { label: "Switch", to: "/docs/NeoSwitch" },
  { label: "Tabs", to: "/docs/NeoTabs" },
];

function DocLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid w-full grid-cols-[17rem_1fr]">
        {/* Sidebar */}
        <aside className="h-full border-r-3 border-black bg-white p-6 overflow-auto scrollbar-hide hover:scrollbar-default sticky top-16 max-h-screen">
          {/* Getting Started Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm font-black uppercase tracking-wider">
                Getting Started
              </p>
            </div>
            <nav className="flex flex-col gap-2 pl-4">
              <NeoButton
                asChild
                variant={location.pathname === "/docs/getting-started" ? "brutal" : "link"}
                size="sm"
                className={cn(
                  "justify-start font-semibold transition-all",
                  location.pathname === "/docs/getting-started"
                    ? "bg-(--color-baby-blue)"
                    : "hover:translate-x-1"
                )}
              >
                <Link
                  to="/docs/getting-started"
                  aria-current={location.pathname === "/docs/getting-started" ? "page" : undefined}
                >
                  Introduction
                </Link>
              </NeoButton>
            </nav>
          </div>

          {/* Components Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm font-black uppercase tracking-wider">
                Components
              </p>
            </div>
            <nav className="flex flex-col gap-2 pl-4">
              {navSections.map((component) => {
                const isActive = location.pathname === component.to;
                return (
                  <NeoButton
                    key={component.to}
                    asChild
                    variant={isActive ? "outline" : "link"}
                    size="sm"
                    className={cn(
                      "justify-start font-semibold transition-all",
                      isActive
                        ? "bg-(--color-lavender)"
                        : "hover:translate-x-1"
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
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex flex-col gap-10 container max-w-275 mx-auto py-12 px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DocLayout;

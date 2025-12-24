import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavComponent {
  label: string;
  to: string;
}

interface NavSection {
  label: string;
  components: NavComponent[];
}

const navSections: NavSection[] = [
  {
    label: "Buttons",
    components: [
      { label: "NeoButton", to: "/docs/NeoButton" },
      { label: "NeoDialog", to: "/docs/NeoDialog" }

    ],
  },
  {
    label: "Select",
    components: [{ label: "NeoSelect", to: "/docs/NeoSelect" }],
  },
  {
    label: "Dropdowns",
    components: [{ label: "NeoAccordion", to: "/docs/NeoAccordion" },{ label: "NeoDropdown", to: "/docs/NeoDropdown" }],
  },
  {
    label: "Cards",
    components: [{ label: "NeoCard", to: "/docs/NeoCard" }],
  },
  {
    label: "Inputs",
    components: [{ label: "NeoInput", to: "/docs/NeoInput" },
      { label: "NeoSwitch", to: "/docs/NeoSwitch" }
    ],
  },
];

function DocLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto flex px-6 py-10">
        <div className="grid w-full grid-cols-[220px_1fr] gap-8">
          <aside className="h-full p-4 shadow-md overflow-auto scrollbar-hide hover:scrollbar-default sticky top-16 max-h-screen">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Components
            </p>
            <nav className="mt-3 flex flex-col gap-3 text-sm">
              {navSections.map((section) => (
                <div key={section.label} className="flex flex-col gap-1">
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    {section.label}
                  </p>
                  {section.components.map((component) => {
                    const isActive = location.pathname === component.to;
                    return (
                      <Link
                        key={component.to}
                        to={component.to}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-2 text-left font-medium transition-colors",
                          "hover:bg-accent hover:text-accent-foreground",
                          isActive &&
                            "bg-accent text-accent-foreground border border-border/70"
                        )}
                      >
                        {component.label}
                      </Link>
                    );
                  })}
                </div>
              ))}
            </nav>
          </aside>
          <main className="flex flex-col gap-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default DocLayout;

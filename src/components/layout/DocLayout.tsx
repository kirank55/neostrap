import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
} from "../ui/sidebar";

interface NavComponent {
  label: string;
  to: string;
}

const navSections: NavComponent[] = [
  { label: "Accordion", to: "/docs/NeoAccordion" },
  { label: "Animated Tooltip", to: "/docs/NeoAnimatedTooltip" },
  { label: "Button", to: "/docs/NeoButton" },
  { label: "Card", to: "/docs/NeoCard" },
  { label: "Carousel", to: "/docs/NeoCarousel" },
  { label: "Dropdown", to: "/docs/NeoDropdown" },
  { label: "Input", to: "/docs/NeoInput" },
  { label: "Select", to: "/docs/NeoSelect" },
  { label: "Switch", to: "/docs/NeoSwitch" },
  { label: "Tabs", to: "/docs/NeoTabs" },
  { label: "View Switch", to: "/docs/NeoViewSwitch" },
];

function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r-[3px]">
      <SidebarContent className="p-6 overflow-auto">

        {/* Getting Started Section */}
        <SidebarGroup className="mb-8 p-0">
          <SidebarGroupLabel className="mb-4 px-0">
            Getting Started
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-4">
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === "/docs/getting-started"}
                  variant={location.pathname === "/docs/getting-started" ? "outline" : "default"}
                  className={cn(
                    "justify-start font-semibold transition-all",
                    location.pathname === "/docs/getting-started"
                      ? "bg-[var(--color-baby-blue)]"
                      : "hover:translate-x-1 hover:bg-transparent"
                  )}
                >
                  <Link
                    to="/docs/getting-started"
                    aria-current={
                      location.pathname === "/docs/getting-started"
                        ? "page"
                        : undefined
                    }
                  >
                    Introduction
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Components Section */}
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="mb-4 px-0">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent className="pl-4">
            <SidebarMenu className="gap-2">
              {navSections.map((component) => {
                const isActive = location.pathname === component.to;
                return (
                  <SidebarMenuItem key={component.to}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      variant={isActive ? "outline" : "default"}
                      className={cn(
                        "justify-start font-semibold transition-all",
                        isActive ? "bg-[var(--color-lavender)]" : "hover:translate-x-1 hover:bg-transparent"
                      )}
                    >
                      <Link
                        to={component.to}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {component.label}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

function DocLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset className="peer-data-[variant=inset]:min-h-screen md:peer-data-[variant=inset]:m-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:border-0 md:peer-data-[variant=inset]:shadow-none">
          <div className=" sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b-2 border-black bg-white px-4">
            <SidebarTrigger />
          </div>
          <main className="flex flex-col gap-10 container max-w-275 mx-auto py-12 px-8">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default DocLayout;

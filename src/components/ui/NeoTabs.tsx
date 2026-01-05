import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

type TabsContextType = {
  value: string;
  tabOrder: string[];
  registerTab: (value: string) => void;
  registerTriggerRef: (value: string, ref: HTMLButtonElement | null) => void;
  triggerRefs: Map<string, HTMLButtonElement | null>;
};

const TabsContext = React.createContext<TabsContextType | null>(null);
const CarouselContext = React.createContext<{
  isCarousel: boolean;
  panelCount: number;
}>({ isCarousel: false, panelCount: 0 });

const NeoTabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(
  (
    { value: controlledValue, defaultValue, onValueChange, children, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      controlledValue || defaultValue || ""
    );
    const tabOrderRef = React.useRef<string[]>([]);
    const triggerRefsMap = React.useRef<Map<string, HTMLButtonElement | null>>(
      new Map()
    );

    const currentValue = controlledValue ?? internalValue;

    const handleValueChange = (newValue: string) => {
      setInternalValue(newValue);
      onValueChange?.(newValue);
    };

    const registerTab = React.useCallback((value: string) => {
      if (!tabOrderRef.current.includes(value)) {
        tabOrderRef.current.push(value);
      }
    }, []);

    const registerTriggerRef = React.useCallback(
      (value: string, ref: HTMLButtonElement | null) => {
        triggerRefsMap.current.set(value, ref);
      },
      []
    );

    return (
      <TabsContext.Provider
        value={{
          value: currentValue,
          tabOrder: tabOrderRef.current,
          registerTab,
          registerTriggerRef,
          triggerRefs: triggerRefsMap.current,
        }}
      >
        <TabsPrimitive.Root
          ref={ref}
          value={controlledValue}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          {...props}
        >
            {children}
        </TabsPrimitive.Root>
      </TabsContext.Provider>
    );
  }
);
NeoTabs.displayName = "NeoTabs";

const NeoTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const indicatorRef = React.useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize indicator position after first render
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (!indicatorRef.current || !context || !containerRef.current) return;

      const { value, triggerRefs } = context;
      const activeRef = triggerRefs.get(value);

      if (!activeRef) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = activeRef.getBoundingClientRect();

      gsap.to(indicatorRef.current, {
        left: activeRect.left - containerRect.left,
        top: activeRect.top - containerRect.top,
        width: activeRect.width,
        height: activeRect.height,
        duration: isInitialized ? 0.5 : 0,
        ease: "power2.out",
      });
    },
    { dependencies: [context?.value, isInitialized], scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative">
      {/* Animated background indicator */}
      <div
        ref={indicatorRef}
        className="absolute bg-(--color-pink) rounded-lg z-20 pointer-events-none mix-blend-multiply"
        style={{ width: 0, height: 0, left: 0, top: 0 }}
      />
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-lg bg-inherit p-1.5 border-0 border-black",
          className
        )}
        {...props}
      />
    </div>
  );
});
NeoTabsList.displayName = TabsPrimitive.List.displayName;

const NeoTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, value, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Register trigger ref on mount
  React.useEffect(() => {
    if (value && context?.registerTriggerRef) {
      context.registerTriggerRef(value, triggerRef.current);
    }
    return () => {
      if (value && context?.registerTriggerRef) {
        context.registerTriggerRef(value, null);
      }
    };
  }, [value, context]);

  return (
    <TabsPrimitive.Trigger
      ref={(node) => {
        triggerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      value={value}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all z-10",
        "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=inactive]:bg-transparent data-[state=inactive]:text-black",
        "data-[state=inactive]:border-2 data-[state=inactive]:border-black",
        "data-[state=inactive]:shadow-[5px_5px_0_#000]",
        // "data-[state=inactive]:hover:-translate-y-[-5px] data-[state=inactive]:hover:translate-x-1.25 data-[state=inactive]:hover:shadow-none",
        "data-[state=inactive]:active:translate-x-px data-[state=inactive]:active:-translate-y-px data-[state=inactive]:active:shadow-[2px_2px_0_#000]",
        "data-[state=active]:bg-transparent data-[state=active]:text-black",
        "data-[state=active]:border-2 data-[state=active]:border-black",
        className
      )}
      {...props}
    />
  );
});
NeoTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

interface NeoTabsCarouselProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Carousel wrapper for NeoTabsContent components.
 * Wraps all tab content in a horizontally scrolling track animated by GSAP.
 */
const NeoTabsCarousel = ({ children, className }: NeoTabsCarouselProps) => {
  const context = React.useContext(TabsContext);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  // Count the number of tab panels
  const panelCount = React.Children.count(children);

  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize after first render
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      if (!trackRef.current || !context || panelCount === 0) return;

      const { value, tabOrder } = context;
      const currentIndex = tabOrder.indexOf(value);

      if (currentIndex === -1) return;

      const panelWidth = 100 / panelCount;

      // Get all content panels
      const panels = trackRef.current.querySelectorAll("[data-content-panel]");

      if (isInitialized) {
        const tl = gsap.timeline();

        // Scale down and fade out content while starting to slide
        tl.to(
          panels,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          0
        )
          .to(
            trackRef.current,
            {
              xPercent: -(currentIndex * panelWidth),
              duration: 0.5,
              ease: "power2.inOut",
            },
            0
          )
          // Scale up and fade in new content
          .to(
            panels,
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            0.3
          );
      } else {
        gsap.set(trackRef.current, {
          xPercent: -(currentIndex * panelWidth),
        });
      }
    },
    {
      dependencies: [context?.value, panelCount, isInitialized],
      scope: containerRef,
    }
  );

  return (
    <CarouselContext.Provider value={{ isCarousel: true, panelCount }}>
      <div
        ref={containerRef}
        className={cn(
          "mt-4 overflow-hidden border-2 border-black rounded-lg shadow-[4px_4px_0_#000] bg-(--color-pink)",
          className
        )}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ width: `${panelCount * 100}%` }}
        >
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
NeoTabsCarousel.displayName = "NeoTabsCarousel";

const NeoTabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const { isCarousel, panelCount } = React.useContext(CarouselContext);
  const isActive = context?.value === value;

  // Register this tab value on mount
  React.useEffect(() => {
    if (value && context?.registerTab) {
      context.registerTab(value);
    }
  }, [value, context]);

  return (
    <TabsPrimitive.Content
      ref={ref}
      value={value}
      forceMount={isCarousel ? true : props.forceMount}
      data-content-panel
      className={cn(
        "shrink-0 ring-offset-background p-4",
        "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        // Carousel uses overflow-hidden to manage visibility
        !isCarousel && "w-full",
        className
      )}
      style={
        isCarousel && panelCount > 0
          ? { width: `${100 / panelCount}%` }
          : undefined
      }
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
});
NeoTabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  NeoTabs,
  NeoTabsList,
  NeoTabsTrigger,
  NeoTabsContent,
  NeoTabsCarousel,
};

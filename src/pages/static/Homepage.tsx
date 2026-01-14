import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NeoButton } from "@/components/ui/NeoButton";
import {
  NeoCard,
  NeoCardHeader,
  NeoCardTitle,
  NeoCardDescription,
  NeoCardContent,
} from "@/components/ui/NeoCard";
import { NeoSwitch } from "@/components/ui/NeoSwitch";
import { NeoInput } from "@/components/ui/NeoInput";
import {
  ArrowRight,
  // Copy,
  // Check,
  Zap,
  Palette,
  Code2,
  Boxes,
  Sparkles,
  Github,
  Twitter,
  Heart,
} from "lucide-react";

// =========================================================================== =
// CONFIGURATION
// ============================================================================

const MARQUEE_ITEMS = [
  "NEO-BRUTALIST",
  "BOLD & BEAUTIFUL",
  "ACCESSIBLE",
  "REACT + TAILWIND",
  "OPEN SOURCE",
  "MODERN UI",
  "FULLY TYPED",
];

// Section headlines configuration for scroll-linked animation
const FLOATING_HEADLINES = [
  {
    id: "components",
    lines: ["Build like", "Human"],
    // lines: ["BUILD BRUTAL", "INTERFACES"],
    accentIndex: 1,
    accentColor: "text-(--color-pink)",
  },
];

// Section headline configuration for scroll animation
// const SECTION_HEADLINES = [
//   {
//     id: "hero",
//     text: ["BUILD", "BRUTAL", "INTERFACES"],
//     accentIndex: 1,
//     accentColor: "var(--color-pink)",
//   },
//   {
//     id: "components",
//     text: ["BUILT FOR", "IMPACT", ""],
//     accentIndex: 1,
//     accentColor: "var(--color-pink)",
//   },
//   {
//     id: "demo",
//     text: ["EXPERIENCE THE", "BRUTALITY", ""],
//     accentIndex: 1,
//     accentColor: "var(--color-amber)",
//   },
//   {
//     id: "features",
//     text: ["DESIGNED FOR", "DEVELOPERS", ""],
//     accentIndex: 1,
//     accentColor: "var(--color-amber)",
//   },
//   {
//     id: "testimonials",
//     text: ["LOVED BY", "BUILDERS", ""],
//     accentIndex: 1,
//     accentColor: "var(--color-pink)",
//   },
//   {
//     id: "cta",
//     text: ["READY TO BUILD", "SOMETHING BRUTAL?", ""],
//     accentIndex: 1,
//     accentColor: "var(--color-pink)",
//   },
// ];

const COMPONENT_CARDS = [
  {
    name: "NeoButton",
    description: "Bold, chunky buttons that demand attention",
    color: "bg-(--color-amber)",
    icon: "✦",
  },
  {
    name: "NeoCard",
    description: "Striking cards with brutal shadows",
    color: "bg-(--color-baby-blue)",
    icon: "◈",
  },
  {
    name: "NeoInput",
    description: "Inputs that break the mold",
    color: "bg-(--color-lavender)",
    icon: "▧",
  },
  {
    name: "NeoSelect",
    description: "Dropdowns with personality",
    color: "bg-(--color-pink)",
    icon: "◉",
  },
  {
    name: "NeoSwitch",
    description: "Toggles that feel alive",
    color: "bg-(--color-amber)",
    icon: "◐",
  },
  {
    name: "NeoTabs",
    description: "Switchable content regions",
    color: "bg-(--color-baby-blue)",
    icon: "◫",
  },
  {
    name: "NeoAccordion",
    description: "Collapsible content with style",
    color: "bg-(--color-lavender)",
    icon: "≡",
  },
  {
    name: "NeoDialog",
    description: "Modals that make a statement",
    color: "bg-(--color-pink)",
    icon: "❖",
  },
  {
    name: "NeoDropdown",
    description: "Context menus reimagined",
    color: "bg-(--color-amber)",
    icon: "⬡",
  },
];

const FEATURES = [
  {
    title: "Zero Config",
    description:
      "Drop in components that just work. No complex setup or configuration needed.",
    icon: Zap,
    color: "bg-(--color-amber)",
  },
  {
    title: "Design System",
    description:
      "Built on a cohesive neo-brutalist design language with consistent tokens.",
    icon: Palette,
    color: "bg-(--color-baby-blue)",
  },
  {
    title: "TypeScript First",
    description:
      "Full type safety with comprehensive interfaces for all components.",
    icon: Code2,
    color: "bg-(--color-lavender)",
  },
  {
    title: "Composable",
    description:
      "Mix and match components. Build complex UIs from simple primitives.",
    icon: Boxes,
    color: "bg-(--color-pink)",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "NeoStrap made our product look 10x more worst. The brutal aesthetic turned heads to other side at our launch.",
    author: "John Doe",
    role: "Design Lead, Startup",
    avatar: "J",
  },
  {
    quote:
      "Finally, a UI kit that isn't afraid to be ugly. Our conversion rates jumped down 40% after redesigning with NeoStrap.",
    author: "San Doe",
    role: "Founder, SaaS",
    avatar: "S",
  },
  {
    quote:
      "The attention to detail is insane. Every shadow, every border - it all just messed up together perfectly.",
    author: "Jane Smith",
    role: "Frontend Engineer",
    avatar: "J",
  },
];

// ============================================================================
// ANIMATED COMPONENTS
// ============================================================================

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden py-4 border-y-2 border-black bg-black relative z-20">
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-2xl font-black text-white tracking-widest"
          >
            {item}
            <span className="ml-8 text-(--color-pink)">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// Components marquee - horizontal scrolling showcase of components
function ComponentsMarquee() {
  const marqueeItems = [
    { type: "button" as const },
    { type: "switch" as const },
    { type: "card" as const },
    { type: "badge" as const },
    { type: "input" as const },
  ];

  const renderComponent = (
    type: "button" | "switch" | "card" | "input" | "badge"
  ) => {
    switch (type) {
      case "button":
        return (
          <NeoButton
            variant="brutal"
            size="sm"
            className="bg-(--color-amber) text-xs px-3 py-1 pointer-events-none"
          >
            Click
          </NeoButton>
        );
      case "switch":
        return (
          <div className="flex items-center gap-2 px-3 py-2 border-2 border-black bg-white shadow-[3px_3px_0_#000] rounded-lg">
            <NeoSwitch size="sm" checked={true} />
          </div>
        );
      case "card":
        return (
          <NeoCard variant="brutal" className="w-28 p-2 bg-(--color-baby-blue)">
            <NeoCardHeader className="p-1">
              <NeoCardTitle className="text-[10px] font-bold">
                Mini Card
              </NeoCardTitle>
            </NeoCardHeader>
            <NeoCardContent className="p-1">
              <div className="h-4 w-full bg-black/10 rounded" />
            </NeoCardContent>
          </NeoCard>
        );
      case "input":
        return (
          <NeoInput
            variant="brutal"
            size="sm"
            placeholder="Type..."
            className="w-24 text-xs pointer-events-none"
            readOnly
          />
        );
      case "badge":
        return (
          <div className="px-3 py-1 border-2 border-black bg-(--color-pink) shadow-[3px_3px_0_#000] rounded-full">
            <span className="text-xs font-bold uppercase tracking-wider">
              New
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  // Triple the items for seamless infinite scroll
  const allItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full overflow-hidden py-4 mb-6">
      <div className="flex whitespace-nowrap animate-marquee">
        {allItems.map((item, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            {renderComponent(item.type)}
          </div>
        ))}
      </div>
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// Floating headlines that animate from hero to their sections
function FloatingHeadlines() {
  const headlineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Only run on lg+ screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const tweens: gsap.core.Tween[] = [];
      const scrollTriggers: ScrollTrigger[] = [];

      // Helper to get initial position - recalculated on resize
      const getInitialPosition = () => {
        const h1 = document.querySelector("h1");
        const h1Rect = h1?.getBoundingClientRect();
        const baseY = h1Rect ? h1Rect.top + window.scrollY + 20 : 180;
        return {
          x: window.innerWidth * 0.5,
          y: baseY,
        };
      };

      FLOATING_HEADLINES.forEach((headline, index) => {
        const floatingEl = headlineRefs.current[index];
        const targetSection = document.querySelector(
          `[data-section="${headline.id}"]`
        );
        const targetH2 = document.querySelector(
          `[data-section-heading="${headline.id}"]`
        );
        const targetHeader = document.querySelector(
          `[data-section-header="${headline.id}"]`
        );

        if (!floatingEl || !targetSection || !targetH2) return;

        // Get the target h2's position relative to the document
        const getTargetPosition = () => {
          const targetRect = targetH2.getBoundingClientRect();
          const scrollY = window.scrollY;
          return {
            x: targetRect.left, // Use left edge for proper alignment
            y: targetRect.top + scrollY,
          };
        };

        // Get initial position
        const initialPos = getInitialPosition();

        // Set initial state
        gsap.set(floatingEl, {
          position: "fixed",
          top: initialPos.y,
          left: "65%",
          xPercent: -50,
          opacity: 1,
          scale: 1,
          rotateX: 18,
          rotateZ: -6,
          transformPerspective: 1000,
          transformOrigin: "50% 50%",
          zIndex: 100 - index,
        });

        // Cache initial position to prevent recalculation glitches
        let cachedInitialPos = { ...initialPos };

        // Create scroll-linked animation
        const tween = gsap.to(floatingEl, {
          immediateRender: false,
          scrollTrigger: {
            trigger: targetSection,
            start: "top 85%",
            end: "top 25%",
            scrub: 1.5, // Increased for smoother scrubbing
            invalidateOnRefresh: true,
            onRefresh: () => {
              // Update cached position on refresh (resize, etc.)
              cachedInitialPos = getInitialPosition();
            },
            onUpdate: (self) => {
              const progress = self.progress;
              const target = getTargetPosition();

              // Use eased progress for smoother start/end
              const easedProgress = gsap.parseEase("power2.inOut")(progress);

              // Interpolate position using cached initial position
              const currentX = gsap.utils.interpolate(
                cachedInitialPos.x,
                target.x,
                easedProgress
              );
              const currentY = gsap.utils.interpolate(
                cachedInitialPos.y,
                target.y - window.scrollY,
                easedProgress
              );

              gsap.set(floatingEl, {
                left: currentX,
                xPercent: gsap.utils.interpolate(-50, 0, easedProgress),
                top: currentY,
                scale: 1,
                rotateX: gsap.utils.interpolate(18, 0, easedProgress),
                rotateZ: gsap.utils.interpolate(-6, 0, easedProgress),
                opacity: 1,
              });

              // Smooth opacity crossfade - start fading in header near the end
              const headerOpacity = progress > 0.85 ? (progress - 0.85) / 0.15 : 0;
              (targetH2 as HTMLElement).style.opacity = String(headerOpacity);
              if (targetHeader) {
                (targetHeader as HTMLElement).style.opacity = String(headerOpacity);
              }
            },
            onLeave: () => {
              // Smoothly hide floating element and show original
              gsap.to(floatingEl, { opacity: 0, duration: 0.3, ease: "power2.out" });
              (targetH2 as HTMLElement).style.opacity = "1";
              if (targetHeader) {
                (targetHeader as HTMLElement).style.opacity = "1";
              }
            },
            onEnterBack: () => {
              // Smoothly show floating element and hide original
              gsap.to(floatingEl, { opacity: 1, duration: 0.3, ease: "power2.out" });
              (targetH2 as HTMLElement).style.opacity = "0";
              if (targetHeader) {
                (targetHeader as HTMLElement).style.opacity = "0";
              }
            },
            onLeaveBack: () => {
              // Reset to initial state using cached position
              gsap.to(floatingEl, {
                opacity: 1,
                top: cachedInitialPos.y,
                left: "65%",
                xPercent: -50,
                scale: 1,
                rotateX: 18,
                rotateZ: -6,
                duration: 0.3,
                ease: "power2.out",
              });
              (targetH2 as HTMLElement).style.opacity = "0";
              if (targetHeader) {
                (targetHeader as HTMLElement).style.opacity = "0";
              }
            },
          },
        });

        tweens.push(tween);
        if (tween.scrollTrigger) {
          scrollTriggers.push(tween.scrollTrigger);
        }
      });

      // Initially hide all target h2s and headers on lg screens
      FLOATING_HEADLINES.forEach((headline) => {
        const targetH2 = document.querySelector(
          `[data-section-heading="${headline.id}"]`
        );
        const targetHeader = document.querySelector(
          `[data-section-header="${headline.id}"]`
        );
        if (targetH2) {
          (targetH2 as HTMLElement).style.opacity = "0";
        }
        if (targetHeader) {
          (targetHeader as HTMLElement).style.opacity = "0";
        }
      });

      // Handle resize to recenter floating headlines
      const handleResize = () => {
        ScrollTrigger.refresh();

        // If not scrolled, reset floating elements to center
        FLOATING_HEADLINES.forEach((_, index) => {
          const floatingEl = headlineRefs.current[index];
          const st = scrollTriggers[index];

          if (floatingEl && st && st.progress === 0) {
            const currentInitialPos = getInitialPosition();
            gsap.set(floatingEl, {
              top: currentInitialPos.y,
              left: "65%",
              xPercent: -50,
            });
          }
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tweens.forEach((tween) => {
          tween.scrollTrigger?.kill();
          tween.kill();
        });
        // Reset h2 and header visibility
        FLOATING_HEADLINES.forEach((headline) => {
          const targetH2 = document.querySelector(
            `[data-section-heading="${headline.id}"]`
          );
          const targetHeader = document.querySelector(
            `[data-section-header="${headline.id}"]`
          );
          if (targetH2) {
            (targetH2 as HTMLElement).style.opacity = "1";
          }
          if (targetHeader) {
            (targetHeader as HTMLElement).style.opacity = "1";
          }
        });
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div
      className="hidden lg:block pointer-events-none"
      style={{ position: "fixed", inset: 0, zIndex: 50 }}
    >
      {FLOATING_HEADLINES.map((headline, index) => (
        <div
          key={headline.id}
          ref={(el) => {
            headlineRefs.current[index] = el;
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] font-mono"
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          {headline.lines.map((line, lineIndex) => (
            <span
              key={lineIndex}
              className={`block ${lineIndex === headline.accentIndex
                ? headline.accentColor
                : "text-black"
                }`}
            >
              {line}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

function HeroSection({
  h1Ref,
}: {
  h1Ref: React.RefObject<HTMLHeadingElement | null>;
}) {
  // const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText("npm install neostrap-ui");
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };

  return (
    <section
      data-section="hero"
      className="relative min-[1400px]:min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
    >
      <GridBackground />

      {/* Decorative corner blocks with CTA buttons */}
      <div className="absolute top-8 left-8 hidden lg:block z-20">
        <NeoButton
          variant="brutal"
          size="lg"
          className="bg-(--color-baby-blue) text-black hover:bg-(--color-amber) text-lg px-6 py-4 h-auto shadow-[8px_8px_0_#000]"
          asChild
        >
          <Link to="/docs/getting-started">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </NeoButton>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <NeoButton
          variant="brutal"
          size="lg"
          className="bg-(--color-lavender) text-black hover:bg-(--color-pink) text-lg px-6 py-4 h-auto shadow-[6px_6px_0_#000]"
          asChild
        >
          <Link to="/docs/NeoButton">Explore Components</Link>
        </NeoButton>
      </div>

      {/* Additional decorative corner blocks */}
      <div className="absolute top-8 right-8 w-16 h-16 border-4 border-black bg-(--color-amber) shadow-[6px_6px_0_#000] hidden lg:block z-10" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-4 border-black bg-(--color-pink) shadow-[8px_8px_0_#000] hidden lg:block z-10" />

      <div className="container mx-auto px-6 pt-2 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-2 border-black bg-white shadow-[4px_4px_0_#000] rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">
              React + Tailwind CSS
            </span>
          </div> */}

          {/* Components Marquee */}
          <ComponentsMarquee />

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-medium text-black/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {/* A neo-brutalist React component library that breaks the rules.{" "} */}
            {/* <span className="font-bold text-black">
              Bold. Unapologetic. Beautiful.
            </span> */}
            <span className="font-bold text-black">
              Escape the Ai Generated bland components.
            </span>
            <br />
            <span className="font-bold text-black">
              Add Personality to your UI
            </span>

          </p>

          {/* CTA Buttons - Mobile only (desktop buttons are in corners) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 lg:hidden">
            <NeoButton
              variant="brutal"
              size="lg"
              className="bg-black text-white hover:bg-(--color-amber) hover:text-black text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link to="/docs/getting-started">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </NeoButton>
            <NeoButton
              variant="brutal"
              size="lg"
              className="bg-white text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link to="/docs/NeoButton">Explore Components</Link>
            </NeoButton>
          </div>

          {/* Main headlines - BE UNIQUE on left, Build like human on right */}
          <div className=" flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Static BE UNIQUE headline */}
            <h1
              className="  text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-black"
              style={{
                filter: "drop-shadow(0 0px 7px rgba(0,0,0,0.3))",
                display: "inline-block",
                transform: "perspective(1000px) rotateX(18deg) rotateZ(-6deg)",
                transformOrigin: "50% 40%",
              }}
            >
              <span className="block">BE</span>
              <span className="block text-(--color-amber)">UNIQUE</span>
            </h1>

            {/* Animated Build like human headline */}
            <h1
              ref={h1Ref}
              className="mt-8  hidden lg:block text-red-500 opacity-100 lg:opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] lg:ml-22"
              style={{
                filter: "drop-shadow(0 0px 7px #FE5BD6)",
                display: "inline-block",
                willChange: "transform",
                backfaceVisibility: "hidden",
                transform: "perspective(1000px) rotateX(18deg) rotateZ(-6deg)",
                transformOrigin: "50% 40%",
                WebkitTransform:
                  "perspective(1000px) rotateX(18deg) rotateZ(-6deg)",
              }}
            >
              <span className="block" data-line="0">
                BUILD
              </span>
              <span className="block" data-line="1">
                BRUTAL
              </span>
              <span className="block" data-line="2">
                INTERFACES
              </span>
            </h1>
          </div>

          {/* Install command */}
          {/* <div
            onClick={handleCopy}
            className="inline-flex items-center gap-3 px-6 py-4 border-2 border-black bg-black text-white font-mono text-lg shadow-[6px_6px_0_(--color-amber)] hover:shadow-[4px_4px_0_(--color-amber)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer rounded-lg relative overflow-hidden"
          >
            <span className="text-(--color-pink)">$</span>
            <span>npm install neostrap-ui</span>
            {copied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5 opacity-60 hover:opacity-100" />
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

function ComponentShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsContainerRef.current;
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!cards || !section || !trigger) return;

    // Calculate total scroll distance (total width - viewport width)
    const getScrollAmount = () => {
      return -(cards.scrollWidth - window.innerWidth + 100);
    };

    const tween = gsap.to(cards, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${(cards.scrollWidth - window.innerWidth + 100) * 0.4}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  const renderComponentPreview = (componentName: string) => {
    switch (componentName) {
      case "NeoButton":
        return (
          <NeoButton
            variant="brutal"
            size="sm"
            className="bg-(--color-amber) text-xs px-3 py-1 pointer-events-none"
          >
            Button
          </NeoButton>
        );
      case "NeoCard":
        return (
          <NeoCard
            variant="brutal"
            className="w-24 p-2 bg-(--color-baby-blue) pointer-events-none"
          >
            <NeoCardHeader className="p-1">
              <NeoCardTitle className="text-[9px] font-bold">Card</NeoCardTitle>
            </NeoCardHeader>
            <NeoCardContent className="p-1">
              <div className="h-3 w-full bg-black/10 rounded" />
            </NeoCardContent>
          </NeoCard>
        );
      case "NeoInput":
        return (
          <NeoInput
            variant="brutal"
            size="sm"
            placeholder="Input..."
            className="w-28 text-xs pointer-events-none"
            readOnly
          />
        );
      case "NeoSelect":
        return (
          <div className="w-28 px-3 py-1.5 border-2 border-black bg-white shadow-[2px_2px_0_#000] rounded text-xs font-bold pointer-events-none">
            Select ▼
          </div>
        );
      case "NeoSwitch":
        return (
          <div className="flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white shadow-[2px_2px_0_#000] rounded pointer-events-none">
            <NeoSwitch size="sm" checked={true} />
          </div>
        );
      case "NeoTabs":
        return (
          <div className="flex gap-1 p-1 border-2 border-black bg-white shadow-[2px_2px_0_#000] rounded pointer-events-none">
            <div className="px-2 py-0.5 bg-black text-white text-[9px] font-bold rounded">
              Tab 1
            </div>
            <div className="px-2 py-0.5 text-[9px] font-bold">Tab 2</div>
          </div>
        );
      case "NeoAccordion":
        return (
          <div className="w-28 border-2 border-black bg-white shadow-[2px_2px_0_#000] rounded pointer-events-none">
            <div className="px-2 py-1.5 flex items-center justify-between">
              <span className="text-[9px] font-bold">Item</span>
              <span className="text-[9px]">▼</span>
            </div>
          </div>
        );
      case "NeoDialog":
        return (
          <div className="w-28 p-2 border-2 border-black bg-white shadow-[3px_3px_0_#000] rounded pointer-events-none">
            <div className="text-[9px] font-bold mb-1">Dialog</div>
            <div className="h-2 w-full bg-black/10 rounded mb-1" />
            <div className="flex gap-1">
              <div className="flex-1 h-2 bg-black rounded" />
              <div className="flex-1 h-2 bg-black/20 rounded" />
            </div>
          </div>
        );
      case "NeoDropdown":
        return (
          <div className="w-28 border-2 border-black bg-white shadow-[2px_2px_0_#000] rounded pointer-events-none">
            <div className="px-2 py-1 text-[9px] font-bold border-b border-black">
              Menu ▼
            </div>
            <div className="px-2 py-0.5 text-[8px]">Option 1</div>
            <div className="px-2 py-0.5 text-[8px]">Option 2</div>
          </div>
        );
      default:
        return (
          <div className="text-4xl">
            {COMPONENT_CARDS.find((c) => c.name === componentName)?.icon}
          </div>
        );
    }
  };

  return (
    <div ref={triggerRef} className="overflow-hidden">
      <section
        ref={sectionRef}
        data-section="components"
        className="min-h-screen flex flex-col justify-center relative bg-white"
      >
        <div className="container mx-auto px-6 pt-12 pb-8">
          {/* Section header wrapper */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            {/* Animated section header - h2 and badge */}
            <div >
              <span className="inline-block px-3 py-1 border-2 border-black bg-(--color-baby-blue) text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_#000] mb-4">
                Components
              </span>

              <h2
                data-section-heading="components"
                className="opacity-100 lg:opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]"
              >
                Build like
                <br />
                <span className="text-(--color-pink)">Human</span>
              </h2>
            </div>
            {/* Always visible paragraph */}
            <p className="text-lg text-black/70 max-w-md">
              Every component is designed to stand out. No boring defaults —
              just bold, memorable interfaces.
            </p>
          </div>
        </div>

        {/* Horizontal scrolling cards container */}
        <div
          ref={cardsContainerRef}
          className="flex gap-6 pl-6 pr-[50vw] pb-12"
          style={{ willChange: "transform" }}
        >
          {COMPONENT_CARDS.map((component) => (
            <Link
              to={`/docs/${component.name}`}
              key={component.name}
              className="group shrink-0"
            >
              <div
                className={`${component.color} border-2 border-black p-6 w-72 h-64 shadow-[6px_6px_0_#000] transition-all group-hover:shadow-[3px_3px_0_#000] group-hover:translate-x-0.75 group-hover:translate-y-0.75 rounded-lg flex flex-col`}
              >
                <div className="mb-4 flex items-center justify-center h-16">
                  {renderComponentPreview(component.name)}
                </div>
                <h3 className="text-xl font-black mb-2">{component.name}</h3>
                <p className="text-black/70 text-sm flex-1">
                  {component.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Docs <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function LiveDemo() {
  const [switchOn, setSwitchOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <section
      data-section="demo"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-(--color-pink) opacity-20 rotate-12" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-(--color-amber) opacity-20 -rotate-12" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Description */}
          <div className="flex-1">
            <span className="inline-block px-3 py-1 border-2 border-white bg-transparent text-sm font-bold uppercase tracking-wider mb-4">
              Live Preview
            </span>
            <h2
              data-section-heading="demo"
              className="text-4xl md:text-5xl font-black mb-6"
            >
              EXPERIENCE THE
              <br />
              <span className="text-(--color-amber)">BRUTALITY</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Interact with real components. No mockups, no illusions — just
              pure, unadulterated neo-brutalist design in action.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <NeoButton variant="brutal" className="bg-(--color-pink)">
                Primary Action
              </NeoButton>
              <NeoButton variant="brutal" className="bg-(--color-amber)">
                Secondary
              </NeoButton>
              <NeoButton variant="brutal" className="bg-white text-black">
                Tertiary
              </NeoButton>
            </div> */}
          </div>

          {/* Right: Live component demo */}
          <div className="flex-1 w-full max-w-lg">
            <NeoCard className="bg-white text-black">
              <NeoCardHeader>
                <NeoCardTitle className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  Live Component Demo
                </NeoCardTitle>
                <NeoCardDescription>
                  These are real, working NeoStrap components
                </NeoCardDescription>
              </NeoCardHeader>
              <NeoCardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="font-bold text-sm">NeoInput</label>
                  <NeoInput
                    placeholder="Type something brutal..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between py-3 px-4 border-2 border-black bg-(--color-baby-blue) shadow-[3px_3px_0_#000] rounded-lg">
                  <span className="font-bold">NeoSwitch</span>
                  <NeoSwitch checked={switchOn} onCheckedChange={setSwitchOn} />
                </div>

                <div className="flex gap-3">
                  <NeoButton variant="brutal" size="sm" className="flex-1">
                    Accept
                  </NeoButton>
                  <NeoButton
                    variant="brutal"
                    size="sm"
                    className="flex-1 bg-white"
                  >
                    Decline
                  </NeoButton>
                </div>
              </NeoCardContent>
            </NeoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section data-section="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 border-2 border-black bg-(--color-lavender) text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_#000] mb-4">
            Why NeoStrap
          </span>
          <h2
            data-section-heading="features"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
          >
            DESIGNED FOR
            <br />
            <span className="text-red-700">DEVELOPERS</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Built by developers, for developers who want their UIs to make an
            impact.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.color} border-2 border-black p-8 shadow-[6px_6px_0_#000] hover:shadow-[3px_3px_0_#000] hover:translate-x-0.75 hover:translate-y-0.75 transition-all rounded-lg`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="w-10 h-10 mb-4" strokeWidth={2.5} />
              <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
              <p className="text-black/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section
      data-section="testimonials"
      className="py-24 bg-(--color-baby-blue) border-y-2 border-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              #000 20px,
              #000 21px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 border-2 border-black bg-white text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_#000] mb-4">
            Testimonials
          </span>
          <h2
            data-section-heading="testimonials"
            className="text-4xl md:text-5xl lg:text-6xl font-black"
          >
            LOVED BY
            <br />
            <span className="text-(--color-pink)">BUILDERS</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black p-6 shadow-[6px_6px_0_#000] rounded-lg"
            >
              <svg
                className="w-10 h-10 text-black/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-lg font-medium text-black/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-black bg-(--color-amber) flex items-center justify-center font-black text-lg shadow-[2px_2px_0_#000] rounded-full">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-black/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      data-section="cta"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Large decorative text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-black tracking-tighter">BUILD</span>
        </div>

        <div className="relative z-10">
          <h2
            data-section-heading="cta"
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-8"
          >
            READY TO BUILD
            <br />
            <span className="text-(--color-pink) relative inline-block">
              SOMETHING BRUTAL?
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 150 2 298 10"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-xl text-black/70 max-w-2xl mx-auto mb-12">
            Join the movement. Build interfaces that refuse to be ignored.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <NeoButton
              variant="brutal"
              size="lg"
              className="bg-black text-white hover:bg-(--color-amber) hover:text-black text-xl px-10 py-7 h-auto"
              asChild
            >
              <Link to="/docs/getting-started">
                Start Building
                <ArrowRight className="w-6 h-6" />
              </Link>
            </NeoButton>
            <NeoButton
              variant="brutal"
              size="lg"
              className="bg-white text-xl px-10 py-7 h-auto"
              asChild
            >
              <a
                href="https://github.com/kirank55/neostrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
                Star on GitHub
              </a>
            </NeoButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t-4 border-(--color-amber)">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              NEO<span className="text-(--color-pink)">STRAP</span>
            </h3>
            <p className="text-white/60 mb-6 max-w-md">
              A neo-brutalist React component library for developers who want
              their UIs to stand out.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/kirank55/neostrap"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-(--color-amber) hover:bg-(--color-amber) hover:text-black transition-all rounded-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/kirankumargs04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-(--color-pink) hover:bg-(--color-pink) hover:text-black transition-all rounded-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-(--color-amber)">
              Documentation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs/getting-started"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/NeoButton"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Components
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-(--color-amber)">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/kirank55/neostrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/kirankumargs04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} NeoStrap. Built with{" "}
            <Heart className="inline w-4 h-4 text-(--color-pink)" /> by{" "}
            <a
              href="https://x.com/kirankumargs04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-(--color-amber) transition-colors"
            >
              Kiran
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Radix UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================

function HomePage() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden">
      {/* Floating headlines that animate from hero to sections */}
      <FloatingHeadlines />

      <HeroSection h1Ref={h1Ref} />

      <ComponentShowcase />
      <Marquee items={MARQUEE_ITEMS} />
      <LiveDemo />
      <Marquee items={MARQUEE_ITEMS} reverse />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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
  Copy,
  Check,
  Zap,
  Palette,
  Code2,
  Boxes,
  Sparkles,
  Github,
  Twitter,
  Heart,
} from "lucide-react";

// ============================================================================
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
      "NeoStrap made our product look 10x more unique. The brutal aesthetic turned heads at our launch.",
    author: "Sarah Chen",
    role: "Design Lead, Startup",
    avatar: "S",
  },
  {
    quote:
      "Finally, a UI kit that isn't afraid to be bold. Our conversion rates jumped 40% after redesigning with NeoStrap.",
    author: "Marcus Rodriguez",
    role: "Founder, SaaS",
    avatar: "M",
  },
  {
    quote:
      "The attention to detail is insane. Every shadow, every border - it all just works together perfectly.",
    author: "Aisha Patel",
    role: "Frontend Engineer",
    avatar: "A",
  },
];

// ============================================================================
// ANIMATED COMPONENTS
// ============================================================================

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-4 border-y-2 border-black bg-black">
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
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

// Orbiting components container - all components on a single clockwise orbit
function OrbitingComponents() {
  const orbitItems = [
    { type: "button" as const, angle: 0 },
    { type: "switch" as const, angle: 72 },
    { type: "card" as const, angle: 144 },
    { type: "badge" as const, angle: 216 },
    { type: "input" as const, angle: 288 },
  ];

  const renderComponent = (type: "button" | "switch" | "card" | "input" | "badge") => {
    switch (type) {
      case "button":
        return (
          <NeoButton variant="brutal" size="sm" className="bg-(--color-amber) text-xs px-3 py-1 pointer-events-none">
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
              <NeoCardTitle className="text-[10px] font-bold">Mini Card</NeoCardTitle>
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
            <span className="text-xs font-bold uppercase tracking-wider">New</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      style={{
        animation: "spin 30s linear infinite",
      }}
    >
      {orbitItems.map((item, index) => {
        // Calculate position on orbit (radius ~40% of container)
        const radians = (item.angle * Math.PI) / 180;
        const radiusX = 42; // percentage from center
        const radiusY = 38; // slightly elliptical
        const x = 50 + radiusX * Math.cos(radians);
        const y = 50 + radiusY * Math.sin(radians);

        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              // Counter-rotate to keep components upright
              animation: "counter-spin 30s linear infinite",
            }}
          >
            {renderComponent(item.type)}
          </div>
        );
      })}
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

// function TypewriterText({ text }: { text: string }) {
//   const [displayText, setDisplayText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   useEffect(() => {
//     if (isTyping) {
//       if (displayText.length < text.length) {
//         const timeout = setTimeout(() => {
//           setDisplayText(text.slice(0, displayText.length + 1));
//         }, 100);
//         return () => clearTimeout(timeout);
//       } else {
//         setTimeout(() => setIsTyping(false), 2000);
//       }
//     } else {
//       if (displayText.length > 0) {
//         const timeout = setTimeout(() => {
//           setDisplayText(displayText.slice(0, -1));
//         }, 50);
//         return () => clearTimeout(timeout);
//       } else {
//         setTimeout(() => setIsTyping(true), 500);
//       }
//     }
//   }, [displayText, isTyping, text]);

//   return (
//     <span>
//       {displayText}
//       <span className="animate-blink">|</span>
//     </span>
//   );
// }

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install neostrap-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <GridBackground />

      {/* Orbiting decorative components */}
      <OrbitingComponents />

      {/* Decorative corner blocks */}
      <div className="absolute top-8 left-8 w-24 h-24 border-4 border-black bg-(--color-baby-blue) shadow-[8px_8px_0_#000] hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-black bg-(--color-lavender) shadow-[6px_6px_0_#000] hidden lg:block" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border-2 border-black bg-white shadow-[4px_4px_0_#000] rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">
              React + Tailwind CSS
            </span>
          </div>

          {/* Main headline - sticky scroll to h2 */}
          <div className="mb-6">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight transition-all duration-300"
              style={{
                position: scrollY > 0.3 ? "fixed" : "relative",
                top: scrollY > 0.3 ? `${50 + scrollY * 300}px` : "auto",
                left: scrollY > 0.3 ? "50%" : "auto",
                transform: scrollY > 0.3
                  ? `translateX(-50%) scale(${1 - scrollY * 0.4})`
                  : "none",
                opacity: scrollY > 0.8 ? 0 : 1,
                zIndex: 50,
                textShadow: `
                  4px 4px 0 var(--color-amber),
                  8px 8px 0 #000
                `,
              }}
            >
              <span className="block">BUILD</span>
              <span className="block text-(--color-pink)">BRUTAL</span>
              <span className="block">INTERFACES</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl font-medium text-black/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            A neo-brutalist React component library that breaks the rules.{" "}
            <span className="font-bold text-black">Bold. Unapologetic. Beautiful.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
              <Link to="/docs/NeoButton">
                Explore Components
              </Link>
            </NeoButton>
          </div>

          {/* Install command */}
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block px-3 py-1 border-2 border-black bg-(--color-baby-blue) text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_#000] mb-4">
              Components
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              BUILT FOR
              <br />
              <span className="text-(--color-pink)">IMPACT</span>
            </h2>
          </div>
          <p className="text-lg text-black/70 max-w-md">
            Every component is designed to stand out. No boring defaults — just
            bold, memorable interfaces.
          </p>
        </div>

        {/* Component grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPONENT_CARDS.map((component, index) => (
            <Link
              to={`/docs/${component.name}`}
              key={component.name}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`${component.color} border-2 border-black p-6 h-full shadow-[6px_6px_0_#000] transition-all group-hover:shadow-[3px_3px_0_#000] group-hover:translate-x-[3px] group-hover:translate-y-[3px] rounded-lg`}
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-xl font-black mb-2">{component.name}</h3>
                <p className="text-black/70 text-sm">{component.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Docs <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveDemo() {
  const [switchOn, setSwitchOn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              EXPERIENCE THE
              <br />
              <span className="text-(--color-amber)">BRUTALITY</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Interact with real components. No mockups, no illusions — just pure,
              unadulterated neo-brutalist design in action.
            </p>

            <div className="flex flex-wrap gap-4">
              <NeoButton variant="brutal" className="bg-(--color-pink)">
                Primary Action
              </NeoButton>
              <NeoButton variant="brutal" className="bg-(--color-amber)">
                Secondary
              </NeoButton>
              <NeoButton variant="brutal" className="bg-white text-black">
                Tertiary
              </NeoButton>
            </div>
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
                {/* Input demo */}
                <div className="space-y-2">
                  <label className="font-bold text-sm">NeoInput</label>
                  <NeoInput
                    placeholder="Type something brutal..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                {/* Switch demo */}
                <div className="flex items-center justify-between py-3 px-4 border-2 border-black bg-(--color-baby-blue) shadow-[3px_3px_0_#000] rounded-lg">
                  <span className="font-bold">NeoSwitch</span>
                  <NeoSwitch checked={switchOn} onCheckedChange={setSwitchOn} />
                </div>

                {/* Button row */}
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
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 border-2 border-black bg-(--color-lavender) text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0_#000] mb-4">
            Why NeoStrap
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            DESIGNED FOR
            <br />
            <span className="text-(--color-amber)">DEVELOPERS</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Built by developers, for developers who want their UIs to make an impact.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.color} border-2 border-black p-8 shadow-[6px_6px_0_#000] hover:shadow-[3px_3px_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all rounded-lg`}
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
    <section className="py-24 bg-(--color-baby-blue) border-y-2 border-black relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
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
              {/* Quote icon */}
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
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Large decorative text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20vw] font-black tracking-tighter">BUILD</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8">
            READY TO BUILD
            <br />
            <span className="text-(--color-pink) relative inline-block">
              SOMETHING BRUTAL?
              {/* Underline decoration */}
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
              A neo-brutalist React component library for developers who want their
              UIs to stand out.
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

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <Marquee items={MARQUEE_ITEMS} />
      <ComponentShowcase />
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
import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

// Exported props interface extends HTML attributes so JSX recognizes custom props
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  autoplay?: boolean;
  interval?: number;
  indicatorType?: "horizontal" | "vertical";
  loop?: boolean;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  slideCount: number;
  scrollTo: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoplay = false,
      interval = 3000,
      loop,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        // ensure carousel loops when autoplay is enabled; top-level `loop` prop takes precedence over `opts.loop`
        loop: autoplay ? true : loop ?? opts?.loop,
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [slideCount, setSlideCount] = React.useState(0);

    const scrollTo = React.useCallback(
      (index: number) => api?.scrollTo(index),
      [api]
    );

    // Autoplay refs/state
    const autoplayTimer = React.useRef<number | null>(null);
    const interactionRef = React.useRef(false);

    const clearAutoplay = React.useCallback(() => {
      if (autoplayTimer.current !== null) {
        window.clearInterval(autoplayTimer.current);
        autoplayTimer.current = null;
      }
    }, []);

    const startAutoplay = React.useCallback(() => {
      clearAutoplay();
      if (!api || !autoplay) return;
      autoplayTimer.current = window.setInterval(() => {
        api?.scrollNext();
      }, interval);
    }, [api, autoplay, interval, clearAutoplay]);

    const pauseAutoplay = React.useCallback(() => {
      interactionRef.current = true;
      clearAutoplay();
    }, [clearAutoplay]);

    const resumeAutoplay = React.useCallback(() => {
      interactionRef.current = false;
      if (autoplay) startAutoplay();
    }, [autoplay, startAutoplay]);

    // Pause when page is hidden, resume when visible
    React.useEffect(() => {
      function onVisibility() {
        if (document.hidden) {
          clearAutoplay();
        } else {
          if (!interactionRef.current) startAutoplay();
        }
      }
      document.addEventListener("visibilitychange", onVisibility);
      return () =>
        document.removeEventListener("visibilitychange", onVisibility);
    }, [startAutoplay, clearAutoplay]);

    // Start/stop autoplay on api/autoplay/interval changes
    React.useEffect(() => {
      if (!api) return;
      clearAutoplay();
      if (autoplay && !interactionRef.current) {
        startAutoplay();
      }
      return () => clearAutoplay();
    }, [api, autoplay, interval, startAutoplay, clearAutoplay]);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setSelectedIndex(api.selectedScrollSnap());
      setSlideCount(api.scrollSnapList().length);
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    React.useEffect(() => {
      if (!api) return;
      const shouldLoop =
        Boolean(autoplay) || Boolean(loop) || Boolean(opts?.loop);
      api.reInit({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: shouldLoop,
      });
    }, [api, autoplay, opts, orientation]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          selectedIndex,
          slideCount,
          scrollTo,
          autoplay,
          interval,
          loop,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onPointerDownCapture={pauseAutoplay}
          onPointerUpCapture={resumeAutoplay}
          onFocusCapture={pauseAutoplay}
          onBlurCapture={resumeAutoplay}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  minHeight?: string;
}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, minHeight, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden w-full">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className
          )}
          style={{ minHeight }}
          {...props}
        />
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    // Slide item
    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

type IndicatorVariant = "bullets" | "content";

interface SlideContent {
  headline: string;
  description?: string;
}

interface CarouselIndicatorsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: IndicatorVariant;
  indicatorType?: "horizontal" | "vertical";
  indicatorColor?: string;
  slides?: SlideContent[];
}

const CarouselIndicators = React.forwardRef<
  HTMLDivElement,
  CarouselIndicatorsProps
>(
  (
    {
      className,
      variant = "bullets",
      indicatorType = "horizontal",
      indicatorColor = "#FE5BD6",
      slides = [],
      ...props
    },
    ref
  ) => {
    const { slideCount, selectedIndex, scrollTo, autoplay, interval } =
      useCarousel();

    if (!slideCount || slideCount <= 1) return null;

    // Bullets variant - dots centered below carousel
    if (variant === "bullets") {
      return (
        <div
          ref={ref}
          className={cn("flex gap-2 justify-center", className)}
          {...props}
        >
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={selectedIndex === i}
              className={cn(
                "h-2 w-2 rounded-full transition-colors translate-y-3 cursor-pointer"
              )}
              style={{
                backgroundColor:
                  selectedIndex === i ? indicatorColor : "#e2e8f0",
              }}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
      );
    }

    // Content variant - headline & paragraph on the left side
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 justify-between", className)}
        {...props}
      >
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-pressed={selectedIndex === i}
            className={cn("text-left p-3 rounded-lg transition-all relative")}
            onClick={() => scrollTo(i)}
          >
            <h4 className={cn("font-bold text-sm transition-colors")}>
              {slide.headline}
            </h4>
            {slide.description && (
              <p
                className={cn(
                  "text-xs mt-1 overflow-hidden transition-all ease-in-out duration-300",
                  selectedIndex === i ? "max-h-24  py-2" : "max-h-0 py-0"
                )}
                style={{
                  opacity: selectedIndex === i ? 1 : 0,
                }}
              >
                {slide.description}
              </p>
              // <p
              //   className={cn("text-xs mt-1 transition-colors")}
              //   style={{
              //     backgroundColor:
              //       selectedIndex === i ? indicatorColor : "#e2e8f0",
              //     height: selectedIndex === i ? "100%" : "0%",

              //     transitionProperty: "height",
              //     transitionDuration:
              //       selectedIndex === i ? `250ms` : "0ms",
              //   }}
              // >
              //   {slide.description}
              // </p>
            )}

            {/* Red progress bar at bottom */}
            {indicatorType === "horizontal" && (
              <div className="mt-3 h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  aria-hidden
                  className="h-full"
                  style={{
                    backgroundColor:
                      selectedIndex === i ? indicatorColor : "#e2e8f0",
                    width: selectedIndex === i && autoplay ? "100%" : "0%",
                    transitionProperty: "width",
                    transitionDuration:
                      selectedIndex === i && autoplay ? `${interval}ms` : "0ms",
                  }}
                />
              </div>
            )}
            {/* Vertical progress bar on left (animates top → bottom) */}
            {indicatorType === "vertical" && (
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 rounded overflow-hidden"
              >
                <div
                  className={`w-full`}
                  style={{
                    backgroundColor:
                      selectedIndex === i ? indicatorColor : "#e2e8f0",
                    height: selectedIndex === i && autoplay ? "100%" : "0%",
                    transitionProperty: "height",
                    transitionDuration:
                      selectedIndex === i && autoplay ? `${interval}ms` : "0ms",
                  }}
                />
              </div>
            )}
          </button>
        ))}
      </div>
    );
  }
);
CarouselIndicators.displayName = "CarouselIndicators";

export {
  type CarouselApi,
  type IndicatorVariant,
  type SlideContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
};

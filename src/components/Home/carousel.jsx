import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carasol1 from "../../assets/carasol1.png";

// Only slide data — images 2-4 load lazily after mount
const slideData = [
  {
    imgSrc: carasol1,
    imgLazy: null,
    tag: "BIRTHPLACE OF COFFEE",
    title: "Premium Ethiopian",
    accent: "Coffee Export",
    sub: "Delivering the world's finest Arabica — from our highland farms to your roastery.",
    cta: "Explore Origins",
    ctaLink: "/products",
    align: "left",
  },
  {
    imgSrc: null,
    imgLazy: () => import("../../assets/carasol2.png"),
    tag: "GLOBAL PARTNERSHIPS",
    title: "Trusted By",
    accent: "the World",
    sub: "We export with integrity, traceability, and a passion for quality that partners rely on.",
    align: "left",
  },
  {
    imgSrc: null,
    imgLazy: () => import("../../assets/carasol3_opt.jpg"),
    tag: "FARM TO FREIGHT",
    title: "Direct From",
    accent: "Ethiopian Farmers",
    sub: "Empowering smallholder communities while sourcing the finest traceable green coffee.",
    cta: "Our Story",
    ctaLink: "/about",
    align: "left",
  },
  {
    imgSrc: null,
    imgLazy: () => import("../../assets/carasol44_opt.jpg"),
    tag: "SENSORY EXCELLENCE",
    title: "Experience the",
    accent: "Richness",
    sub: "Complex, aromatic, and vibrant — Ethiopian coffee unlike anything else in the world.",
    cta: "View Products",
    ctaLink: "/products",
    align: "left",
  },
];

const INTERVAL = 4000;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(slideData);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  // Preload images 2-4 progressively after first render
  useEffect(() => {
    let cancelled = false;
    const loadImages = async () => {
      const updated = [...slideData];
      for (let i = 1; i < slideData.length; i++) {
        if (cancelled) break;
        try {
          const mod = await slideData[i].imgLazy();
          updated[i] = { ...updated[i], imgSrc: mod.default };
          if (!cancelled) setSlides([...updated]);
        } catch (e) {
          // ignore
        }
        // Small delay between loads to avoid blocking
        await new Promise((r) => setTimeout(r, 300));
      }
    };
    // Start loading after a short delay so the hero paint isn't blocked
    const t = setTimeout(loadImages, 800);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, []);

  // Auto-advance timer (simple interval, no RAF loop)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setCurrent(idx);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    setTimeout(() => setAnimating(false), 700);
  };

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = () => goTo((current + 1) % slides.length);

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transition: "opacity 900ms ease-in-out",
            willChange: "opacity",
          }}
        >
          {/* Background image */}
          {slide.imgSrc ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.imgSrc})`,
                transform: i === current ? "scale(1.05)" : "scale(1)",
                transition: "transform 6s ease-out",
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-stone-900" />
          )}

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#fafafa] dark:from-black to-transparent" />

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-28">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 mb-5"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.2s",
                }}
              >
                <span className="w-8 h-px bg-amber-400" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#f59e0b" }}>
                  {slide.tag}
                </span>
                <span className="w-8 h-px bg-amber-400" />
              </div>

              <h1
                className="text-5xl md:text-7xl font-black text-white leading-none mb-3"
                style={{
                  fontFamily: "var(--font-playfair)",
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease 0.35s",
                }}
              >
                {slide.title}{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {slide.accent}
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-white/80 font-medium mb-8 max-w-lg leading-relaxed"
                style={{
                  fontFamily: "var(--font-outfit)",
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(25px)",
                  transition: "all 0.8s ease 0.5s",
                }}
              >
                {slide.sub}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Nav Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot Indicators — CSS-animated progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="group relative flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block rounded-full transition-all duration-400"
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                background:
                  i === current
                    ? "linear-gradient(to right, #ef4444, #f59e0b)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;


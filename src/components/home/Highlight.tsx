"use client";
import React, { useEffect, useState, useRef } from "react";
import { HighlightCard } from "./HighlightCard";
import { useScroll } from "framer-motion";
export function Highlight() {
  const container = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: isMounted ? container : undefined,
    offset: ["start start", "end end"],
  });
  const highlights = [
    {
      img: "/highlight/1.png",
      title: "GPU Compute",
      description:
        "Rent GPUs for AI training and inference. Affordable, scalable compute power for all. Why it matters: Access high- performance GPUs on demand, no need to own expensive hardware. Ideal for researchers, startups, and creators who need flexible, affordable compute resources.",
      cta: {
        label: "LEARN MORE",
        href: "https://app.onexo.ai/gpu-marketplace",
      },
      align: "start",
    },
    {
      img: "/highlight/2.png",
      title: "AI Models",
      description:
        "Generate images, text, audio, code, and video with ease. Unleash creativity with Onexo. Who it’s for: Artists, developers, and businesses looking to integrate state-of-the-art AI into their workflows, no technical barriers, just results.",
      cta: { label: "LEARN MORE", href: "https://app.onexo.ai/ai-models" },
      align: "start",
    },
    {
      img: "/highlight/3.png",
      title: "Swarm Network",
      description:
        "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income. Why it matters: Anyone can contribute their device’s unused power to the network and earn rewards, making advanced AI accessible and affordable for all.",
      cta: { label: "LEARN MORE", href: "https://swarm.onexo.ai" },
      align: "start",
    },
    {
      img: "/highlight/4.png",
      title: "AI Agents",
      description:
        "Autonomous AI solutions for decentralized apps. The future of blockchain automation. Who it’s for: Web3 builders and enterprises seeking autonomous, intelligent agents to power next-gen dApps and automate complex workflows.",
      cta: { label: "LEARN MORE", href: "/" },
      align: "start",
    },
  ];
  const mobileHighlights = highlights.map((h, i) => ({
    img: `/highlight/mb-${i + 1}.png`,
    title: h.title,
    description: h.description,
    cta: h.cta,
  }));
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = highlights.length;
  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(idx, count - 1));
    setActive(clamped);
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[clamped] as HTMLElement | null;
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, clientWidth } = track;
    const idx = Math.round(scrollLeft / clientWidth);
    if (idx !== active) setActive(idx);
  };
  if (!isMounted) {
    return (
      <div className="mt-8">
        <div className="text-center mb-12">
          <h2 className="text-[#AED5FF] font-normal text-3xl mb-2">
            Product Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 w-full card-container">
          {highlights.map((_, index) => (
            <div
              key={index}
              className="h-64 bg-blue-900/20 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div ref={container} className="mt-16 mb-8">
      <div className="w-full text-center mb-12 lg:mb-16 px-4 z-10">
        <h1 className="text-4xl lg:text-5xl tracking-tight mb-4 lg:mb-6">
          <span className="text-[#ACD2FF]">
            Product <span className="font-bold">Highlights</span>
          </span>
        </h1>
      </div>
      <div className="hidden w-full max-w-7xl mx-auto lg:flex flex-col gap-6 px-4 card-container">
        {highlights.map((h, index) => (
          <HighlightCard
            key={index}
            image={h.img}
            title={h.title}
            description={h.description}
            cta={h.cta}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
      <div className="lg:hidden px-0">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {mobileHighlights.map((h, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-full"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative w-full px-4">
                <div className="relative w-full overflow-hidden">
                  <img src={h.img} alt={h.title} className="w-full h-full" />
                  <div className="absolute inset-0 p-6 flex flex-col">
                    <h3 className="text-white font-sans text-2xl pl-4 pt-2 leading-8 tracking-tight ">
                      {h.title}
                    </h3>
                    <div className="flex-1" />
                    <p className="text-white mb-20 text-xs font-sans font-thin px-4 text-[15px] leading-5">
                      {h.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open(h.cta.href, "_blank");
                      }
                    }}
                    className="relative flex items-center justify-center px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
                    style={{
                      backgroundImage: "url('/compute/button.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minWidth: 80,
                      minHeight: 10,
                      borderRadius: 14,
                      position: "absolute",
                      bottom: "3%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "13rem",
                    }}
                    type="button"
                    aria-label={h.cta.label}
                  >
                    {h.cta.label}
                  </button>
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          {highlights.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="relative h-3 w-3 rounded-full overflow-hidden"
                style={{ backgroundColor: "#1A2540" }}
              >
                <span
                  className="absolute inset-0"
                  style={{
                    backgroundColor: isActive ? "#1E90FF" : "transparent",
                    transform: `scale(${isActive ? 1 : 0})`,
                    transformOrigin: "center",
                    transition: "transform 250ms ease",
                    borderRadius: "9999px",
                    display: "block",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

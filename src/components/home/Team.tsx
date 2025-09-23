import React, { useRef, useState, useEffect, useCallback } from "react";

export default function Team() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const slides = [
    { src: "/token/team-1.png", alt: "Team" },
    { src: "/token/team-2.png", alt: "Team" },
    { src: "/token/team-3.png", alt: "Team" },
  ];

  const updateActiveFromScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth } = el;
    const i = Math.round(scrollLeft / clientWidth);
    setActive(Math.min(slides.length - 1, Math.max(0, i)));
  }, [slides.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateActiveFromScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    updateActiveFromScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [updateActiveFromScroll]);

  const goTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const x = index * el.clientWidth;
    el.scrollTo({ left: x, behavior: "smooth" });
    setActive(index);
  };

  return (
    <section>
      <div className="text-center mb-6 mt-10">
        <h1 className="text-5xl font-semibold text-[#ACD2FF]">Meet Our Team</h1>
      </div>

      <section className="relative px-6 md:px-12 py-12 overflow-hidden">
        <img
          src="/token/glow.png"
          alt="spotlight"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Mobile slider (< lg) */}
        <div className="relative z-10 block lg:hidden">
          <div
            ref={trackRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-4 w-full [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {slides.map((s, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-full px-2"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Dots indicator (3 dots) */}
          <div className="flex items-center justify-center gap-3 mt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-3 w-3 rounded-full transition-colors"
                style={{
                  backgroundColor: i === active ? "#0361DA" : "#141F46",
                }}
              />
            ))}
          </div>
        </div>

        {/* Original desktop/tablet layout (>= lg) */}
        <div className="relative z-10 hidden lg:flex flex-col md:flex-row md:items-start items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/token/team-1.png"
              alt="Team"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/token/team-2.png"
              alt="Team"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/token/team-3.png"
              alt="Team"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mt-12">
        <button
          onClick={() => {
            window.location.href = "/about/team";
          }}
          className="relative px-4 py-3 rounded-xl text-black font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
        >
          <div className="absolute inset-0">
            <img
              src="/landing-ai-model/button-bg.png"
              alt="Button Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="relative z-10 px-6">View Full Team</span>
        </button>
      </div>
    </section>
  );
}

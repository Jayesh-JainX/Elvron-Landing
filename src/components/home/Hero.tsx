import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    />
  );
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type SplitTextProps = { text: string; className?: string; delay?: number };

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in"
          style={{
            animationDelay: `${delay + i * 0.05}s`,
            animationFillMode: "forwards",
          }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

const StatGlow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className={`stat-glow-wrap ${className}`} {...rest}>
      <div className="stat-glow-inner">{children}</div>
    </div>
  );
};

function PresaleCard() {
  const openPresale = () => window.open("https://swarm.onexo.ai/", "_blank");
  const [useAltSlider, setUseAltSlider] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setUseAltSlider((prev) => !prev);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-[380px] h-[550px]">
      <div
        className="absolute inset-0 w-[510px] h-[510px] rounded-full"
        style={{
          background: "radial-gradient(circle, #73B0FF 0%, transparent 70%)",
          filter: "blur(4px)",
          opacity: 0.45,
          mixBlendMode: "color-dodge",

          top: "45%",
          left: "45%",
          transform: "translate(-45%, -45%) scale(1.2)",
        }}
      />

      <img
        src="/hero/right-glow.png"
        alt="Glow"
        className="absolute inset-0 w-full h-full z-0"
      />
      <img
        src="/hero/right-bg.png"
        alt="Presale background"
        className="absolute inset-0 w-full h-[500px] z-0"
      />
      <img
        src="/hero/glow-card.png"
        alt="Card glow"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto "
      />

      <div className="absolute inset-0 p-8 flex flex-col text-white z-20">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <img src="/hero/nlov.png" alt="Presale" className=" w-56" />
          </div>
          <div className="text-xs font-semibold top-0 pb-14 text-[#82FFEA]">
            300% to TGE
          </div>
        </div>

        <div className="flex justify-between my-4 text-sm">
          <div>
            <span className="text-[#80B8FF]">Actual Price:</span>{" "}
            <span className="font-semibold">$0.02</span>
          </div>
          <div>
            <span className="text-[#80B8FF]">Listing Price:</span>{" "}
            <span className="font-semibold">$0.08</span>
          </div>
        </div>

        <div className="relative h-8 my-2 w-full bg-[#010726] rounded-2xl">
          <div className="progress-window w-[200px] h-full overflow-hidden rounded-2xl">
            <div className="progress-track">
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0 "
              />
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0"
              />
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0"
              />
            </div>
          </div>

          <div
            className="absolute top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{ left: "45%" }}
          >
            <img
              src="/hero/slider-button.png"
              alt="Slider button"
              className={`h-16 w-auto transition-opacity duration-500 ease-in-out ${
                useAltSlider ? "opacity-50" : "opacity-100"
              }`}
            />
            <img
              src="/hero/slider-button-2.png"
              alt="Slider button alt"
              className={`h-16 w-auto transition-opacity duration-500 ease-in-out absolute inset-0 ${
                useAltSlider ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <span className="text-sm text-[#80B8FF]">USD Raised:</span>
          <span className="text-lg font-bold">Nothing </span>
        </div>

        <button
          onClick={() => {
            window.open("https://forms.gle/awCVM6xa9hUFQv926", "_blank");
          }}
          className="relative px-4 py-3 rounded-xl text-black font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
        >
          <div className="absolute inset-0">
            <img
              src="/hero/button-bg.png"
              alt="Button Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="relative z-10 px-6">Join the Waitlist</span>
        </button>

        <div className="mt-4 text-center">
          <h4 className="text-sm font-semibold mb-3 text-[#7D8EE6]">
            COMMUNITY & SUPPORT
          </h4>
          <div className="flex justify-center gap-4">
            <a href="https://x.com/onexo" className="hover:opacity-80">
              <img src="/hero/x.png" alt="X" className="w-8 h-8" />
            </a>
            <a href="https://t.me/onexocommunity" className="hover:opacity-80">
              <img
                src="/hero/telegram.png"
                alt="Telegram"
                className="w-8 h-8"
              />
            </a>
            <a href="mailto:support@onexo.ai" className="hover:opacity-80">
              <img src="/hero/mail.png" alt="Email" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-3 text-center">
            SUBSCRIBE FOR UPDATE
          </h4>
          <div className="flex gap-2 bg-[#01092D] rounded-lg p-1">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1  rounded-lg px-3 py-2 text-[#2F4195] placeholder-[#2F4195] text-sm focus:outline-none focus:border-blue-400"
              style={{ backgroundColor: "#01092D" }}
            />
            <button
              className="text-white px-4 py-2 rounded-lg text-xs font-normal hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#0D1952" }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => {
      observerRef.current?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const openPresale = () => window.open("https://swarm.onexo.ai/", "_blank");

  return (
    <>
      <Helmet>
        <title>Onexo - Decentralized AI Compute Marketplace</title>
        <meta
          name="description"
          content="Onexo is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta
          property="og:title"
          content="Onexo - Decentralized AI Compute Marketplace"
        />
        <meta
          property="og:description"
          content="Onexo is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://onexo.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Onexo - Decentralized AI Compute Marketplace"
        />
        <meta
          name="twitter:description"
          content="Onexo is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      <section className="relative">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className={`relative min-h-screen pt-24 flex items-center ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } transition-all duration-700`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-start">
              <div>
                <h1 className="text-left font-extrabold tracking-tight leading-tight mb-4 reveal reveal-delay-2">
                  <div className="block text-center lg:text-start pl-4 font-sans font-normal text-3xl lg:text-5xl text-white">
                    The WORLD'S FIRST
                  </div>
                  <div className="flex flex-col items-center lg:gap-2 lg:block">
                    <div className="inline-block relative">
                      <div className="absolute top-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute top-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <span className="block font-sans space-x-2 p-2 border-2 border-b-0 border-[#265CA8] mt-2 text-3xl lg:text-5xl text-[#318AF3] relative">
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-black to-[#00377E] -z-10"
                          style={{ width: "100%" }}
                        />
                        <SplitText text="BROWSER" delay={0.3} />
                        <SplitText text="BASED" delay={0.3} />
                      </span>
                    </div>

                    <div className="inline-block relative">
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <span className="block font-sans space-x-2 p-2 border-2 border-[#265CA8] text-3xl lg:text-5xl text-[#318AF3] relative">
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-black to-[#00377E] -z-10"
                          style={{ width: "100%" }}
                        />
                        <SplitText text="COMPUTE" delay={0.9} />
                        <SplitText text="PLATFORM." delay={0.9} />
                      </span>
                    </div>
                  </div>
                </h1>

                <div className="text-white text-center lg:text-start font-sans text-xs lg:text-sm my-10">
                  Onexo turns idle phones, laptops, and PCs into GPU power.
                  Together, we build a community supercomputer that speeds up
                  AI, supports developers, creates smart agents, and boosts
                  gaming and research.
                </div>

                <div className="grid  mb-10 lg:mb-0 grid-cols-3 gap-2 lg:gap-5 max-w-3xl reveal reveal-delay-4">
                  <StatGlow>
                    <img
                      src="/hero/stat-1.png"
                      alt=""
                      className="block w-full h-auto"
                    />
                  </StatGlow>
                  <StatGlow>
                    <img
                      src="/hero/stat-2.png"
                      alt=""
                      className="block w-full h-auto"
                    />
                  </StatGlow>
                  <StatGlow>
                    <img
                      src="/hero/stat-3.png"
                      alt=""
                      className="block w-full h-auto"
                    />
                  </StatGlow>
                </div>

                <div className="flex justify-start mt-4 reveal reveal-delay-3">
                  <button
                    onClick={openPresale}
                    className="p-0 border-none bg-transparent hover:bg-transparent"
                  >
                    <img
                      src="/hero/button-1.png"
                      alt="Start Earning"
                      className="h-12 w-auto"
                    />
                  </button>
                  <button
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1p16Vn1tdmRbCapAERh3hldjrrAbiWACz/view?usp=drive_link",
                        "_blank"
                      );
                    }}
                    className="p-0 border-none bg-transparent hover:bg-transparent"
                  >
                    <img
                      src="/hero/button-2.png"
                      alt="Read Whitepaper"
                      className="h-12 w-auto"
                    />
                  </button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end lg:mr-20 items-start pt-10 lg:pt-0">
                <PresaleCard />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <style>{`
        .animate-fade-in { animation: fade-in .5s ease forwards; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }

        .reveal { opacity: 0; transform: translateY(10px); transition: all .6s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: .1s; }
        .reveal-delay-2 { transition-delay: .2s; }
        .reveal-delay-3 { transition-delay: .3s; }
        .reveal-delay-4 { transition-delay: .4s; }
        .reveal-delay-5 { transition-delay: .5s; }
        .reveal-delay-6 { transition-delay: .6s; }

        .stat-glow-wrap {
          position: relative;
          overflow: hidden;
          border-bottom-right-radius: 28px;
          border: 1px solid #002554;
          background: #002554;
          isolation: isolate;
        }
        .stat-glow-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #0361DA, transparent);
          animation: statGlowSweep 2.6s linear infinite;
          z-index: 1;
          border-radius: 10px;
          filter: blur(10px);
          transform: translateX(-150%);
        }
        .stat-glow-inner {
          position: relative;
          z-index: 2;
          border-radius: 0px;
          overflow: hidden;
          background: transparent;
        }
        @keyframes statGlowSweep {
          0%   { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }

        
        .progress-window {
          position: relative;
          overflow: hidden;
          width: 200px; 
          height: 100%;
          border-radius: 16px;
        }
        .progress-track {
          display: flex;
          width: max-content;
          animation: progressMarquee 3s linear infinite;
        }
        .progress-track img {
          flex: 0 0 auto;
          width: 200px;
          height: 100%;
        }
        @keyframes progressMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-200px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

import React, { useState } from "react";

type CardProps = {
  title: string;
  subtitle: string;
  img: string;
  className?: string;
};

const tokenInfo = [
  { label: "Total supply", value: "500M" },
  { label: "Ticker", value: "$NLOV" },
  { label: "Chain", value: "SOL" },
  { label: "Current Price", value: "$0.02" },
  { label: "TGE Price", value: "$0.08" },
  { label: "Fully Diluted Value", value: "$40M" },
];

const MobileTokenSlider: React.FC = () => {
  const items = [
    {
      title: "Subscriptions",
      subtitle: "Unlock premium features with $NLOV.",
      img: "token/subscriptions.png",
    },
    {
      title: "Governance",
      subtitle: "Shape the future via DAO voting.",
      img: "token/governance.png",
    },
    {
      title: "Staking",
      subtitle: "Secure the network and boost rewards.",
      img: "token/staking.png",
    },
    {
      title: "Marketplace",
      subtitle: "Access GPUs, run AI, deploy agents.",
      img: "token/market.png",
    },
    {
      title: "Swarm Rewards",
      subtitle: "Earn $NLOV by contributing compute.",
      img: "token/reward.png",
    },
  ];

  const [active, setActive] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  const dotClick = (i: number) => {
    const el = listRef.current;
    if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>("[data-slide]")[i];
    if (slide) {
      slide.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let rAF = 0;
    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const slides = Array.from(
          el.querySelectorAll<HTMLElement>("[data-slide]")
        );
        if (!slides.length) return;
        const { scrollLeft, clientWidth } = el;
        const idx = Math.round(scrollLeft / clientWidth);
        setActive(Math.min(Math.max(idx, 0), slides.length - 1));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rAF);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight")
      dotClick(Math.min(active + 1, items.length - 1));
    if (e.key === "ArrowLeft") dotClick(Math.max(active - 1, 0));
  };

  return (
    <div className="lg:hidden w-full my-8">
      <div className="w-full flex justify-center">
        <img
          src="/token/mob-coin-new.png"
          alt="coin"
          className="w-[78vw] max-w-[380px] sm:w-[68vw] sm:max-w-[420px]"
          style={{
            filter:
              "drop-shadow(0 10px 25px rgba(0,0,0,0.35)) drop-shadow(0 0 40px rgba(88,160,255,0.55))",
          }}
        />
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div
          ref={listRef}
          onKeyDown={onKeyDown}
          tabIndex={0}
          className="
            w-full
            overflow-x-auto
            flex
            snap-x snap-mandatory
            scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none]
          "
          style={{ scrollBehavior: "smooth" }}
          aria-roledescription="carousel"
          aria-label="$NLOV utilities"
        >
          <style>{`
            [data-mobile-track]::-webkit-scrollbar { display: none; height: 0; width: 0; }
          `}</style>

          <div
            data-mobile-track
            className="
              flex w-full
            "
          >
            {items.map((it) => (
              <div
                key={it.title}
                data-slide
                className="
                  snap-center shrink-0
                  w-full
                "
                aria-label={`${it.title} slide`}
              >
                <div className="">
                  <Card
                    title={it.title}
                    subtitle={it.subtitle}
                    img={it.img}
                    className="w-full h-[200px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => dotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                h-2.5 w-2.5 rounded-full transition-colors
                ${active === i ? "bg-[#2F6BFF]" : "bg-[#1A2440]"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, img, className }) => {
  return (
    <div
      className={[
        "relative isolate rounded-2xl w-[320px] h-[150px] overflow-hidden",

        className || "",
      ].join(" ")}
    >
      <img
        src={`/${img}`}
        alt={title}
        className="absolute inset-0 h-full w-full object-contain pointer-events-none"
      />
    </div>
  );
};

const TokenShowcase: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-[85vw] mx-auto">
      <div className="relative mx-auto max-w-7xl px-10">
        <div className="text-center space-y-4">
          <h1 className="lg:text-5xl text-4xl font-semibold text-[#ACD2FF]">
            $NLOV Token
          </h1>
          <div className="max-w-5xl mx-auto text-sm md:text-base font-normal text-gray-300 leading-relaxed tracking-wide">
            $NLOV is set to become the backbone of the Elvron ecosystem,
            powering all features and transactions. With the full platform and
            features already live, $NLOV demand—and its value—will naturally
            skyrocket at launch
          </div>
        </div>

        <div
          className=" hidden lg:block
            relative mx-auto h-[760px]
            w-full max-w-[1500px]
          "
        >
          <img
            src="/token/ring.png"
            alt="center glow lines"
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[360px]
              opacity-95 pointer-events-none z-0
              mix-blend-screen
            "
          />

          <img
            src="/token/coin.png"
            alt="coin"
            className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[380px] 
              z-20
              cursor-pointer
              transition-opacity duration-500 ease-in-out
            `}
            style={{
              filter:
                "drop-shadow(0 10px 25px rgba(0,0,0,0.35)) drop-shadow(0 0 40px rgba(88,160,255,0.55))",
              opacity: isHovered ? 0 : 1,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />

          <img
            src="/token/coin-new.png"
            alt="coin hover"
            className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[380px] 
              z-20
              cursor-pointer
              transition-opacity duration-500 ease-in-out
            `}
            style={{
              filter:
                "drop-shadow(0 10px 25px rgba(0,0,0,0.35)) drop-shadow(0 0 40px rgba(88,160,255,0.55))",
              opacity: isHovered ? 1 : 0,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />

          <div className="hidden md:block">
            <div className="absolute left-1/2 top-[14%] -translate-x-1/2 z-10">
              <Card
                title="Subscriptions"
                subtitle="Unlock premium features with $NLOV."
                img="token/subscriptions.png"
              />
            </div>

            <div className="absolute left-[6%] top-[40%] z-10">
              <Card
                title="Governance"
                subtitle="Shape the future via DAO voting."
                img="token/governance.png"
                className="w-[300px]"
              />
            </div>

            <div className="absolute right-[6%] top-[40%] z-10">
              <Card
                title="Staking"
                subtitle="Secure the network and boost rewards."
                img="token/staking.png"
                className="w-[300px]"
              />
            </div>

            <div className="absolute left-[18%] bottom-[14%] z-10">
              <Card
                title="Marketplace"
                subtitle="Access GPUs, run AI, deploy agents."
                img="token/market.png"
              />
            </div>

            <div className="absolute right-[18%] bottom-[14%] z-10">
              <Card
                title="Swarm Rewards"
                subtitle="Earn $NLOV by contributing compute."
                img="token/reward.png"
              />
            </div>
          </div>
        </div>

        <MobileTokenSlider />
      </div>
      <div className="flex justify-center mb-16">
        <button
          onClick={() => {
            window.location.href = "/whitepaper";
          }}
          className="w-full max-w-[230px] relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-black font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
        >
          <div className="absolute inset-0">
            <img
              src="/landing-ai-model/button-bg.png"
              alt="Button Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="relative z-10">Read Docs</span>
        </button>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-5xl font-semibold text-[#ACD2FF]">Tokenomics</h1>
      </div>

      <div aria-labelledby="tokenomics-heading" className="mx-auto py-12">
        <h2 id="tokenomics-heading" className="sr-only">
          Tokenomics
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden lg:h-[430px]">
              <img
                src="/token/graph.png"
                alt="Token distribution graph"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative rounded-2xl px-6 mt-10  overflow-hidden w-full h-full ">
              <div
                className="absolute inset-0 bg-[url('/token/token-bg.png')] bg-cover bg-center"
                aria-hidden="true"
              />

              <div className="relative z-10 p-4 md:p-6 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  Token info
                </h3>

                <div className="flex-1 space-y-1">
                  {tokenInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-1.5 border-b border-white/20 last:border-b-0"
                    >
                      <span className="text-white text-xs">{item.label}</span>
                      <span className="text-white font-medium text-xs">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    className="relative px-4 py-3 rounded-xl text-black font-semibold text-sm md:text-base overflow-hidden"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1M18_lbY45yPDFhcr-WUMCaT6y6wKGZOL/view",
                        "_blank"
                      );
                    }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src="/landing-ai-model/button-bg.png"
                        alt="Button Background"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div
                        className="absolute inset-0 w-[269.5px] h-[194px] bg-gradient-to-r from-transparent via-white to-transparent opacity-44 animate-shine"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.44) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)",
                          transform: "skewX(-15deg)",
                          width: "269.5px",
                          height: "194px",
                        }}
                      ></div>
                    </div>
                    <span className="relative z-10">Detailed Tokenomics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenShowcase;

import { useEffect, useRef, useState } from "react";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Coins, TrendingUp } from "lucide-react";
import ResponsiveImage from "@/components/home/ResponsiveImage";

const TokenAllocation = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <ResponsiveImage
        src="/pie.jpg"
        alt="NLOV Token Allocation Chart"
        desktopSize={{ width: 600, height: 450 }}
        className="rounded-2xl"
      />
    </div>
  );
};

export default function Tokenomics() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SectionContainer className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#0361DA]/5 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-500/5 to-transparent opacity-60"></div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#0361DA]/20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8 reveal reveal-delay-1 flex flex-col items-center">
            <span className="inline-flex justify-center items-center px-3 py-1 text-xs font-medium bg-[#0361DA]/10 rounded-full text-[#0361DA] mb-4 animate-pulse-slow self-center">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Tokenomics
            </span>
            <h2 className="text-3xl font-bold mb-4 relative hero-text-gradient text-center">
              $NLOV: The Heart of Elvron
              <div className="absolute -bottom-2 left-1/2 w-20 h-1 bg-gradient-to-r from-[#0361DA] to-blue-500 rounded-full transform -translate-x-1/2"></div>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2 text-center mt-2">
              $NLOV powers the entire Elvron ecosystem, enabling seamless
              transactions, rewards, and governance. Be part of our journey from
              day one.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-delay-2">
            <div className="flex glass-card p-5 rounded-lg border border-[#0361DA]/20 bg-gradient-to-r from-[#0361DA]/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-[#0361DA]/30 group">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-[#0361DA] group-hover:animate-bounce-sm" />
                  <span className="font-medium">Total Supply</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-[#0361DA]/20 transition-all duration-300">
                  500,000,000 $NLOV
                </span>
              </div>
            </div>

            <div className="glass-card p-5 rounded-lg border border-[#0361DA]/20 bg-gradient-to-r from-[#0361DA]/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-[#0361DA]/30 group">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="mr-3 text-[#0361DA] group-hover:animate-bounce-sm"
                  >
                    <path
                      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <path
                      d="M10.4 19.2h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.4 9.6h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.4 14.4h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium">Blockchain</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-[#0361DA]/20 transition-all duration-300">
                  Solana
                </span>
              </div>
            </div>

            <div className="glass-card p-5 rounded-lg border border-[#0361DA]/20 bg-gradient-to-r from-[#0361DA]/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-[#0361DA]/30 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Coins className="mr-3 h-5 w-5 text-[#0361DA] group-hover:animate-bounce-sm" />
                  <span className="font-medium">Token Utility</span>
                </div>
                <span className="bg-background/50 px-2 py-1 rounded-full text-sm border border-white/10 group-hover:bg-[#0361DA]/20 transition-all duration-300">
                  Governance, Compute, Staking
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 reveal reveal-delay-3 flex justify-center">
            <Button
              variant="neon"
              className="group relative overflow-hidden border border-[#0361DA]/20 hover:shadow-neon-lg"
              onClick={() => (window.location.href = "/token/tokenomics")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0361DA]/10 to-blue-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-all duration-1000 ease-out"></span>
              <span className="relative flex items-center">
                View Tokenomics
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <TokenAllocation />
        </div>
      </div>
    </SectionContainer>
  );
}

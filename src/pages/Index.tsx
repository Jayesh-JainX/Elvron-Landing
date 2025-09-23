"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";
import BottomLineFix from "@/components/home/BottomLineFix";
import { Highlight } from "@/components/home/Highlight";
import AIModelsSection from "@/components/home/AIModelsSection";
import NlovTokenDashboard from "@/components/home/NlovTokenTeamDashboard";
import WhyOnexo from "@/components/home/poweredby";
import ComputePowerSharing from "@/components/home/ComputePowerSharing";
import LandingWithMarquee from "@/components/home/InfiniteSlidingHeader";
import OnexoFooter from "@/components/home/Footer";
import LatestUpdates from "@/components/home/LatestUpdates";
import Team from "@/components/home/Team";

const Index = () => {
  const [showBg2, setShowBg2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setShowBg2((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#030924]">
      <LandingWithMarquee />
      <Header />
      <BottomLineFix />
      <main>
        <div
          className="bg-cover bg-center bg-no-repeat relative overflow-hidden"
          style={{ backgroundImage: "url(/hero/bg.png)" }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-full bg-contain bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: "url(/hero/bg-2.png)",
              opacity: showBg2 ? 1 : 0,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
            }}
          />

          <div
            className="absolute rotate-180 top-0 left-0 right-0 h-full bg-contain bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: "url(/hero/bg-2.png)",
              opacity: showBg2 ? 1 : 0,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
            }}
          />
          <Hero />
        </div>

        <div>
          <WhyOnexo />
        </div>

        <div className="mt-20">
          <ComputePowerSharing />
        </div>

        <div className="mt-20">
          <Highlight />
        </div>

        <div className="mt-20">
          <AIModelsSection />
        </div>

        <div className="mt-20 bg-[url('/token/bg.png')] bg-fill">
          <NlovTokenDashboard />
        </div>

        <div className="mt-20 bg-[url('/updates/star-bg.png')] bg-cover bg-center bg-no-repeat">
          <Team />
          <LatestUpdates />
        </div>
      </main>

      <div className="py-10">
        <OnexoFooter />
      </div>
    </div>
  );
};

export default Index;

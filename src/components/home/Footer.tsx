import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Compute", href: "/products/compute" },
      { label: "AI Models", href: "/products/ai-models" },
      { label: "Neuro Swarm", href: "/products/swarm" },
      { label: "AI Agents", href: "/products/agents" },
    ],
  },
  {
    title: "Token",
    links: [
      { label: "$NLOV", href: "/token/overview" },
      { label: "Tokenomics", href: "/token/tokenomics" },
      { label: "Utility", href: "/token/utility" },
      { label: "FAQ", href: "/token/faq" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Roadmap", href: "/ecosystem/roadmap" },
      { label: "Partners", href: "/ecosystem/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical Papers", href: "/resources" },
      { label: "Community", href: "/resources/docs" },
      { label: "Blog & Updates", href: "/whitepaper" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Team", href: "/about/team" },
      { label: "Mission", href: "/about/mission" },
    ],
  },
];

const OnexoFooter: React.FC = () => {
  return (
    <>
      <footer className="relative overflow-hidden rounded-3xl mx-2 sm:mx-4 mb-6 sm:mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#80B8FF] to-[#0361DA]"></div>

        <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
          <h1
            className="w-full flex items-center justify-center font-bold leading-none opacity-30 translate-y-10 sm:translate-y-14 lg:translate-y-16 text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[19rem]"
            style={{
              background:
                "linear-gradient(to bottom, #002B62 0%, #6BA2E800 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Onexo
          </h1>
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-10 md:py-12 lg:pl-32">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-10 mb-10 md:mb-12">
            <div className="lg:col-span-1 pl-0 sm:pl-2 lg:pl-6">
              <div className="flex items-center mb-4 sm:mb-6 justify-center lg:justify-start">
                <img
                  src="/footer/logo.png"
                  alt="Onexo"
                  className="w-40 sm:w-52 md:w-[250px]"
                />
              </div>
              <p className="text-[#002B62] text-xs leading-relaxed mb-4 text-center lg:text-left">
                Empower your AI journey with decentralized computing, content
                generation, and blockchain rewards.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4">
                <a
                  href="https://x.com/onexo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 lg:w-10 lg:h-10  flex items-center justify-center"
                >
                  <img src="/footer/x.png" alt="x" className="h-10 lg:h-6" />
                </a>
                <a
                  href="https://t.me/onexocommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
                >
                  <img
                    src="/footer/telegram.png"
                    alt="Telegram"
                    className="h-10 lg:h-6"
                  />
                </a>
                <a
                  href="https://discord.com/invite/RfBDQUarvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
                >
                  <img
                    src="/footer/discord.png"
                    alt="Discord"
                    className="h-10 lg:h-6"
                  />
                </a>
                <a
                  href="https://github.com/neuroIov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
                >
                  <img
                    src="/footer/github.png"
                    alt="GitHub"
                    className="h-10 lg:h-6"
                  />
                </a>
              </div>

              <div className="mt-5 sm:mt-6 font-bold text-[#002B62] text-xs text-center lg:text-left">
                <p>For business inquiries & support,</p>
                <p>contact us at:</p>
                <p className="font-medium break-all">support@onexo.ai</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-start px-0 sm:px-6 md:px-10 lg:px-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20 w-full">
                {footerLinks.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-[#002B62] font-semibold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">
                      {section.title.toUpperCase()}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {section.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            to={l.href}
                            className="text-[#0862D6] text-sm hover:text-white transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 mb-16 md:mb-24 lg:mb-32">
            <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center lg:justify-center text-sm">
              <Link
                to="/legal/privacy-policy"
                className="text-[#9DC8FF] transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <span className="text-[#9DC8FF] hidden lg:inline">|</span>
              <Link
                to="/legal/terms-and-conditions"
                className="text-[#9DC8FF] transition-colors"
              >
                TERMS & CONDITIONS
              </Link>
              <span className="text-[#9DC8FF] hidden lg:inline">|</span>
              <Link
                to="/legal/refund-policy"
                className="text-[#9DC8FF] transition-colors"
              >
                REFUND POLICY
              </Link>
              <span className="text-[#9DC8FF] hidden lg:inline">|</span>
              <Link to="#" className="text-[#9DC8FF] transition-colors">
                DISCLAIMER
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
          <p className="text-[#9DC8FF] text-xs sm:text-sm">
            2025 Onexo.ai. All rights reserved.
          </p>
        </div>
      </footer>

      <div className="h-6 sm:h-8"></div>
    </>
  );
};

export default OnexoFooter;

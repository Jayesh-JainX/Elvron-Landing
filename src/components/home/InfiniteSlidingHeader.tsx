import React from "react";

type Props = {
  speedMs?: number;
  reverse?: boolean;
  rotateDeg?: number;
  className?: string;
  heightPx?: number;
};

const images = [
  "/presale-line/bg.png",
  "/presale-line/bg.png",
  "/presale-line/bg.png",
  "/presale-line/bg.png",
  "/presale-line/bg.png",
  "/presale-line/bg.png",
];

export const LandingWithMarquee: React.FC<Props> = ({
  speedMs = 10000,
  reverse = false,
  rotateDeg = 0,
  className = "",
  heightPx = 40,
}) => {
  const direction = reverse ? "-1" : "1";

  return (
    <div className={` ${className}`}>
      <div
        className="marquee-fixed"
        style={
          {
            "--bar-height": `${heightPx}px`,
            "--duration": `${Math.max(1000, speedMs)}ms`,
            "--direction": direction,
          } as React.CSSProperties
        }
      >
        <div className="marquee-inner" aria-label="infinite image scroller">
          <div className="marquee-track">
            <div className="marquee-row">
              {images.map((src, i) => (
                <img
                  key={`a-${i}`}
                  src={src}
                  alt=""
                  className="marquee-img"
                  style={{ transform: `rotate(${rotateDeg}deg)` }}
                  draggable={false}
                />
              ))}
            </div>
            <div className="marquee-row" aria-hidden="true">
              {images.map((src, i) => (
                <img
                  key={`b-${i}`}
                  src={src}
                  alt=""
                  className="marquee-img"
                  style={{ transform: `rotate(${rotateDeg}deg)` }}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
      
        .marquee-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2147483647; 
          background: transparent;
          pointer-events: none; 
        }

        
        .marquee-inner {
          height: 100%;
          max-width: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        
        .marquee-track {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          animation: marquee-scroll var(--duration) linear infinite;
          will-change: transform;
        }

        
        .marquee-row {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          min-width: 100%;
        }

        
        .marquee-img {
          height: calc(var(--bar-height) * 0.8);
          width: auto;
          object-fit: cover;
          image-rendering: auto;
          user-select: none;
          pointer-events: none;
        }

        
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% * var(--direction))); }
        }

        
        .page-content {
          padding-top: var(--bar-height);
        }

        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: var(--bar-height);
        }

        
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default LandingWithMarquee;

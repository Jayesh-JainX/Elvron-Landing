"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  MotionValue,
  useMotionValue,
} from "framer-motion";

interface HighlightCardProps {
  image: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  index: number;
  progress?: MotionValue<number>;
  align?: "start" | "center" | "end";
}

export function HighlightCard({
  image,
  title,
  description,
  cta,
  index,
  progress,
  align = "start",
}: HighlightCardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const fallbackProgress = useMotionValue(0);
  const actualProgress = progress || fallbackProgress;

  const scale = useTransform(actualProgress, [0, 1], [1, 1]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="rounded-3xl shadow-lg backdrop-blur-sm border border-blue-900/20 overflow-hidden relative card-contianer h-64 bg-blue-900/20 animate-pulse" />
    );
  }

  return (
    <motion.div
      className="rounded-3xl shadow-lg backdrop-blur-sm border border-blue-900/20 overflow-hidden relative card-contianer"
      style={{
        top: `calc(25vh + ${index * 16}px)`,
        scale: progress ? scale : 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="w-full flex justify-center items-center relative">
        <img src={image} alt="" className="w-full" />
        <div
          className={`absolute inset-0 flex items-center ${
            align === "center"
              ? "justify-center"
              : align === "end"
              ? "justify-end"
              : "justify-start"
          } pl-24`}
        >
          <div className="max-w-lg text-white">
            <h2 className="text-3xl font-semibold mb-6 text-white">{title}</h2>
            <p className="text-lg my-10 leading-relaxed opacity-90">
              {description}
            </p>
            {cta && (
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(cta.href, "_blank");
                  }
                }}
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
                style={{
                  backgroundImage: "url('/compute/button.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minWidth: 200,
                  minHeight: 44,
                  borderRadius: 14,
                }}
                type="button"
                aria-label={cta.label}
              >
                {cta.label}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AIModelCardProps {
  id: string;
  name: string;
  description: string;
  features: string[];
  isNew?: boolean;
  isBeta?: boolean;
  isComingSoon?: boolean;
  className?: string;
  redirectedPage?: string;
}

export default function AIModelCard({
  id,
  name,
  description,
  features,
  isNew = false,
  isBeta = false,
  isComingSoon = false,
  className,
  redirectedPage,
}: AIModelCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl pb-8 ",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <picture>
          <img
            src={`/ai-models/${
              id === "onexo-image"
                ? "neuro image.png"
                : id === "deepfake"
                ? "deepfake.png"
                : id === "freedom-ai"
                ? "freedom ai.png"
                : id === "text-to-video"
                ? "text to video.png"
                : id === "music-ai"
                ? "text to music.png"
                : id === "text-to-3d"
                ? "text to 3d.png"
                : "neuro image.png"
            }`}
            alt={`AI Model: ${name}`}
            width="384"
            height="192"
            className="w-full h-48 object-cover object-center rounded-t-xl"
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 text-sm">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-6 left-6">
          <Button
            className="w-fit px-6 bg-gradient-to-r from-[#0361DA] to-blue-600 hover:from-blue-700 hover:to-blue-900 text-white transition-all duration-300 ease-in-out"
            onClick={() =>
              window.open(`https://app.onexo.ai/${redirectedPage}`, "_blank")
            }
          >
            Launch App
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

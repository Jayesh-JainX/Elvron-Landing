import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
  index?: number;
  onLearnMoreClick?: () => void;
  alwaysActive?: boolean;
  hideLearnMore?: boolean;
}

export default function FeatureCard({
  title,
  description,
  icon,
  image,
  className,
  index = 0,
  alwaysActive = false,
  onLearnMoreClick,
  hideLearnMore = false,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "glass-card p-7 rounded-xl transition-all duration-500 group border border-[#0361DA]/10",
        isHovered || alwaysActive
          ? "translate-y-[-8px] shadow-neon border-[#0361DA]/30"
          : "translate-y-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div
          className={cn(
            "inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-[#0361DA]/20 to-blue-500/10 text-[#0361DA] mb-4 transition-transform duration-500",
            isHovered || alwaysActive ? "scale-110" : ""
          )}
        >
          {icon}
        </div>
      )}

      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-48 object-cover transition-transform duration-500",
              isHovered || alwaysActive ? "scale-105" : ""
            )}
          />
        </div>
      )}

      <h3
        className={cn(
          "text-lg font-semibold mb-2 transition-colors duration-300",
          isHovered || alwaysActive ? "text-[#0361DA]" : ""
        )}
      >
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      {!hideLearnMore && onLearnMoreClick && (
        <div
          onClick={onLearnMoreClick}
          className={cn(
            "flex items-center text-sm font-medium text-[#0361DA] cursor-pointer transition-opacity duration-500",
            isHovered || alwaysActive ? "opacity-100" : "opacity-0"
          )}
        >
          <span>Learn more</span>
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      )}

      {/* Card number */}
      {index > 0 && (
        <div
          className={cn(
            "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-[#0361DA] to-[#0361DA] text-white text-xs flex items-center justify-center transition-all duration-500 transform",
            isHovered || alwaysActive
              ? "opacity-100 rotate-0"
              : "opacity-0 -rotate-12"
          )}
        >
          {index}
        </div>
      )}
    </div>
  );
}

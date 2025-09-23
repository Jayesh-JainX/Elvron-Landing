import React, { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  desktopSize: Size;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  desktopSize,
  className = "",
}) => {
  const [size, setSize] = useState<Size>(desktopSize);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const scale = screenWidth < 768 ? 0.6 : screenWidth < 1024 ? 0.8 : 1.1;
      setSize({
        width: desktopSize.width * scale,
        height: desktopSize.height * scale,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [desktopSize]);

  return (
    <div
      className="flex justify-center items-center py-8 px-4"
      style={{ position: "relative" }}
    >
      <div
        className="absolute rounded-full blur-3xl opacity-50"
        style={{
          width: size.width * 1.2,
          height: size.height * 1.2,
          background: "radial-gradient(circle, #00f0ff, #0066ff)",
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <img
        src={src}
        alt={alt}
        className={`relative z-10 transition-transform duration-300 hover:scale-105 `}
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
        }}
        width={size.width}
        height={size.height}
      />
    </div>
  );
};

export default ResponsiveImage;

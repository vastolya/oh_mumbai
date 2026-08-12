"use client";

import { useId, useRef, useState } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const variants = {
  primary: "bg-terracotta text-white",
  secondary: "bg-white text-espresso",
};

const fillColors = {
  primary: "var(--color-terracotta-hover)",
  secondary: "var(--color-chocolate)",
};

export default function Button({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const filterId = useId();
  const [blob, setBlob] = useState({ x: 0, y: 0, size: 0 });

  const handleEnter = (e: React.MouseEvent) => {
    const rect = btnRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size =
      Math.max(
        Math.hypot(x, y),
        Math.hypot(rect.width - x, y),
        Math.hypot(x, rect.height - y),
        Math.hypot(rect.width - x, rect.height - y),
      ) *
        2 +
      4;
    setBlob({ x, y, size });
  };

  const handleLeave = () => setBlob((b) => ({ ...b, size: 0 }));

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`font-geometria relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-sm px-6 py-3 text-base leading-[148%] font-normal tracking-normal ${variants[variant]}`}
    >
      {/* SVG-фильтр: деформирует край круга, имитируя волну */}
      <svg className="absolute size-0" aria-hidden focusable="false">
        <defs>
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="8"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="14s"
                values="0.008;0.016;0.008"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="18"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full motion-safe:[transition:width_650ms_cubic-bezier(0.22,1,0.36,1),height_650ms_cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: blob.size,
          height: blob.size,
          top: blob.y,
          left: blob.x,
          transform: "translate(-50%, -50%)",
          backgroundColor: fillColors[variant],
          filter: `url(#${filterId})`,
        }}
      />
      <span
        className={`relative z-10 ${variant === "secondary" && blob.size > 0 ? "text-white" : ""}`}
      >
        {children}
      </span>
    </button>
  );
}

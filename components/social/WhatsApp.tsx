"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type WhatsAppProps = {
  href: string;
  label?: string;
  size?: number;
  fill?: string;
  hoverFill?: string;
  className?: string;
  delay?: number;
  animate?: import("framer-motion").TargetAndTransition;
};

const shape =
  "fill-(--icon) transition-[fill] duration-300 ease-out group-hover:fill-(--icon-hover)";

export default function WhatsApp({
  href,
  label = "WhatsApp",
  size = 48,
  fill = "#ffffff",
  hoverFill = "#25D366",
  className,
  delay = 0,
  animate: animateProp,
}: WhatsAppProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      style={
        { "--icon": fill, "--icon-hover": hoverFill } as React.CSSProperties
      }
      initial={{ opacity: 0, scale: 0.8 }}
      {...(animateProp
        ? { animate: animateProp }
        : { whileInView: { opacity: 1, scale: 1 }, viewport: { once: true } })}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay }}
      className={cn("group inline-flex shrink-0", className)}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        focusable="false"
      >
        <path
          d="M24 10C16.268 10 10 16.268 10 24C10 26.5437 10.6785 28.929 11.8643 30.9848L10 38L17.2731 36.2807C19.2695 37.3766 21.5619 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM24 35.4924C21.6602 35.4924 19.4837 34.793 17.6681 33.5921L13.3712 34.6865L14.5764 30.5795C13.2726 28.7156 12.5076 26.4472 12.5076 24C12.5076 17.6529 17.6529 12.5076 24 12.5076C30.3471 12.5076 35.4924 17.6529 35.4924 24C35.4924 30.3471 30.3471 35.4924 24 35.4924Z"
          className={shape}
        />
        <path
          d="M27.2797 25.8479L30.6669 27.4448C30.8224 27.5181 30.922 27.6757 30.9079 27.8471C30.8712 28.2928 30.6924 29.1861 29.8916 29.9869C27.6312 32.2472 23.5724 29.6899 23.4074 29.5909C22.4092 29.0547 21.4605 28.337 20.5613 27.4378C19.6621 26.5386 18.9444 25.5899 18.4082 24.5916C18.3092 24.4267 15.7518 20.3679 18.0122 18.1075C18.813 17.3067 19.7063 17.1279 20.152 17.0912C20.3233 17.0771 20.481 17.1767 20.5543 17.3322L22.1513 20.7194C22.2268 20.8797 22.1937 21.0702 22.0683 21.1955L20.8779 22.3859C20.6203 22.6435 20.5449 23.0441 20.7222 23.3623C21.1564 24.1413 21.7406 24.8914 22.4175 25.5817C23.1077 26.2584 23.8578 26.8427 24.6368 27.2769C24.955 27.4543 25.3556 27.3788 25.6132 27.1212L26.8036 25.9308C26.9289 25.8055 27.1194 25.7723 27.2797 25.8479Z"
          className={shape}
        />
      </svg>
    </motion.a>
  );
}

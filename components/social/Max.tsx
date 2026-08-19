"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MaxProps = {
  href: string;
  label?: string;
  size?: number;
  fill?: string;
  hoverFill?: string;
  className?: string;
  delay?: number;
  animate?: import("framer-motion").TargetAndTransition;
};

export default function Max({
  href,
  label = "MAX",
  size = 48,
  fill = "#ffffff",
  hoverFill = "#4783FD",
  className,
  delay = 0,
  animate: animateProp,
}: MaxProps) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.3021 37.9227C21.5512 37.9227 20.2734 37.5179 18.0576 35.8993C16.6475 37.7204 12.2092 39.1368 12.0144 36.7086C12.0144 34.8896 11.6074 33.3569 11.1593 31.6692C10.6105 29.6022 10 27.303 10 23.9613C10 15.9928 16.5102 10 24.2292 10C31.9481 10 38 16.2853 38 24.0388C38 31.7921 31.7554 37.9227 24.3021 37.9227ZM24.4143 16.8888C20.658 16.6911 17.7268 19.3076 17.0804 23.4028C16.5451 26.7941 17.4942 30.9265 18.3059 31.1344C18.6885 31.2324 19.6689 30.4362 20.2732 29.8292C21.2672 30.4762 22.4077 30.9773 23.6757 31.0441C27.5319 31.2471 30.9492 28.2175 31.1512 24.3461C31.3532 20.4747 28.2704 17.0918 24.4143 16.8888Z"
          className="fill-(--icon) transition-[fill] duration-300 ease-out group-hover:fill-(--icon-hover)"
        />
      </svg>
    </motion.a>
  );
}

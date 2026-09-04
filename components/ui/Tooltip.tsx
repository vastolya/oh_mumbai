"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

import { typograph } from "@/lib/typo";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "right" | "left" | "top" | "bottom";
  className?: string;
};

const sideClasses = {
  right: "top-1/2 left-full ml-3 -translate-y-1/2",
  left: "top-1/2 right-full mr-3 -translate-y-1/2",
  top: "bottom-full left-1/2 mb-3 -translate-x-1/2",
  bottom: "top-full left-1/2 mt-3 -translate-x-1/2",
} as const;

const arrowClasses = {
  right: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  left: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
} as const;

const offset = {
  right: { x: -8, y: 0 },
  left: { x: 8, y: 0 },
  top: { x: 0, y: 8 },
  bottom: { x: 0, y: -8 },
} as const;

export default function Tooltip({
  content,
  children,
  side = "right",
  className,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        tabIndex={0}
        aria-describedby={open ? id : undefined}
        className="focus-visible:outline-biege inline-flex rounded-full outline-offset-4 outline-none focus-visible:outline-2"
      >
        {children}
      </span>

      <span
        className={cn("pointer-events-none absolute z-20", sideClasses[side])}
      >
        <AnimatePresence>
          {open && (
            <motion.span
              id={id}
              role="tooltip"
              initial={{ opacity: 0, ...offset[side] }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, ...offset[side] }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={cn(
                "bg-biege text-green font-geometria relative block w-max max-w-80 rounded-xl px-4 py-3 text-sm leading-[150%] font-normal text-pretty",
                className,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "bg-biege absolute size-3 rotate-45 rounded-xs",
                  arrowClasses[side],
                )}
              />
              <span className="relative text-sm">{typograph(content)}</span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </span>
  );
}

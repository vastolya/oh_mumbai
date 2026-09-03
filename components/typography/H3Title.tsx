"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type H3TitleProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animate?: import("framer-motion").TargetAndTransition;
  disableAnimation?: boolean;
};

const H3Title = ({
  children,
  delay = 0,
  className,
  animate: animateProp,
  disableAnimation = false,
}: H3TitleProps) => {
  const titleClassName = cn(
    "leading-[118%] font-normal tracking-normal text-2xl font-gertika",
    className,
  );

  if (disableAnimation) {
    return <h3 className={titleClassName}>{children}</h3>;
  }

  return (
    <motion.h3
      initial={{ y: 20, opacity: 0 }}
      {...(animateProp
        ? { animate: animateProp }
        : { whileInView: { y: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={titleClassName}
    >
      {children}
    </motion.h3>
  );
};

export default H3Title;

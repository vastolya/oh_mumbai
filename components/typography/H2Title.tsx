"use client";

import { motion } from "framer-motion";

import { typograph } from "@/lib/typo";
import { cn } from "@/lib/utils";

type H2TitleProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animate?: import("framer-motion").TargetAndTransition;
  disableAnimation?: boolean;
};

const H2Title = ({
  children,
  delay = 0,
  className,
  animate: animateProp,
  disableAnimation = false,
}: H2TitleProps) => {
  const titleClassName = cn(
    "font-gertika text-[2.5rem] leading-[110%] font-bold tracking-[-0.02em] text-white",
    className,
  );

  const content = typograph(children);

  if (disableAnimation) {
    return <h2 className={titleClassName}>{content}</h2>;
  }

  return (
    <motion.h2
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
      {content}
    </motion.h2>
  );
};

export default H2Title;

"use client";

import { motion } from "framer-motion";

import { typograph } from "@/lib/typo";
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

  const content = typograph(children);

  if (disableAnimation) {
    return <h3 className={titleClassName}>{content}</h3>;
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
      {content}
    </motion.h3>
  );
};

export default H3Title;

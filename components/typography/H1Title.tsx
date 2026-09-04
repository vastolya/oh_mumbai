"use client";

import { motion } from "framer-motion";

import { typograph } from "@/lib/typo";
import { cn } from "@/lib/utils";

type H1TitleProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animate?: import("framer-motion").TargetAndTransition;
  disableAnimation?: boolean;
};

const H1Title = ({
  children,
  delay = 0,
  className,
  animate: animateProp,
  disableAnimation = false,
}: H1TitleProps) => {
  const titleClassName = cn(
    "font-gertika text-center text-[3.75rem] leading-[105%] font-bold tracking-[-0.01em]",
    className,
  );

  const content = typograph(children);

  if (disableAnimation) {
    return <h1 className={titleClassName}>{content}</h1>;
  }

  return (
    <motion.h1
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
    </motion.h1>
  );
};

export default H1Title;

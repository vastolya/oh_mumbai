"use client";

import { motion } from "framer-motion";

import { typograph } from "@/lib/typo";
import { cn } from "@/lib/utils";

type ParagraphProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animate?: import("framer-motion").TargetAndTransition;
  disableAnimation?: boolean;
};

const Paragraph = ({
  children,
  delay = 0,
  className,
  animate: animateProp,
  disableAnimation = false,
}: ParagraphProps) => {
  const paragraphClassName = cn(
    "font-geometria text-base leading-[150%] font-normal tracking-normal text-pretty",
    className,
  );

  const content = typograph(children);

  if (disableAnimation) {
    return <p className={paragraphClassName}>{content}</p>;
  }

  return (
    <motion.p
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
      className={paragraphClassName}
    >
      {content}
    </motion.p>
  );
};

export default Paragraph;

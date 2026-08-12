"use client";

import { motion } from "framer-motion";
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
  className = "",
  animate: animateProp,
  disableAnimation = false,
}: H3TitleProps) => {
  const titleClassName = `text-xl leading-[118%] font-bold tracking-normal md:text-2xl md:leading-[116%] md:font-extrabold md:tracking-normal ${className}`;

  if (disableAnimation) {
    return <h3 className={titleClassName}>{children}</h3>;
  }

  return (
    <motion.h3
      initial={{ x: 40, opacity: 0 }}
      {...(animateProp
        ? { animate: animateProp }
        : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
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

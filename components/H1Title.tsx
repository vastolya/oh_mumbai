'use client'

import { motion } from 'framer-motion'

type H1TitleProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  animate?: import('framer-motion').TargetAndTransition
  disableAnimation?: boolean
}

const H1Title = ({
  children,
  delay = 0,
  className = '',
  animate: animateProp,
  disableAnimation = false,
}: H1TitleProps) => {
  const titleClassName = `font-gertika text-[72px] font-bold leading-[105%] tracking-[-0.01em] text-center ${className}`

  if (disableAnimation) {
    return <h1 className={titleClassName}>{children}</h1>
  }

  return (
    <motion.h1
      initial={{ x: 40, opacity: 0 }}
      {...(animateProp
        ? { animate: animateProp }
        : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 15,
        delay,
      }}
      className={titleClassName}
    >
      {children}
    </motion.h1>
  )
}

export default H1Title

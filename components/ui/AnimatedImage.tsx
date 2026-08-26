"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type AnimatedImageProps = {
  src?: StaticImageData | string;
  alt?: string;
  delay?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

const AnimatedImage = ({
  src,
  alt = "",
  delay = 0,
  className,
  sizes,
  priority,
  objectPosition,
}: AnimatedImageProps) => {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          sizes={sizes ?? "100vw"}
          priority={priority}
        />
      ) : (
        <div className="bg-gray h-full w-full" />
      )}
    </motion.div>
  );
};

export default AnimatedImage;

"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DishTag from "@/components/menu/DishTag";
import Arrow from "@/components/icons/Arrow";
import IconButton from "@/components/ui/IconButton";
import Paragraph from "@/components/typography/Paragraph";
import H3Title from "../typography/H3Title";

const noopSubscribe = () => () => {};
const getHydrated = () => true;
const getHydratedOnServer = () => false;

export type DishModalDish = {
  src: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  spicy?: boolean;
  nut?: boolean;
  veg?: boolean;
};

type DishModalProps = {
  open: boolean;
  dish: DishModalDish | null;
  dishIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function DishModal({
  open,
  dish,
  dishIndex,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: DishModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    noopSubscribe,
    getHydrated,
    getHydratedOnServer,
  );

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open, onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cardRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [open]);

  if (!mounted) return null;

  const dishTag = dish?.spicy ? "spicy" : dish?.nut ? "nut" : undefined;

  return createPortal(
    <AnimatePresence>
      {open && dish && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="bg-chocolate/70 fixed inset-0 z-60 flex items-center justify-center p-6 backdrop-blur-xs"
        >
          <div
            className="flex flex-col items-center gap-29"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close — по центру над карточкой */}
            <IconButton onClick={onClose} label="Закрыть">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M1 1L9 9M9 1L1 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>

            {/* Стрелки + карточка */}
            <div className="flex items-center gap-6">
              <IconButton
                onClick={onPrev}
                disabled={!hasPrev}
                label="Предыдущее блюдо"
              >
                <Arrow direction="left" size={16} />
              </IconButton>

              <motion.div
                ref={cardRef}
                role="dialog"
                aria-modal="true"
                aria-label={dish.name}
                tabIndex={-1}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="bg-biege w-fit overflow-hidden rounded-2xl outline-none"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${dishIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative aspect-4/3 h-96 w-172 overflow-hidden"
                  >
                    <Image
                      src={dish.src}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                    {dishTag && (
                      <DishTag
                        tag={dishTag}
                        className="absolute top-3 left-3"
                      />
                    )}
                    {dish.veg && (
                      <Paragraph className="bg-biege text-chocolate absolute bottom-2 left-6 rounded-[2.625rem] p-2">
                        Вегетарианское
                      </Paragraph>
                    )}
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`info-${dishIndex}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5"
                  >
                    <H3Title className="text-chocolate pb-2">
                      {dish.name}
                    </H3Title>
                    <div className="flex shrink-0 items-end gap-2 pb-4">
                      <Paragraph className="text-gray">{dish.weight}</Paragraph>
                      <Paragraph className="text-gray">/</Paragraph>
                      <Paragraph className="text-chocolate">
                        {dish.price}
                      </Paragraph>
                    </div>

                    <Paragraph className="text-gray flex-1 text-sm">
                      {dish.description}
                    </Paragraph>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <IconButton
                onClick={onNext}
                disabled={!hasNext}
                label="Следующее блюдо"
              >
                <Arrow direction="right" size={16} />
              </IconButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

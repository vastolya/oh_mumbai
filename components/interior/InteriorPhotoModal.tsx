"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Arrow from "@/components/icons/Arrow";
import IconButton from "@/components/ui/IconButton";

export type InteriorPhoto = {
  src: StaticImageData;
  alt: string;
};

const noopSubscribe = () => () => {};
const getHydrated = () => true;
const getHydratedOnServer = () => false;

type Props = {
  open: boolean;
  photo: InteriorPhoto | null;
  photoIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function InteriorPhotoModal({
  open,
  photo,
  photoIndex,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
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
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="bg-chocolate/80 fixed inset-0 z-60 flex items-center justify-center p-6 backdrop-blur-xs"
        >
          <div
            className="flex flex-col items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="flex items-center gap-6">
              <IconButton
                onClick={onPrev}
                disabled={!hasPrev}
                label="Предыдущее фото"
              >
                <Arrow direction="left" size={16} />
              </IconButton>

              <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label={photo.alt}
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="outline-none"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`photo-${photoIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-[75vh] w-[75vw] max-w-6xl overflow-hidden rounded-sm"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain"
                      sizes="75vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <IconButton
                onClick={onNext}
                disabled={!hasNext}
                label="Следующее фото"
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

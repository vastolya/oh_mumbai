"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

type ModalProps = {
  /** Открыто ли окно. Состоянием владеет вызывающий. */
  open: boolean;
  onClose: () => void;
  /** Доступное имя окна для скринридеров. */
  label: string;
  /** Классы карточки: ширину и внутренние поля задаёт содержимое. */
  className?: string;
  children: React.ReactNode;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** «Гидрация прошла»: на сервере — `false`, в браузере — `true`. */
const noopSubscribe = () => () => {};
const getHydrated = () => true;
const getHydratedOnServer = () => false;

/**
 * Модальное окно: затемнение на весь экран и карточка по центру.
 *
 * Закрывается по Esc и по клику мимо карточки. Пока окно открыто, фон
 * не скроллится, а Tab ходит только внутри карточки.
 */
export default function Modal({
  open,
  onClose,
  label,
  className,
  children,
}: ModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // портал живёт только на клиенте — на сервере document ещё нет
  const mounted = useSyncExternalStore(
    noopSubscribe,
    getHydrated,
    getHydratedOnServer,
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const items = cardRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!items?.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      // на краях списка заворачиваем фокус обратно в карточку
      if (e.shiftKey && (active === first || active === cardRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const opener = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    cardRef.current?.focus();

    // после закрытия фокус возвращается на кнопку, которая окно открыла
    return () => {
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
          className="bg-chocolate/70 fixed inset-0 z-60 flex items-center justify-center p-6 backdrop-blur-xs"
        >
          <motion.div
            ref={cardRef}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className={cn(
              "relative rounded-sm bg-white outline-none",
              className,
            )}
          >
            {/* по макету крестика нет: мышью закрываем кликом мимо, с клавиатуры — Esc */}
            <button type="button" onClick={onClose} className="sr-only">
              Закрыть
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

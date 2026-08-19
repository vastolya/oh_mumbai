"use client";

import { useState } from "react";

import BookingModal from "@/components/booking/BookingModal";
import Button from "@/components/ui/Button";

type BookingButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Кнопка брони вместе с окном, которое она открывает.
 *
 * Нужна, чтобы серверные `Header` и `Footer` не тащили состояние: обработчик
 * клика в серверный компонент не передать.
 */
export default function BookingButton({
  children,
  variant,
  className,
}: BookingButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

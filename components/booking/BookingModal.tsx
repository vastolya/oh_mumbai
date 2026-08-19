"use client";

import Max from "@/components/social/Max";
import Modal from "@/components/ui/Modal";
import Paragraph from "@/components/typography/Paragraph";
import Telegram from "@/components/social/Telegram";
import WhatsApp from "@/components/social/WhatsApp";
import H3Title from "../typography/H3Title";

const PHONE = "+7 (812) 314-03-40";
const PHONE_HREF = "tel:+78123140340";

const GREEN = "var(--color-green)";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

/** Окно брони: не форма, а выбор канала связи — телефон или мессенджер. */
export default function BookingModal({ open, onClose }: BookingModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      label="Забронировать стол"
      className="w-172 max-w-full p-12"
    >
      <Paragraph
        animate={{ x: 0, opacity: 1 }}
        delay={0.1}
        className="text-chocolate pb-6 text-center"
      >
        Свяжитесь с нами удобным способом
      </Paragraph>

      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <Paragraph animate={{ x: 0, opacity: 1 }} delay={0.2} className="text-gray pb-2">
            По телефону
          </Paragraph>
          <a href={PHONE_HREF}>
            <H3Title
              animate={{ x: 0, opacity: 1 }}
              delay={0.3}
              className="text-terracotta hover:text-terracotta-hover px-9 py-3 whitespace-nowrap"
            >
              {PHONE}
            </H3Title>
          </a>
        </div>

        <div>
          <Paragraph animate={{ x: 0, opacity: 1 }} delay={0.38} className="text-gray pb-2">
            В мессенджер
          </Paragraph>
          <div className="flex justify-center gap-4">
            <Telegram
              href="https://t.me/ohmumbai"
              fill={GREEN}
              accentFill="#ffffff"
              accentHoverFill="#ffffff"
              animate={{ opacity: 1, scale: 1 }}
              delay={0.46}
            />
            <Max
              href="https://max.ru/ohmumbai"
              fill={GREEN}
              animate={{ opacity: 1, scale: 1 }}
              delay={0.54}
            />
            <WhatsApp
              href="https://wa.me/78123140340"
              fill={GREEN}
              animate={{ opacity: 1, scale: 1 }}
              delay={0.62}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

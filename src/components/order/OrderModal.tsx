import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { track } from "@vercel/analytics/react";
import { SiUbereats } from "react-icons/si";
import { LuArrowUpRight, LuShoppingBag, LuX } from "react-icons/lu";
import { SITE } from "../../data/site";
import "../../styles/orderModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

export default function OrderModal({ isOpen, onClose, source = "unknown" }: Props) {
  const location = useLocation();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="order-dialog"
      aria-labelledby="order-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        // Clicks on the ::backdrop land on the <dialog> element itself.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="order-dialog__panel">
        <button
          type="button"
          className="order-dialog__close"
          aria-label="Close"
          onClick={() => {
            track("close_button_order_modal", { page: location.pathname, source });
            onClose();
          }}
        >
          <LuX aria-hidden />
        </button>

        <span className="eyebrow">Order online</span>
        <h2 id="order-dialog-title" className="order-dialog__title">
          How would you like <em>your madness?</em>
        </h2>
        <p className="order-dialog__text">
          Choose your delivery service to place your order.
        </p>

        <div className="order-dialog__options">
          <a
            href={SITE.order.uberEats}
            target="_blank"
            rel="noreferrer"
            className="order-option order-option--uber"
            onClick={() => track("uber_eats_button_order_modal", { page: location.pathname, source })}
          >
            <span className="order-option__icon">
              <SiUbereats aria-hidden />
            </span>
            <span className="order-option__label">
              Uber Eats
              <small>Delivery to your door</small>
            </span>
            <LuArrowUpRight className="order-option__arrow" aria-hidden />
          </a>

          <a
            href={SITE.order.grubhub}
            target="_blank"
            rel="noreferrer"
            className="order-option order-option--grubhub"
            onClick={() => track("grubhub_button_order_modal", { page: location.pathname, source })}
          >
            <span className="order-option__icon">
              <LuShoppingBag aria-hidden />
            </span>
            <span className="order-option__label">
              Grubhub
              <small>Delivery to your door</small>
            </span>
            <LuArrowUpRight className="order-option__arrow" aria-hidden />
          </a>
        </div>

        <p className="order-dialog__footnote">
          Questions about an order? Call <a href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
      </div>
    </dialog>
  );
}

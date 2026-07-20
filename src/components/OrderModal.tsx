import { useLocation } from "react-router-dom";
import { track } from "@vercel/analytics/react";
import "../styles/OrderModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
};

const UBER_URL =
  "https://www.ubereats.com/store/lukumadness/HIJenRrXUy-xp6baXpRTzA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjclMjBSb2JlcnRhJTIwUGwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIwZjcyMTQzOC0zZWM5LWJhYjEtYmM5OS0xZjVlM2ZmMGFhZTQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQxLjA1OTQwMjglMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNzY1NTkxJTdE";

const GRUBHUB_URL =
  "https://www.grubhub.com/restaurant/lukumadness-850-n-broadway-white-plains/10872048";

export default function OrderModal({ isOpen, onClose, source = "unknown" }: Props) {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div
        className="order-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={() => {
            track("close_button_order_modal", { page: location.pathname, source });
            onClose();
          }}
        >
          ×
        </button>

        <h2>Choose Your Delivery Service</h2>

        <p>
          Select your preferred platform to place your order.
        </p>

        <div className="order-options">
          <a
            href={UBER_URL}
            target="_blank"
            rel="noreferrer"
            className="uber-btn"
            onClick={() =>
              track("uber_eats_button_order_modal", { page: location.pathname, source })
            }
          >
            Uber Eats
          </a>

          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="grubhub-btn"
            onClick={() =>
              track("grubhub_button_order_modal", { page: location.pathname, source })
            }
          >
            Grubhub
          </a>
        </div>
      </div>
    </div>
  );
}
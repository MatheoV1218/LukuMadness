import "../styles/OrderModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const UBER_URL =
  "https://www.ubereats.com/store/lukumadness/HIJenRrXUy-xp6baXpRTzA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjclMjBSb2JlcnRhJTIwUGwlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIwZjcyMTQzOC0zZWM5LWJhYjEtYmM5OS0xZjVlM2ZmMGFhZTQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQxLjA1OTQwMjglMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuNzY1NTkxJTdE";

const GRUBHUB_URL =
  "https://www.grubhub.com/restaurant/lukumadness-850-n-broadway-white-plains/10872048";

export default function OrderModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="order-modal-overlay" onClick={onClose}>
      <div
        className="order-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
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
          >
            Uber Eats
          </a>

          <a
            href={GRUBHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="grubhub-btn"
          >
            Grubhub
          </a>
        </div>
      </div>
    </div>
  );
}
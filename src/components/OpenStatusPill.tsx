import { useOpenStatus } from "../hooks/useOpenStatus";

/** "Open now · until 8 PM" chip. Renders an invisible placeholder until mounted to avoid layout shift. */
const OpenStatusPill = ({ className = "" }: { className?: string }) => {
  const status = useOpenStatus();

  return (
    <p
      className={`status-pill ${status?.isOpen ? "status-pill--open" : ""} ${status ? "" : "is-pending"} ${className}`}
      aria-live="polite"
    >
      <span className="status-pill__dot" aria-hidden />
      {status?.label ?? "Checking hours…"}
    </p>
  );
};

export default OpenStatusPill;

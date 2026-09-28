import { FaApple, FaGooglePlay } from "react-icons/fa";
import { track } from "@vercel/analytics/react";
import { SITE } from "../data/site";

type Props = {
  /** Page the buttons live on, reported to analytics. */
  page: string;
  className?: string;
};

const StoreButtons = ({ page, className = "" }: Props) => (
  <div className={`store-buttons ${className}`}>
    <a
      href={SITE.app.ios}
      target="_blank"
      rel="noreferrer"
      className="store-button"
      onClick={() => track("get_app_ios_click", { page })}
    >
      <FaApple aria-hidden className="store-button__icon" />
      <span>
        <small>Download on the</small>
        App Store
      </span>
    </a>
    <a
      href={SITE.app.android}
      target="_blank"
      rel="noreferrer"
      className="store-button"
      onClick={() => track("get_app_android_click", { page })}
    >
      <FaGooglePlay aria-hidden className="store-button__icon store-button__icon--play" />
      <span>
        <small>Get it on</small>
        Google Play
      </span>
    </a>
  </div>
);

export default StoreButtons;

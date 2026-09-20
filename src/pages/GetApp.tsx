import { FaApple, FaGooglePlay } from "react-icons/fa";
import { HiOutlineClock, HiOutlineGift, HiOutlineTag } from "react-icons/hi";
import { track } from "@vercel/analytics/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "../styles/getApp.css";
import appIcon from "../assets/app-icon.png";

const APP_STORE_URL = "https://apps.apple.com/app/id6795653647";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lukumadnessusa.app";

const GetApp = () => {
  return (
    <>
      <SEO
        title="Get the App | LukuMadness USA"
        description="Download the LukuMadness USA app to order ahead, earn rewards, and never miss an offer. Available now on iPhone and Android."
        path="/app"
      />

      <Navbar />

      <section className="get-app-hero">
        <div className="get-app-icon-wrap">
          <img src={appIcon} alt="LukuMadness USA app icon" className="get-app-icon" />
        </div>

        <span className="get-app-eyebrow">Now Available</span>

        <h1>Get The App</h1>

        <p className="get-app-subtitle">
          Order ahead for pickup, earn rewards on every purchase, and never miss a
          new offer — right from your phone.
        </p>

        <div className="get-app-buttons">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="store-button store-button-ios"
            onClick={() => track("get_app_ios_click", { page: "/app" })}
          >
            <FaApple size={26} />
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="store-button store-button-android"
            onClick={() => track("get_app_android_click", { page: "/app" })}
          >
            <FaGooglePlay size={22} />
            <span>
              <small>Get it on</small>
              Google Play
            </span>
          </a>
        </div>

        <div className="get-app-features">
          <div className="get-app-feature">
            <HiOutlineClock size={28} />
            <h3>Order Ahead</h3>
            <p>Skip the line — order and pay from your phone.</p>
          </div>
          <div className="get-app-feature">
            <HiOutlineGift size={28} />
            <h3>Earn Rewards</h3>
            <p>Collect points on every purchase, redeem for discounts.</p>
          </div>
          <div className="get-app-feature">
            <HiOutlineTag size={28} />
            <h3>Exclusive Offers</h3>
            <p>See our latest deals as soon as they drop.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GetApp;

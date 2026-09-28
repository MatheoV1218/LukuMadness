import { LuClock, LuGift, LuTag } from "react-icons/lu";
import StoreButtons from "../components/StoreButtons";
import { delay } from "../utils/style";
import "../styles/getApp.css";
import appIcon from "../assets/img/app-icon.webp";

const FEATURES = [
  { icon: LuClock, title: "Order Ahead", text: "Skip the line — order and pay from your phone." },
  { icon: LuGift, title: "Earn Rewards", text: "Collect points on every purchase, redeem for discounts." },
  { icon: LuTag, title: "Exclusive Offers", text: "See our latest deals as soon as they drop." },
];

const GetApp = () => {
  return (
    <section className="get-app">
      <div className="get-app__glow" aria-hidden />
      <div className="container get-app__grid">
        <div className="get-app__copy">
          <p className="get-app__badge hero-anim">
            <span className="status-pill__dot" aria-hidden /> Now available
          </p>
          <h1 className="display-hero hero-anim" style={delay(80)}>
            Get the <em>app</em>
          </h1>
          <p className="get-app__lead hero-anim" style={delay(160)}>
            Order ahead for pickup, earn rewards on every purchase, and never miss a new offer — right
            from your phone.
          </p>

          <StoreButtons page="/app" className="hero-anim get-app__buttons" />

          <ul className="get-app__features">
            {FEATURES.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="hero-anim" style={delay(320 + i * 80)}>
                <span className="get-app__feature-icon">
                  <Icon aria-hidden />
                </span>
                <span>
                  <strong>{title}</strong>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="get-app__visual hero-anim" style={delay(200)} aria-hidden>
          <div className="phone">
            <div className="phone__notch" />
            <div className="phone__screen">
              <img src={appIcon} alt="" width={512} height={512} className="phone__icon" />
              <p className="phone__title">LukuMadness USA</p>
              <p className="phone__sub">Cafe · Greek Delights</p>
              <div className="phone__cta">Start your order</div>
            </div>
          </div>
          <div className="float-card float-card--one">
            <LuGift aria-hidden />
            <span>
              <strong>Rewards</strong>on every order
            </span>
          </div>
          <div className="float-card float-card--two">
            <LuClock aria-hidden />
            <span>
              <strong>Order ahead</strong>skip the line
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetApp;

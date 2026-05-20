import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import "../styles/footer.css";
import logo from "../assets/lukulogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={logo} alt="LukuMadness" />

          <p>
            Fresh Greek desserts, premium coffee, and unforgettable café vibes.
          </p>
        </div>

        <div className="footer-info">
          <h3>Visit Us</h3>

          <p>
            <MdLocationOn />
            850 N Broadway, White Plains NY
          </p>

          <p>
            <FaPhoneAlt />
            (914) 358-4552
          </p>

          <p>
            <MdEmail />
            info@lukumadnessusa.com
          </p>
        </div>

        <div className="footer-hours">
          <h3>Hours</h3>

          <p>Mon - Fri: 7AM - 8PM</p>
          <p>Sat - Sun: 8AM - 8PM</p>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>

          <div className="footer-icons">
            <a href="https://www.facebook.com/lukumadnessusa" target="_blank">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/lukumadness.usa" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 LukuMadness USA — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

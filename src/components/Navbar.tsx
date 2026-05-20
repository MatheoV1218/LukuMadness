import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" className="logo">
          <img
            src="https://placehold.co/120x120"
            alt="LukuMadness Logo"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/story"
            className={location.pathname === "/story" ? "active" : ""}
          >
            Our Story
          </Link>

          <Link
            to="/menu"
            className={location.pathname === "/menu" ? "active" : ""}
          >
            Menu
          </Link>

          <a
            href="https://order.chownow.com/order/39451/locations/59964?cn_channel=cn_website"
            target="_blank"
          >
            Order Online
          </a>
        </div>

        {/* SOCIALS */}
        <div className="socials">
          <a href="https://www.facebook.com/lukumadnessusa"
          target="_blank">
          
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/lukumadness.usa"
          target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
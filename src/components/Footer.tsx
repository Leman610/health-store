import "./Footer.css";
import { Link } from "react-router-dom";
import appleStore from "../assets/Apple_logo_black.png";
import playStore from "../assets/Google_Play_Arrow_logo.png";
import stripe from "../assets/Frame 1000004122.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="footer-contact">
          <h2 className="footer-title">Need help ?</h2>
          <p className="footer-info">
            Please feel free to contact the following <br />
            numbers for any assistance regarding our <br />
            services.
          </p>
          <a className="footer-phone" href="tel:00800400001">00 800 40 00 01</a>
          <a className="footer-email" href="mailto:info@santeconsciente.com">Email: info@santeconsciente.com</a>
          <h4 className="footer-hour">Opening hours</h4>
          <p className="footer-day">Monday - Saturday : 09:00 - 19:00</p>
        </div>

        <div className="footer-navigation">
          <h2 className="footer-title">Navigation</h2>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer-blog">
          <h2 className="footer-title">Blog</h2>
          <ul>
            <li>
              <Link to="/society">Society</Link>
            </li>
            <li>
              <Link to="/alimentation">Alimentation</Link>
            </li>
            <li>
              <Link to="/misceleneaous">Misceleneaous</Link>
            </li>
          </ul>
        </div>

        <div className="footer-app">
          <h2 className="footer-title">Download App</h2>
          <button>
            <img src={appleStore} alt="" />
            Download on App store
          </button>
          <button>
            <img src={playStore} alt="" />
            Download on Play store
          </button>
        </div>
      </div>
      <div className="container footer-end">
        <p>Copyright 2024 © Santé Consciente</p>
        <div className="footer-paypal">
        <span>We accept:</span>
          <img src={stripe} alt="PayPal and Stripe" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

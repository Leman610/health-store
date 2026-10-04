import "./Footer.css";
import appleStore from "../assets/Apple_logo_black.png";
import playStore from "../assets/Google_Play_Arrow_logo.png";
import stripe from "../assets/Frame 1000004122.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="footer-contact">
          <h1>Need help ?</h1>
          <p>
            Please feel free to contact the following <br />
            numbers for any assistance regarding our <br />
            services.
          </p>
          <h2>00 800 40 00 01</h2>
          <h4>Opening hours</h4>
          <h4>Monday - Saturday : 09:00 - 19:00</h4>
          <h4>Email: info@santeconsciente.com</h4>
        </div>
        <div className="footer-navigation">
          <h1>Navigation</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-blog">
          <h1>Blog</h1>
          <ul>
            <li>
              <a href="#">Society</a>
            </li>
            <li>
              <a href="#">Alimentation</a>
            </li>
            <li>
              <a href="#">Misceleneaous</a>
            </li>
          </ul>
        </div>
        <div className="footer-app">
          <h1>Download App</h1>
          <button>
            <img src={appleStore} alt="Apple store" />
            Download on App store
          </button>
          <button>
            <img src={playStore} alt="Play store" />
            Download on Play store
          </button>
        </div>
      </div>
      <div className="container footer-end">
        <p>Copyright 2024 © Santé Consciente</p>
        <button>
          We accept:
          <img src={stripe} alt="Stripe" />
        </button>
      </div>
    </div>
  );
};

export default Footer;

import "./Topbar.css";
import { useState } from "react";
import phone from "../assets/phone-call.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [lang, setLang] = useState("en");
  const [currency, setCurrency] = useState("usd");
  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <ul className="top-links">
          <li>
            <Link to="/track-order">Track Order</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className="top-info">
          <img src={phone} alt="" />
          <p>You can contact us 24/7</p>
          <a href="tel:+2376xxxxxxxx">+237 6xx xxx xxx</a>
          <select
            aria-label="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="az">Azərbaycan</option>
          </select>

          <select
            aria-label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="usd">USD</option>
            <option value="azn">AZN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

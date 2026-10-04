import "./Topbar.css";
import phone from "../assets/phone-call.png";
import { Link } from "react-router-dom";

const Topbar = () => {
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
          <img src={phone} alt="phone" />
          <p>You can contact us 24/7</p>
          <span>+237 6xx xxx xxx</span>
          <p className="vertical-bar">|</p>
          <select>
            <option>English</option>
            <option>Azerbaijan</option>
          </select>
          <select>
            <option>USD</option>
            <option>AZN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

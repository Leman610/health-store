import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container nav-bar-content">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <select className="shopping-selector">
              <option value="">SHOP</option>
              <option value="CATEGORİES">CATEGORİES</option>
              <option value="FİLTER BY PRİCE">FİLTER BY PRİCE</option>
              <option value="PRODUCT STATUS">PRODUCT STATUS</option>
            </select>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

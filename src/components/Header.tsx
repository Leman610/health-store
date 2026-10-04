import "./Header.css";
import logo from "../assets/Sante.logo.png";
import { Search } from "lucide-react";
import user from "../assets/user-round.png";
import heart from "../assets/heart.png";
import shopping from "../assets/shopping-cart.png";
export const Header = () => {
  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo">
          <img src={logo} alt="Sante Consciente" />
        </div>
        <div className="logo-name">
          <h2>Santé</h2>
          <h5>Consciente</h5>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
          <button className="search-btn">
            <Search size={20} />
          </button>
        </div>
        <div className="header-user">
          <img src={user} alt="User" />
          <div className="user-info">
            <h5>Welcome</h5>
            <h3>Jhon</h3>
          </div>
        </div>
        <div className="header-icons">
          <img src={heart} alt="favorites" />
          <p className="number-count">1</p>
        </div>
        <div className="header-icons">
          <img src={shopping} alt="Shopping" />
          <p className="number-count">1</p>
        </div>
      </div>
    </header>
  );
};

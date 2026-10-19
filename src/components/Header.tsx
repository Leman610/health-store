import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/Sante.logo.png";
import { Search } from "lucide-react";
import user from "../assets/user-round.png";
import heart from "../assets/heart.png";
import shoppingcart from "../assets/shopping-cart.png";
export const Header = () => {
  return (
    <div className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <div className="logo-name">
            <span>Santé</span>
            <span>Consciente</span>
          </div>
        </Link>

        <form className="header-search">
          <input
            type="search"
            placeholder="Search for products..."
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <Search size={22} />
          </button>
        </form>

        <Link to="./user" className="header-user">
          <img src={user} alt="" />
          <div className="user-info">
            <span className="user-welcome">Welcome</span>
            <span className="user-name">Jhon</span>
          </div>
        </Link>

        <Link to="/wish" className="header-icons" aria-label="Favorites">
          <img src={heart} alt="" />
          <span className="number-count">1</span>
        </Link>

        <Link
          to="/shoppingcart"
          className="header-icons"
          aria-label="Shopping cart"
        >
          <img src={shoppingcart} alt="" />
          <span className="number-count">1</span>
        </Link>
      </div>
    </div>
  );
};

import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/Sante.logo.png";
import { Search } from "lucide-react";
import user from "../assets/user-round.png";
import heart from "../assets/heart.png";
import shopping from "../assets/shopping-cart.png";
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

        <div className="header-user">
          <img src={user} alt="" />
          <div className="user-info">
            <span className="user-welcome">Welcome</span>
            <span className="user-name">Jhon</span>
          </div>
        </div>

        <Link to="/wish" className="header-icons" aria-label="Favorites">
          <img src={heart} alt="" />
          <span className="number-count">1</span>
        </Link>

        <Link to="/cart" className="header-icons" aria-label="Shopping cart">
          <img src={shopping} alt="" />
          <span className="number-count">1</span>
        </Link>
      </div>
    </div>
  );
};

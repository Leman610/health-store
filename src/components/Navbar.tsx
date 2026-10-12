import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-bar">
      <div className="container nav-bar-content">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li className="shopping-selector">
            <div className="shop-arrow">
              <Link to="/shop" onClick={closeMenu}>
                SHOP
              </Link>

              <IoIosArrowDown
                className="arrow-icon"
                onClick={toggleMenu}
              />
            </div>

            {showMenu && (
              <ul className="shop-part">
                <li>
                  <Link to="/shop/categories" onClick={closeMenu}>
                    Categoriess
                  </Link>
                </li>

                <li>
                  <Link to="/shop/filter-by-price" onClick={closeMenu}>
                    Filter by price
                  </Link>
                </li>

                <li>
                  <Link to="/shop/product-status" onClick={closeMenu}>
                    Product Status
                  </Link>
                </li>
              </ul>
            )}
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
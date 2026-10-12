import "./Navbar.css";
<<<<<<< HEAD
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

=======
import { Link } from "react-router-dom";
export const Navbar = () => {
>>>>>>> 936fdbd1ccd8dd7d88675123c70e252cea7f8526
  return (
    <div className="nav-bar">
      <div className="container nav-bar-content">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
<<<<<<< HEAD

          <li className="shopping-selector">
            <div className="shop-arrow">
              <Link to="/shop">SHOP</Link>
              <IoIosArrowDown className="arrow-icon" onClick={toggleMenu} />
            </div>

            {showMenu && (
              <ul className="shop-part">
                <li>
                  <Link to="/shop/categories" onClick={closeMenu}>
                    Categories
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

=======
          <li>
            <select className="shopping-selector">
              <option value="">SHOP</option>
              <option value="CATEGORİES">CATEGORİES</option>
              <option value="FİLTER BY PRİCE">FİLTER BY PRİCE</option>
              <option value="PRODUCT STATUS">PRODUCT STATUS</option>
            </select>
          </li>
>>>>>>> 936fdbd1ccd8dd7d88675123c70e252cea7f8526
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

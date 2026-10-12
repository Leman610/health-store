import "./Shopheader.css";
import { IoIosArrowForward } from "react-icons/io";
const Shopheader = () => {
  return (
    <div className="shop-bar-header">
      <div className="container shop-header-content">
        <div className="shop-left">
          <span>Home</span>
          <IoIosArrowForward />
          <span className="shop-active">Shop</span>
          <p>Showing 1-10 of 48 result</p>
        </div>
        <div className="shop-right">
          <div className="sort-latest">
            <label>Sort :</label>
            <select>
              <option value="latest">Sort by latest</option>
              <option value="low">Sort by price : low to high</option>
              <option value="high">Sort by price : high to low</option>
            </select>
          </div>
          <div className="sort-items">
            <label>Show :</label>
            <select>
              <option value="16">16 items</option>
              <option value="24">24 items</option>
              <option value="32">32 items</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopheader;

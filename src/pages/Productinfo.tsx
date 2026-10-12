import "./Productinfo.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Countdown from "../components/Countdown";
import { FiShoppingCart } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

const Productinfo = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="categories-product-info">
      <h1 className="categories-product-info-title">
        Mint & Ginger Digestive Herbal Tea Lorem ipsum
      </h1>
      <div className="categories-stars">
        <div className="categories-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </div>
        <span>20 Reviews</span>
      </div>
      <div className="categories-product-count">
        <del>$5.75</del>
        <strong>$5.75</strong>
      </div>
      <span className="categories-stock">In Stock</span>

      <p className="categories-product-text">
        Fusce sapien urna, tristique non sapien nec, rutrum fringilla eros.
        <br />
        Etiam accumsan odio eget tempus consectetur. Aliquam et sapien <br />
        nulla. Suspendisse lobortis leo ante, imperdiet tristique magna <br />
        tristique eu. Nullam ultrices vulputate odio, eu iaculis nulla congue
        <br />
        quis.
      </p>

      <p className="categories-time-text">
        Time remaining until the end of the offer
      </p>
      <Countdown seconds={3600} className="product-time" />
      <div className="categories-product-shop">
        <FiShoppingCart />
        <span>This product has been added to 2 people’s carts</span>
      </div>
      <div className="productinfo-count">
        <div className="number-count-box">
          <button
            className="number-count-minus"
            onClick={() => count > 1 && setCount(count - 1)}
          >
            -
          </button>
          <span className="number-count-value">{count}</span>
          <button
            className="number-count-plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button className="shop-product-button">Add to cart</button>
        <ul className="shop-about">
          <li>
            <FiCheck />
            Fast delivery
          </li>
          <li>
            <FiCheck />
            Good quality
          </li>
          <li>
            <FiCheck />
            Track order
          </li>
        </ul>
        <div className="shop-information">
          <p>
            <span>SKU:</span> H5I7J9
          </p>
          <p>
            <span>Categories:</span> Digestive Health, Stress
          </p>
          <p>
            <span>Tags:</span> Health, life, medicine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;

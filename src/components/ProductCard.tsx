<<<<<<< HEAD
import "./ProductCard.css";
import Countdown from "./Countdown";
import { FaRegHeart, FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
=======
import { FaRegHeart, FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Countdown from "./Countdown";
import "./ProductCard.css";
>>>>>>> 936fdbd1ccd8dd7d88675123c70e252cea7f8526

export interface Product {
  id: number;
  title: string;
  image: string;
  percent: string;
  oldPrice: number;
  newPrice: number;
<<<<<<< HEAD
  seconds: number;
=======
  seconds: number; // geri sayım müddəti
>>>>>>> 936fdbd1ccd8dd7d88675123c70e252cea7f8526
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-box">
      <div className="product-image">
        <span className="product-percent">{product.percent}</span>
        <button
          className="product-heart product-icon"
          aria-label="Add to favorites"
        >
          <FaRegHeart />
        </button>
        <button className="product-arrow product-icon" aria-label="Quick view">
          <FaExpandArrowsAlt />
        </button>
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <div className="product-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </div>
        <h3 className="product-name">{product.title}</h3>
        <div className="product-price">
          <del>${product.oldPrice}</del>
          <strong>${product.newPrice}</strong>
        </div>

        <Countdown seconds={product.seconds} className="product-time" />

        <p className="product-text">
          Time remaining until the end of the offer
        </p>
        <button className="product-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

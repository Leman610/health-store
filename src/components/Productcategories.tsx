import "./Productcategories.css";
import { FaRegHeart, FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export interface Product {
  id: number;
  title: string;
  image: string;
  percent: string;
  oldPrice: number;
  newPrice: number;
  seconds: number;
}

const Productcategories = ({ product }: { product: Product }) => {
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
        <button className="product-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Productcategories;

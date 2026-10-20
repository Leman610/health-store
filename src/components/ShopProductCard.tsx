import "./ShopProductCard.css";
import { useState } from "react";
import { FaRegHeart, FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export interface ShopProduct {
  id: number;
  title: string;
  image: string;
  percent: string;
  oldPrice: number;
  newPrice: number;
  category: string;
  inStock?: boolean;
  onSale?: boolean;
}

interface ShopProductCardProps {
  product: ShopProduct;
  onAddToCart: () => void;
}

const ShopProductCard = ({ product, onAddToCart }: ShopProductCardProps) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(1);
    onAddToCart();
  };

  return (
    <div className="shop-product-box">
      <div className="shop-product-image">
        <span className="shop-product-percent">{product.percent}</span>
        <button className="shop-product-heart shop-product-icon">
          <FaRegHeart />
        </button>
        <button className="shop-product-arrow shop-product-icon">
          <FaExpandArrowsAlt />
        </button>
        <img src={product.image} alt={product.title} />
      </div>

      <div className="shop-product-info">
        <div className="shop-product-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </div>
        <h3 className="shop-product-name">{product.title}</h3>
        <div className="shop-product-price">
          <del>${product.oldPrice}</del>
          <strong>${product.newPrice}</strong>
        </div>

        {count === 0 ? (
          <button className="shop-product-btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : (
          <div className="num-count-box">
            <button
              className="num-count minus"
              onClick={() => setCount(count > 1 ? count - 1 : 0)}
            >
              -
            </button>
            <span className="count-value">{count}</span>
            <button
              className="num-count plus"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopProductCard;

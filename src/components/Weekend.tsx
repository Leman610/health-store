import "./Weekend.css";
import { FaRegHeart } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import milk from "../assets/weekend-photo.png";
import powder from "../assets/dry milk.png";

const product = {
  title: "Mint & Ginger Digestive Herbal Tea Lorem ipsum",
  image: powder,
  percent: "35%",
  oldPrice: 5.75,
  newPrice: 5.75,
};

const Weekend = () => {
  return (
    <div className="weekend">
      <div className="container weekend-content">
        <div className="weekend-info">
          <h2 className="weekend-heading">Weekend Discount</h2>
          <h1 className="weekend-title">
            Jouney of healthy lifestyle starts with healthy medicine
          </h1>
          <p className="weekend-text">
            A truly healthy lifestyle begins with conscious choices — and that
            starts with what you put into your body. Our natural medicines are
            carefully crafted from plant-based ingredients. Whether you’re
            seeking relief, prevention, or daily wellness support, our products
            help you stay balanced, energized, and aligned with nature.
          </p>
          <p className="weekend-text">
            Because true wellness doesn’t come from shortcuts — it comes from
            nature’s wisdom.
          </p>
          <button className="weekend-button">
            Shop Now <HiArrowLongRight />
          </button>
        </div>

        {/* Orta - böyük şəkil */}
        <div className="weekend-image">
          <img src={milk} alt="Dry milk powder" />
        </div>

        {/* Sağ tərəf - məhsul kartı */}
        <div className="weekend-card">
          <div className="weekend-product">
            <span className="weekend-percent">{product.percent}</span>
            <button className="weekend-heart weekend-icon">
              <FaRegHeart />
            </button>
            <button className="weekend-arrow weekend-icon">
              <FaExpandArrowsAlt />
            </button>
            <img src={product.image} alt={product.title} />
          </div>
          <div className="weekend-details">
            <div className="weekend-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>
            <h3 className="weekend-name">{product.title}</h3>
            <div className="weekend-price">
              <del>${product.oldPrice}</del>
              <strong>${product.newPrice}</strong>
            </div>
            <p className="weekend-remaining">
              Time remaining untl the end of the offer
            </p>
            <button className="weekend-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekend;

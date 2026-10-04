import "./Advice.css";
import { HiArrowLongRight } from "react-icons/hi2";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const Advice = () => {
  return (
    <div className="advice">
      <div className="container advice-content">
        <div className="advice-header">
          <h2 className="advice-title">Recommended for you</h2>
          <button className="advice-view">
            View All <HiArrowLongRight />
          </button>
        </div>

        <div className="product-list">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advice;

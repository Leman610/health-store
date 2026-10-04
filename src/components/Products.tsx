import "./Products.css";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const table = ["Pain & Inflammation", "Skin Care"];

const Products = () => {
  const [activeTab, setActiveTab] = useState("Pain & Inflammation");

  return (
    <div className="products">
      <div className="container products-content">
        <div className="products-header">
          <h2 className="products-title">Best Seller Products</h2>
          <div className="products-table">
            {table.map((tabs) => (
              <button
                key={tabs}
                className={
                  activeTab === tabs ? "products-tabs active" : "products-tabs"
                }
                onClick={() => setActiveTab(tabs)}
              >
                {tabs}
              </button>
            ))}
          </div>
          <button className="products-view">
            View All <HiArrowLongRight />
          </button>
        </div>

        {activeTab === "Pain & Inflammation" && (
          <div className="product-list">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

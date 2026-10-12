import "./Sale.css";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const table = ["Digestive Health", "Immune Support", "Stress"];

const Sale = () => {
  const [activeTab, setActiveTab] = useState("Digestive Health");

  return (
    <div className="sale">
      <div className="container sale-content">
        <div className="sale-header">
          <h2 className="sale-title">Don’t miss this week sale’s</h2>
          <div className="sale-table">
            {table.map((tabs) => (
              <button
                key={tabs}
                className={
                  activeTab === tabs ? "sale-tabs active" : "sale-tabs"
                }
                onClick={() => setActiveTab(tabs)}
              >
                {tabs}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Digestive Health" && (
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

export default Sale;

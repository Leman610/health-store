import "./ProductList.css";
import { useState } from "react";
import ShopProductCard from "../components/ShopProductCard";
import { shopProducts } from "../data/shopProduct";

const ProductList = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="shop-product-list">
      <div className="shop-product-card">
        {shopProducts.map((p) => (
          <ShopProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="shop-product-list-count">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={
              activePage === num ? "shop-page-btn active" : "shop-page-btn"
            }
            onClick={() => setActivePage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

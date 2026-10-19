import "./ProductList.css";
import { useState, useEffect } from "react";
import ShopProductCard from "../components/ShopProductCard";
import { shopProducts } from "../data/shopProduct";

const ProductList = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setProducts(shopProducts);
        setLoading(false);
      } catch (err) {
        setError("Unable to load the data.");
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="shop-product-list">
        <p>Products are loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-product-list">
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="shop-product-list">
      <div className="shop-product-card">
        {products.map((p) => (
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

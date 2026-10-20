import "./ProductList.css";
import { useState, useEffect } from "react";
import ShopProductCard from "../components/ShopProductCard";
import { shopProducts } from "../data/shopProduct";

interface ProductListProps {
  selectedCategories: string[];
  minPrice: string;
  maxPrice: string;
  inStock: boolean;
  onSale: boolean;
  onAddToCart: () => void;
}

const ProductList = ({
  selectedCategories,
  minPrice,
  maxPrice,
  inStock,
  onSale,
  onAddToCart,
}: ProductListProps) => {
  const [activePage, setActivePage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let filtered = shopProducts || [];

      if (selectedCategories.length > 0) {
        filtered = filtered.filter((p) =>
          selectedCategories.includes(p.category),
        );
      }

      if (minPrice !== "") {
        filtered = filtered.filter((p) => p.newPrice >= Number(minPrice));
      }

      if (maxPrice !== "") {
        filtered = filtered.filter((p) => p.newPrice <= Number(maxPrice));
      }

      if (inStock) {
        filtered = filtered.filter((p) => p.inStock === true);
      }

      if (onSale) {
        filtered = filtered.filter((p) => p.onSale === true);
      }

      setProducts(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCategories, minPrice, maxPrice, inStock, onSale]);

  if (loading) {
    return (
      <div className="shop-product-list">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="shop-product-list">
      <div className="shop-product-card">
        {products.length > 0 ? (
          products.map((p) => (
            <ShopProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p>No products found matching your filter.</p>
        )}
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

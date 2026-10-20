import "./Shop.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import shopdessert from "../assets/shop-dessert.png";
import Shopheader from "../pages/Shopheader";
import Sidebar from "../pages/Sidebar";
import ProductList from "./ProductList";

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // 2. Filtr state-ləri
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [inStock, setInStock] = useState<boolean>(false);
  const [onSale, setOnSale] = useState<boolean>(false);

  return (
    <div className="shop-page">
      <div className="our-shop">
        <img src={shopdessert} alt="Dessert" className="dessert-image" />
        <div className="container our-shop-content">
          <div className="our-shop-text">
            <h1>Our Shop</h1>
            <p>Explore our carefully curated selection of natural remedies.</p>
          </div>
        </div>
      </div>

      <Shopheader />

      <div className="shop-container">
        <Sidebar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          inStock={inStock}
          setInStock={setInStock}
          onSale={onSale}
          setOnSale={setOnSale}
        />

        <div className="shop-products-content">
          <ProductList
            selectedCategories={selectedCategories}
            minPrice={minPrice}
            maxPrice={maxPrice}
            inStock={inStock}
            onSale={onSale}
            onAddToCart={() => setIsCartOpen(true)}
          />
        </div>
      </div>

      {isCartOpen && (
        <div className="view-cart">
          <span>
            Mint & Ginger Digestive Herbal <br />
            Tea has been added to your cart
          </span>
          <FaXmark
            style={{ cursor: "pointer" }}
            onClick={() => setIsCartOpen(false)}
          />
          <p className="cart-box">View cart</p>
        </div>
      )}
    </div>
  );
};

export default Shop;

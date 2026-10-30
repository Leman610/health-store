import "./Shop.css";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import shopdessert from "../assets/shop-dessert.png";
import Shopheader from "../pages/Shopheader";
import Sidebar from "../pages/Sidebar";
import ProductList from "./ProductList";
import type { ShopProduct } from "../components/ShopProductCard";

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [inStock, setInStock] = useState<boolean>(false);
  const [onSale, setOnSale] = useState<boolean>(false);

  function handleAddToCart(product: ShopProduct) {
    const savedCart = localStorage.getItem("cart");

    let cart = [];

    if (savedCart !== null) {
      cart = JSON.parse(savedCart);
    }

    let found = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        cart[i].quantity = cart[i].quantity + 1;
        found = true;
      }
    }

    if (found === false) {
      const newProduct = {
        id: product.id,
        name: product.title,
        price: product.newPrice,
        quantity: 1,
        image: product.image,
      };

      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setIsCartOpen(true);
  }

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
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {isCartOpen && (
        <div className="view-cart">
          <span>Product has been added to your cart.</span>

          <FaXmark
            style={{ cursor: "pointer" }}
            onClick={() => setIsCartOpen(false)}
          />

          <p
            className="cart-box"
            onClick={() => {
              window.location.href = "/shoppingcart";
            }}
          >
            View cart
          </p>
        </div>
      )}
    </div>
  );
};

export default Shop;

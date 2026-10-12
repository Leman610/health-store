import "./Shop.css";
import shopdessert from "../assets/shop-dessert.png";
import Shopheader from "../pages/Shopheader";
import Sidebar from "../pages/Sidebar";
import ProductList from "./ProductList";
import { FaXmark } from "react-icons/fa6";

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="our-shop">
        <img src={shopdessert} alt="" className="dessert-image" />
        <div className="container our-shop-content">
          <div className="our-shop-text">
            <h1>Our Shop</h1>
            <p>
              Explore our carefully curated selection of natural remedies
              designed to <br />
              support your health and well-being every day.
            </p>
          </div>
        </div>
      </div>
      <Shopheader />
      <div className="shop-container">
        <Sidebar />
        <div className="shop-products-content">
          <ProductList />
        </div>
      </div>
      <div className="view-cart">
        <span>
          Mini & Ginger Disgestive Herbal <br />
          Tea has been added to your cart
        </span>
        <FaXmark />
        <p className="cart-box">View cart</p>
      </div>
    </div>
  );
};

export default Shop;

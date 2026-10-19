import "./Cart.css";
import { useState } from "react";
import { selectedProducts } from "../data/cart";

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

function Cart() {
  const [products, setProducts] = useState<CartProduct[]>(selectedProducts);
  const [shipping, setShipping] = useState("flat");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [message, setMessage] = useState("Message to display");

  function formatPrice(price: number) {
    if (Number.isInteger(price)) {
      return "$" + price;
    }
    return "$" + price.toFixed(2);
  }

  let subtotal = 0;
  for (let i = 0; i < products.length; i++) {
    subtotal = subtotal + products[i].price * products[i].quantity;
  }

  let shippingCost = 0;
  if (shipping === "flat" && products.length > 0) {
    shippingCost = 15;
  }

  let discount = 0;
  if (couponApplied) {
    discount = subtotal * 0.1;
  }

  const total = subtotal + shippingCost - discount;

  function changeQuantity(id: number, amount: number) {
    const newProducts = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.id === id) {
        const newQuantity = product.quantity + amount;
        if (newQuantity >= 1) {
          newProducts.push({ ...product, quantity: newQuantity });
        } else {
          newProducts.push(product);
        }
      } else {
        newProducts.push(product);
      }
    }
    setProducts(newProducts);
  }

  function removeProduct(id: number) {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    setMessage("Product removed from cart.");
  }

  function clearCart() {
    setProducts([]);
    setCoupon("");
    setCouponApplied(false);
    setMessage("Your cart is empty.");
  }

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "COUPON") {
      setCouponApplied(true);
      setMessage("Successful");
    } else {
      setCouponApplied(false);
      setMessage("Invalid coupon code. Try again");
    }
  }

  return (
    <div className="cart-page">
      <div className="cart-message">{message}</div>
      <div className="cart-layout">
        <div className="cart-main">
          <div className="cart-table">
            <div className="cart-table-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
              <span></span>
            </div>

            {products.length === 0 && (
              <div className="cart-empty">Your cart is empty.</div>
            )}

            {products.map((product) => (
              <div className="cart-product" key={product.id}>
                <div className="cart-product-info">
                  <div className="cart-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <span className="cart-product-name">{product.name}</span>
                </div>

                <span className="cart-price">{formatPrice(product.price)}</span>

                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() => changeQuantity(product.id, -1)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    type="button"
                    onClick={() => changeQuantity(product.id, 1)}
                  >
                    +
                  </button>
                </div>

                <span className="cart-subtotal">
                  {formatPrice(product.price * product.quantity)}
                </span>

                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => removeProduct(product.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-coupon-row">
            <div className="cart-coupon">
              <label htmlFor="coupon">Coupon:</label>
              <input
                id="coupon"
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                type="button"
                className="apply-coupon"
                onClick={applyCoupon}
              >
                Apply coupon
              </button>
            </div>

            <button type="button" className="clear-cart" onClick={clearCart}>
              Clear All
            </button>
          </div>
        </div>

        <div className="cart-totals">
          <h3>Cart totals</h3>

          <div className="cart-total-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="cart-shipping">
            <span>Shipping</span>
            <div className="shipping-options">
              <label>
                <span>Flat rate: $15.00</span>
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === "flat"}
                  onChange={() => setShipping("flat")}
                />
              </label>

              <label>
                <span>Local pickup</span>
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === "pickup"}
                  onChange={() => setShipping("pickup")}
                />
              </label>
            </div>
          </div>

          <div className="cart-shipping-destination">Shipping to CA</div>

          <div className="cart-total-row final-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <button
            type="button"
            className="checkout-btn"
            disabled={products.length === 0}
            onClick={() => setMessage("Checkout page is not connected yet.")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

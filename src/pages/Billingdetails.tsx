import "./Billingdetails.css";
import { useState } from "react";
import { selectedsProducts } from "../data/checkout";

export type BillingProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const Billingdetails = () => {
  const [products] = useState<BillingProduct[]>(selectedsProducts);
  const [shipping, setShipping] = useState("flat");
  const [payment, setPayment] = useState("paypal");
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

  const shippingCost = shipping === "flat" && products.length > 0 ? 15 : 0;
  const total = subtotal + shippingCost;

  function placeOrder() {
    if (products.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }
    setMessage(
      "Order placed with " + (payment === "paypal" ? "Paypal" : "Stripe") + ".",
    );
  }

  return (
    <div className="billing-page-container">
      <div className="cart-message">{message}</div>
      <div className="billing-layout">
        <div className="billing-details-form">
          <h2>Billing details</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" defaultValue="Jhon" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Nom" />
              </div>
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <select>
                <option>Choose option</option>
              </select>
            </div>

            <div className="form-group">
              <label>Country / Region</label>
              <select>
                <option>Choose option</option>
              </select>
            </div>

            <div className="form-group">
              <label>Street Adress</label>
              <input type="text" placeholder="." />
            </div>

            <div className="form-group">
              <label>Town / City</label>
              <input type="text" placeholder="." />
            </div>

            <div className="form-group">
              <label>State *</label>
              <select>
                <option>Choose option</option>
              </select>
            </div>

            <div className="form-group">
              <label>ZIP Code</label>
              <input type="text" placeholder="." />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" placeholder="." />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="." />
            </div>

            <div className="form-group">
              <label>Order Note (Optionnal)</label>
              <textarea placeholder="Type here"></textarea>
            </div>
          </form>
        </div>

        <div className="your-order">
          <h3>Your order</h3>
          <div className="order-header-row">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {products.map((product) => (
            <div key={product.id} className="order-product-item">
              <div className="order-product-quantity">
                {product.name} <strong>X{product.quantity}</strong>
              </div>
              <span>{formatPrice(product.price * product.quantity)}</span>
            </div>
          ))}

          <div className="order-shipping-block">
            <span>Shipping</span>
            <div className="shipping-options-list">
              <label className="shipping-label">
                <span>Flat rate: $15.00</span>
                <input
                  type="radio"
                  checked={shipping === "flat"}
                  onChange={() => setShipping("flat")}
                />
              </label>
              <label className="shipping-label">
                <span>Local pickup</span>
                <input
                  type="radio"
                  checked={shipping === "pickup"}
                  onChange={() => setShipping("pickup")}
                />
              </label>
              <span className="shipping-to-text">Shipping to CA</span>
            </div>
          </div>

          <div className="shipping-destination-text">Shipping to CA</div>

          <div className="order-total-row">
            <span>Total</span>
            <span className="order-total-price">{formatPrice(total)}</span>
          </div>

          <div className="payment-methods-block">
            <label className="payment-label">
              <input
                type="radio"
                checked={payment === "paypal"}
                onChange={() => setPayment("paypal")}
              />
              <span>
                Paypal
                <span>Pay with Paypal</span>
              </span>
            </label>
            <label className="payment-label">
              <input
                type="radio"
                checked={payment === "stripe"}
                onChange={() => setPayment("stripe")}
              />
              <span>Stripe</span>
            </label>
          </div>

          <p className="privacy-policy-text">
            Your personal data will be used to process your <br /> order,
            support your experience throughout this <br /> website, and for
            other purposes described in <br /> our privacy policy.
          </p>

          <button
            type="button"
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billingdetails;

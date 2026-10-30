import "./Item.css";
import { useState } from "react";

const Item = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(true);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="item">
      <div className="container item-content">
        <div className="item-part">
          <h2 className="item-title"> Frequently Asked Questions</h2>
          <div className="item-accordion">
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen1(!open1)}>
                How can I order products?
              </button>
              {open1 && (
                <p>
                  Choose the product you want and add it to your shopping cart.
                  Then enter your details and complete the checkout process.
                  Once your order is confirmed, the delivery process will begin.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen2(!open2)}>
                How long does delivery take?
              </button>
              {open2 && (
                <p>
                  Delivery time depends on your location. You can find more
                  information about delivery during the checkout process.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen3(!open3)}>
                Where can I find product prices?
              </button>
              {open3 && (
                <p>
                  The prices of all products are displayed on our website. Click
                  on a product to view its price, description, and other
                  details.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="item-part">
          <h2 className="item-title">Orders and Payments</h2>
          <div className="item-accordion">
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen4(!open4)}>
                What payment methods can I use?
              </button>
              {open4 && (
                <p>
                  You can choose one of the available payment methods during
                  checkout. The available options will be displayed when you
                  place your order.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen5(!open5)}>
                How can I track my order?
              </button>
              {open5 && (
                <p>
                  To get updates about your order status, please contact us
                  through the Contact section of our website.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen6(!open6)}>
                How can I contact you?
              </button>
              {open6 && (
                <p>
                  If you have any questions or suggestions, visit the Contact
                  section of our website to find our contact information.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

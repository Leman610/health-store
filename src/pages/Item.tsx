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
          <h2 className="item-title">Praesent eget convallis dolor</h2>
          <div className="item-accordion">
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen1(!open1)}>
                Accordion Item #1
              </button>
              {open1 && (
                <p>
                  This is the first item’s accordion body. It is shown by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It’s also
                  worth noting that just about any HTML can go within the
                  .accordion-body, though the transition does limit overflow.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen2(!open2)}>
                Accordion Item #2
              </button>
              {open2 && <p>This is the second item’s accordion body.</p>}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen3(!open3)}>
                Accordion Item #3
              </button>
              {open3 && <p>This is the third item’s accordion body.</p>}
            </div>
          </div>
        </div>

        <div className="item-part">
          <h2 className="item-title">Praesent eget convallis dolor</h2>
          <div className="item-accordion">
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen4(!open4)}>
                Accordion Item #1
              </button>
              {open4 && (
                <p>
                  This is the first item’s accordion body. It is shown by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It’s also
                  worth noting that just about any HTML can go within the
                  .accordion-body, though the transition does limit overflow.
                </p>
              )}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen5(!open5)}>
                Accordion Item #2
              </button>
              {open5 && <p>This is the second item’s accordion body.</p>}
            </div>
            <div className="faq-item">
              <button className="faq-question" onClick={() => setOpen6(!open6)}>
                Accordion Item #3
              </button>
              {open6 && <p>This is the third item’s accordion body.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

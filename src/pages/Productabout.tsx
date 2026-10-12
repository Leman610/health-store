import "./Productabout.css";
import { useState } from "react";

const table = ["Description", "Reviews (3)"];

const Productabout = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="product-about">
      <div className="container product-about-content">
        <div className="product-about-header">
          <div className="product-about-table">
            {table.map((about) => (
              <button
                key={about}
                className={
                  activeTab === about
                    ? "product-about-btn active"
                    : "product-about-btn"
                }
                onClick={() => setActiveTab(about)}
              >
                {about}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Description" && (
          <div className="product-about-text">
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra <br /> vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque <br />
              lorem mattis quis. Cras imperdiet est in nunc tristique lacinia.
              Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex,
              aliquet vel <br />
              ornare vel, dignissim a tortor.
            </p>
            <p>
              Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
              auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. <br /> Maecenas lacus odio, feugiat eu nunc sit
              amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit
              amet eros sit amet, ultricies cursus <br />
              ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus
              blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
              Vivamus faucibus, <br />
              ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas <br />
              purus commodo vel.
            </p>
          </div>
        )}

        {activeTab === "Reviews (3)" && (
          <div className="product-about-text">
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productabout;

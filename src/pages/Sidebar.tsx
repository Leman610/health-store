import "./Sidebar.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="filter-btn" onClick={() => setIsOpen(!isOpen)}>
        <FiFilter /> Filter
      </div>

      <div className={`sidebar-content-wrapper ${isOpen ? "open" : ""}`}>
        <div className="sidebar-section">
          <div
            className="sidebar-title"
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories {showCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div className={`sidebar-list ${!showCategories ? "hidden" : ""}`}>
            {[
              "Digestive Health",
              "Immune Support",
              "Respiratory Relief",
              "Pain & Inflammation",
              "Stress",
              "Skin Care",
            ].map((item, index) => (
              <label key={index}>
                <input type="checkbox" /> {item}
              </label>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <div
            className="sidebar-title"
            onClick={() => setShowPrice(!showPrice)}
          >
            Filter by price {showPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div className={`sidebar-list ${!showPrice ? "hidden" : ""}`}>
            <div className="price-inputs">
              <div>
                <span>Min</span>
                <input type="text" placeholder="0" />
              </div>
              <div>
                <span>Max</span>
                <input type="text" placeholder="999999" />
              </div>
            </div>
            <div className="slider-container">
              <div className="line-bg"></div>
              <div className="line-active"></div>
              <div className="dot dot-left"></div>
              <div className="dot dot-right"></div>
            </div>
            <div className="sidebar-price">
              <span>Price: $10 - $60</span>
              <button>Filter</button>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <div
            className="sidebar-title"
            onClick={() => setShowStatus(!showStatus)}
          >
            Product Status {showStatus ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div className={`sidebar-list ${!showStatus ? "hidden" : ""}`}>
            <label>
              <input type="checkbox" /> In Stock
            </label>
            <label>
              <input type="checkbox" /> On Sale
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

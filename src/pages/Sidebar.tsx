import "./Sidebar.css";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

interface SidebarProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  minPrice: string;
  setMinPrice: (val: string) => void;
  maxPrice: string;
  setMaxPrice: (val: string) => void;
  inStock: boolean;
  setInStock: (val: boolean) => void;
  onSale: boolean;
  setOnSale: (val: boolean) => void;
}

const Sidebar = ({
  selectedCategories,
  setSelectedCategories,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  inStock,
  setInStock,
  onSale,
  setOnSale,
}: SidebarProps) => {
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const categoriesList = [
    "Digestive Health",
    "Immune Support",
    "Respiratory Relief",
    "Pain & Inflammation",
    "Stress",
    "Skin Care",
  ];

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

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
            {categoriesList.map((item, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(item)}
                  onChange={() => handleCategoryChange(item)}
                />
                {item}
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
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div>
                <span>Max</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="999999"
                />
              </div>
            </div>
            <div className="slider-container">
              <div className="line-bg"></div>
              <div className="line-active"></div>
              <div className="dot dot-left"></div>
              <div className="dot dot-right"></div>
            </div>
            <div className="sidebar-price">
              <span>
                Price: ${minPrice || 0} - ${maxPrice || 60}
              </span>
              <button onClick={() => {}}>Filter</button>
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
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
              />
              In Stock
            </label>
            <label>
              <input
                type="checkbox"
                checked={onSale}
                onChange={(e) => setOnSale(e.target.checked)}
              />
              On Sale
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

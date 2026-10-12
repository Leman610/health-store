import { IoIosArrowForward } from "react-icons/io";
import "./Producttitle.css";
const Producttitle = () => {
  return (
    <div className="categories-header-titles">
      <div className=" categories-header-contents ">
        <div className="categories-header-products">
          <span>Home</span>
          <IoIosArrowForward />
          <span>Digestive Health</span>
          <IoIosArrowForward />
          <span className="categories-header-actives">
            Mint & Ginger Digestive Herbal Tea
          </span>
        </div>
      </div>
    </div>
  );
};

export default Producttitle;

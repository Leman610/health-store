import "./Shoppingcarttitle.css";
import { IoIosArrowForward } from "react-icons/io";
const Shoppingcarttitle = () => {
  return (
    <div className="shoppingcart-title-header">
      <div className="container shoppingcart-title-header-content">
        <div className="shoppingcart-title-left">
          <span>Home</span>
          <IoIosArrowForward />
          <span className="shoppingcart-title-active">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcarttitle;

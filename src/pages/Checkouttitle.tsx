import "./Checkouttitle.css";
import { IoIosArrowForward } from "react-icons/io";

const Checkouttitle = () => {
  return (
    <div className="checkout-title-header">
      <div className="container checkout-title-header-content">
        <div className="checkout-title-left">
          <span>Home</span>
          <IoIosArrowForward />
          <span className="checkout-title-active">Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Checkouttitle;

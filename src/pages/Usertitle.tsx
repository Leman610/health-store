import "./Usertitle.css";
import { IoIosArrowForward } from "react-icons/io";
const Usertitle = () => {
  return (
    <div className="user-title-header">
      <div className="container user-title-header-content">
        <div className="user-title-left">
          <span>Home</span>
          <IoIosArrowForward />
          <span className="user-title-active">My Account</span>
        </div>
      </div>
    </div>
  );
};

export default Usertitle;

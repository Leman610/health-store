import "./Aboutustitle.css";
import { IoIosArrowForward } from "react-icons/io";

const Aboutustitle = () => {
  return (
     <div className="about-us-title-header">
          <div className="container about-us-title-header-content">
            <div className="about-us-title-left">
              <span>Home</span>
              <IoIosArrowForward />
              <span className="about-us-title-active">About Us</span>
            </div>
          </div>
        </div>
  )
}

export default Aboutustitle
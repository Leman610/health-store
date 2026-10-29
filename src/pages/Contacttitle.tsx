import "./Contacttitle.css";
import { IoIosArrowForward } from "react-icons/io";

const Contacttitle = () => {
  return (
    <div className="contact-title-header">
      <div className="container contact-title-header-content">
        <div className=" contact-title-left">
          <span>Home</span>
          <IoIosArrowForward />
          <span className="contact-title-active">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default Contacttitle;

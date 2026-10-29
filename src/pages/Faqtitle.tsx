import "./Faqtitle.css";
import { IoIosArrowForward } from "react-icons/io";
const Faqtitle = () => {
  return (
     <div className="faq-title-header">
          <div className="container faq-title-header-content">
            <div className=" faq-title-left">
              <span>Home</span>
              <IoIosArrowForward />
              <span className="faq-title-active">Faq</span>
            </div>
          </div>
        </div>
  )
}

export default Faqtitle
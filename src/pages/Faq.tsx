import "./Faq.css";
import computer from "../assets/computer.png";
import Faqtitle from "./Faqtitle";
import Item from "./Item";

const Faq = () => {
  return (
    <div className="faq-page">
      <div className="faq">
        <img src={computer} className="computer-images" />
        <div className="faq-content">
          <div className="faq-text">
            <h1>FAQ</h1>
            <p>
              Answers to frequently asked questions
            </p>
          </div>
        </div>
      </div>
      <Faqtitle />
      <Item />
    </div>
  );
};

export default Faq;
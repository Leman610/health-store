import "./Contact.css";
import computer from "../assets/computer.png";
import Contacttitle from "./Contacttitle";
import Initialanswer from "./Initialanswer";
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact">
        <img src={computer} className="computer-image" />
        <div className="contact-content">
          <div className="contact-text">
            <h1>How Can We Help You?</h1>
            <p>
              Contact us for all your questions and opinions, or you can solve
              your <br /> problems in a shorter time with our contact offices.
            </p>
          </div>
        </div>
      </div>
      <Contacttitle />
      <Initialanswer />
    </div>
  );
};

export default Contact;

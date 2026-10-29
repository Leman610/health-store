import "./Initialanswer.css";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Initialanswer = () => {
  return (
    <div className="initial-answers">
      <div className="container initial-answers-content">
        <div className="initial-answers-left">
          <h2 className="initial-answers-title">Do you have question ?</h2>
          <p className="initial-answers-text">
            You can always consult the FAQ page for initial answers.
          </p>
          <p className="initial-answers-light-color">Opening hours</p>
          <p className="initial-answers-dark">Monday - friday: 9am - 5pm</p>
          <p className="initial-answers-dark">Weekend closed</p>
          <div className="initial-answers-contact">
            <div className="initial-answers-contact-info">
              <p className="initial-answers-light-color">Contact 1</p>
              <p className="initial-answers-dark">
                Germany — 785 15h Street, <br />
                Office 478/B Green Mall <br />
                Berlin, De 81566
              </p>
              <a className="initial-answers-phone" href="tel:+33123456788">
                +33 1234 567 88
              </a>
              <a
                className="initial-answers-email"
                href="mailto:info@santeconsciente.com"
              >
                info@santeconsciente.com
              </a>
            </div>
            <div className="initial-answers-contact-info">
              <p className="initial-answers-light-color">Contact 1</p>
              <p className="initial-answers-dark">
                Germany — 785 15h Street, <br />
                Office 478/B Green Mall <br />
                Berlin, De 81566
              </p>
              <a className="initial-answers-phone" href="tel:+33123456788">
                +33 1234 567 88
              </a>
              <a
                className="initial-answers-email"
                href="mailto:info@santeconsciente.com"
              >
                info@santeconsciente.com
              </a>
            </div>
          </div>
          <div className="initial-answers-social-media">
            <p>Follow us on social media:</p>
            <a
              className="initial-answers-icon-facebook"
              href="https://www.facebook.com/"
              target="blank"
            >
              <FaFacebook />
            </a>
            <a
              className="initial-answers-icon-twitter"
              href="https://x.com/"
              target="blank"
            >
              <FaTwitter />
            </a>
            <a
              className="initial-answers-icon-pinterest"
              href="https://www.pinterest.com/"
              target="blank"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="initial-answers-form">
          <div className="initial-answers-part">
            <div>
              <label>Your name</label>
              <input type="text" placeholder="." />
            </div>
            <div>
              <label>Your email</label>
              <input type="email" placeholder="." />
            </div>
          </div>
          <label>Subject *</label>
          <input type="text" placeholder="." />
          <label>Your message</label>
          <textarea placeholder="Type here"></textarea>
          <button className="initial-answers-button">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Initialanswer;

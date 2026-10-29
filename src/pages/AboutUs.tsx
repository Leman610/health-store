import "./AboutUs.css";
import about from "../assets/Aboutus.png";
import Aboutustitle from "./Aboutustitle";
import View from "./View";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us">
        <img src={about} className="computer-image" />
        <div className="about-us-content">
          <div className="about-us-text">
            <h1>Do You Want To Know Us?</h1>
            <p>
              Allow us to briefly introduce our company so that you can better
              understand <br /> our quality.
            </p>
          </div>
        </div>
      </div>
      <Aboutustitle />
      <View />
    </div>
  );
};

export default AboutUs;

import "./Hero.css";
import tree from "../assets/green tree.jpg";
import frameOne from "../assets/Frame 1.png";
import frameTwo from "../assets/Frame 2.png";
import frameThree from "../assets/Frame 2 (1).png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={tree} alt="Green tree" className="tree-image" />
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            The more you love your <br />
            health, more you use <br />
            natural medicine
          </h1>
          <p>
            Discover nature’s power to heal — safely and effectively. Trusted{" "}
            <br />
            natural solutions, just a click away.
          </p>
          <div className="hero-frame">
            <div className="hero-info">
              <img src={frameOne} alt="Natural" />
              <span>100% Natural & Safe Remedies</span>
            </div>
            <div className="hero-info">
              <img src={frameTwo} alt="Trusted" />
              <span>Trusted by Thousands</span>
            </div>
            <div className="hero-info">
              <img src={frameThree} alt="Heal" />
              <span>Natural medicine can heal you better than you think</span>
            </div>
          </div>
          <button className="hero-btn">
            Shop Now
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

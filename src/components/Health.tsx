import "./Health.css";
import health from "../assets/Health.png";
import apple from "../assets/apple.png";
import leaf from "../assets/leaf.png";
import scan from "../assets/scan-heart.png";
import photo from "../assets/health-photo.png";

const Health = () => {
  return (
    <div className="health">
      <div className="container">
        <img src={health} alt="Digestive Health" className="digestive-health" />
        <div className="health-content">
          <div className="digestive-title">
            <span>Digestive Health</span>
            <h1>
              The only source of <br />
              healthy medicine
            </h1>
            <p>
              We care for your health and the planet with responsibly sourced{" "}
              <br />
              ingredients.
            </p>
          </div>
          <div className="health-frame">
            <div className="health-info">
              <img src={apple} alt="Ingredients" />
              <span>Made from several ingredients</span>
            </div>
            <div className="health-info">
              <img src={leaf} alt="Natural" />
              <span>100% natural</span>
            </div>
            <div className="health-info">
              <img src={scan} alt="Scan" />
              <span>Has healing powers</span>
            </div>
          </div>
          <button className="health-btn">
            Shop Now
            <span>→</span>
          </button>
        </div>
        <div className="health-photo">
          <img src={photo} alt="Girl-photo" />
        </div>
      </div>
    </div>
  );
};

export default Health;

import "./Weekdiscount.css";
import food from "../assets/weekend-food.png";
const Weekdiscount = () => {
  return (
    <div className="weekdiscount">
      <div className="container weekdiscount-content">
        <div className="weekdiscount-card">
          <p className="weekdiscount-title">Weekend Discount</p>
          <h1>
            Healthier you use, healthiest to <br />
            stay
          </h1>
          <p className="week-info">Natural medicine is the main reason of health</p>
          <button className="weekdiscount-btn">
            Shop Now
            <strong>→</strong>
          </button>
        </div>
        <div className="weekdiscount-image">
          <img src={food} alt="Weekend food" />
        </div>
      </div>
    </div>
  );
};

export default Weekdiscount;

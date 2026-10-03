import "./Weekend.css";
import dryMilk from "../assets/weekend-photo.png"

const Weekend = () => {
  return (
    <div className="weekend">
      <div className="container weekend-content">
        <div className="weekend-title">
          <span>Weekend Discount</span>
          <h1>
            Jouney of healthy <br />
            lifestyle starts with <br />
            healthy medicine
          </h1>
          <p>
            A truly healthy lifestyle begins with conscious choices — <br />
            and that starts with what you put into your body. Our <br />
            natural medicines are carefully crafted from plant-based <br />
            ingredients. Whether you're seeking relief, prevention, <br />
            or daily wellness support, our products help you stay <br />
            balanced, energized, and aligned with nature.
            <br /> <br />
            Because true wellness doesn’t come from shortcuts — it <br />
            comes from nature’s wisdom.
          </p>
        <button className="weekend-btn">
          Shop Now
          <strong>→</strong>
        </button>
        </div>
      <div className="weekend-image">
        <img src={dryMilk} alt="Herbal Tea" />
      </div>
      </div>
    </div>
  );
};

export default Weekend;

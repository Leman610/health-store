import "./Week.css";
import turmeric from "../assets/Turmeric.png";
import digestive from "../assets/Digestive.png";
import hair from "../assets/Hair.png";
const discount = [
  {
    title: "Turmeric",
    info: "Supports immunity with powerful antioxidants.",
    image: turmeric,
    price: 2.49,
    background: "#EFF9EE",
  },
  {
    title: "Digestive Herbal Hass",
    info: "Only for this week...",
    image: digestive,
    price: 2.49,
    background: "#FAF7E8",
  },
  {
    title: "Hair Growth Booster",
    info: "Stimulates natural",
    image: hair,
    price: 2.49,
    background: "#FAF1F2",
  },
];
const WeekDiscount = () => {
  return (
    <div className="week-discount">
      <div className="container">
        <h3 className="week-title">Only this week</h3>
        <div className="week-content">
          {discount.map((count) => (
            <div
              className="week-box"
              key={count.title}
              style={{ backgroundColor: count.background }}
            >
              <div className="week-info">
                <p className="week-heading">Weekend Discount</p>
                <h2 className="week-names">{count.title}</h2>
                <span className="week-text">{count.info}</span>
                <div className="week-price">
                  <p>From</p>
                  <span>${count.price}</span>
                </div>
              </div>
              <div className="week-image">
                <img src={count.image} alt={count.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekDiscount;

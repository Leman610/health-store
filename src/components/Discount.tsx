import "./Discount.css";
import respiratory from "../assets/Respiratory.png";
import food from "../assets/Food to live.png";
import fruit from "../assets/fruit-juice.png";
const weekdiscount = [
  {
    title: "Turmeric",
    info: "Supports immunity with powerful antioxidants.",
    image: respiratory,
    price: 2.49,
    background: "#EFF9EE",
  },
  {
    title: "Digestive Herbal Hass",
    info: "Only for this week...",
    image: food,
    price: 2.49,
    background: "#FAF7E8",
  },
  {
    title: "Hair Growth Booster",
    info: "Stimulates natural",
    image: fruit,
    price: 2.49,
    background: "#FAF1F2",
  },
];

const WeekDiscount = () => {
  return (
    <div className="container">
      {weekdiscount.map((count) => (
        <div className="count" key={count.title}>
          <div className="box" style={{ backgroundColor: count.background }}>
            <p className="name">Weekend Discount</p>
            <h2 className="title">{count.title}</h2>
            <p className="info">{count.info}</p>
            <div className="price">
              <p>From</p>
              <span>${count.price}</span>
            </div>
          </div>
          <div className="image">
            <img src={count.image} alt={count.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekDiscount;

import "./Categoriesbox.css";
import food from "../assets/Food to Live.png";
import immune from "../assets/Immune.jpg";
import respiratory from "../assets/Respiratory.png";
import pain from "../assets/Pain.jpg";
import stress from "../assets/Stress.jpg";
import skin from "../assets/Skin.jpg";

const categoriesbox = [
  {
    image: food,
    title: "Digestive Health",
    products: 6,
  },
  {
    image: immune,
    title: "Immune Support",
    products: 1,
  },
  {
    image: respiratory,
    title: "Respiratory Relief",
    products: 20,
  },
  {
    image: pain,
    title: "Pain & Inflammation",
    products: 40,
  },
  {
    image: stress,
    title: "Stress",
    products: 12,
  },
  {
    image: skin,
    title: "Skin Care",
    products: 26,
  },
];

const Categories = () => {
  return (
    <div className="categoriesbox">
      <div className="container categoriesbox-content">
        {categoriesbox.map((categories) => (
          <div className="category-box" key={categories.title}>
            <div className="category-image">
              <img src={categories.image} alt={categories.title} />
            </div>
            <h3>{categories.title}</h3>
            <p>{categories.products} Products</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

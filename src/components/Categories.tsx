import "./Categories.css";
import food from "../assets/Food to Live.png";
import immune from "../assets/Immune.jpg";
import respiratory from "../assets/Respiratory.png";
import pain from "../assets/Pain.jpg";
import stress from "../assets/Stress.jpg";
import skin from "../assets/Skin.jpg";
const categories = [
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
    <div className="categories">
      <div className="container categories-content ">
        {categories.map((category) => (
          <div className="category-box" key={category.title}>
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <h3>{category.title}</h3>
            <p>{category.products} Products</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;

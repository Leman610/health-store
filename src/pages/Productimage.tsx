import "./Productimage.css";
import productİmage from "../assets/Sunfood.png";

const Productimage = () => {
  return (
    <div className="categories-product-image">
      <div className="categories-image">
        <span className="categories-count">35%</span>
        <img src={productİmage} alt="" />
      </div>
    </div>
  );
};

export default Productimage;

import "./Categoriesheader.css";
import Producttitle from "./Producttitle";
import Productimage from "./Productimage";
import Productinfo from "./Productinfo";
import Productabout from "./Productabout";
import Productsrelated from "./Productsrelated";

const Categoriesheader = () => {
  return (
    <div className="categories-header">
      <div className="container">
        <Producttitle />
      </div>
      <div className="categories-header-right">
        <Productimage />
        <Productinfo />
      </div>

      <div className="categories-header-about">
        <Productabout />
        <Productsrelated />
      </div>
    </div>
  );
};

export default Categoriesheader;

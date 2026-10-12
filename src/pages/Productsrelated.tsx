import "./Productsrelated.css";
import Productcategories from "../components/Productcategories";
import { products } from "../data/products";

const Productsrelated = () => {
  return (
    <div className="advice">
      <div className="container advice-content">
        <div className="advice-header">
          <h2 className="advice-title">Related products</h2>
        </div>
        <div className="product-list">
          {products.map((p) => (
            <Productcategories key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productsrelated;

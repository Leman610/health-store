import Cart from "./Cart";
import Shoppingcarttitle from "./Shoppingcarttitle";

const Shoppingcart = () => {
  return (
    <div className="user-header">
      <Shoppingcarttitle />
      <div className="container user-header-right">
        <Cart />
      </div>
    </div>
  );
};

export default Shoppingcart;

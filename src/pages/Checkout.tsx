import Checkouttitle from "./Checkouttitle";
import Billingdetails from "./Billingdetails";
const Checkout = () => {
  return (
    <div className="checkout-header">
      <Checkouttitle />
      <div className=" container checkout-header-right">
        <Billingdetails />
      </div>
    </div>
  )
}

export default Checkout



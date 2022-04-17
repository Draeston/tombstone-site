import "../../assets/styles/Landing/MakeOrder.css";
import { NavLink } from "react-router-dom";

function MakeOrder() {
  return (
    <div className="make-order">
      <h1 className="make-order-title">JOIN US!</h1>
      <NavLink to="/tombstones" className="make-order-button">
        List of tombstones
      </NavLink>
    </div>
  );
}

export default MakeOrder;

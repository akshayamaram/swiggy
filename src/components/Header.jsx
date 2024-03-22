import { useContext, useState } from "react";
import { CART_ICON, LOGO_SVG } from "../utils/constants";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const[btnName , setBtnName] = useState("Login");
  const onlineStaus = useUserStatus();

  // const userdata = useContext(UserContext)
  // console.log(userdata);

  /** Selector - for subscribing to our store */
  const cartItems = useSelector((store) => store.cart.items)
  // console.log(cartItems);
  

  return (
    <div className="header">
      <div className="logo-container">{LOGO_SVG}</div>
      <div className="nav-items">
        <ul>
          <li>
            Status :{" "}
            {onlineStaus ? (
              <span className="status-dot">🟢</span>
            ) : (
              <span className="status-dot">🔴</span>
            )}
          </li>
          <li>
            <Link to={"/"}>Home</Link>{" "}
            {/* Link tag dosent reload the whole page unlike anchor tag */}
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              {CART_ICON}<span data-testid="cart" className="cart-counter">{"( " + cartItems.length + " )"}</span>
            </Link>
          </li>
        </ul>
        <button
          className="login-btn"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
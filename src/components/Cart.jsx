import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { CLEAR_CART_ICON } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    
    const handleClearcart = () => {
        dispatch(clearCart());
    }

    return (
      <div className="cart-wrapper">

        {cartItems.length === 0 ? (
          <div className="empty-cart-page">
            <img
              className="empty-cart-image"
              src={require("../../assets/images/empty-cart-img.png")}
              alt="Empty Cart"
            />
            <h4 className="empty-cart-msg1">Your cart is empty</h4>
            <h6 className="empty-cart-msg2">
              You can go to home page to view more restaurants
            </h6>
          </div>
        ) : (
          <div className="cart-with-items">
            <h3>Cart - {cartItems.length} </h3>
            <div className="clear-btn-wrapper">
              <button className="clear-cart-btn" onClick={handleClearcart}>
                clear 
              </button>
            </div>
            <div className="cart-items">
              <MenuItemList items={cartItems} />
            </div>
          </div>
        )}

      </div>
    );
}

export default Cart;
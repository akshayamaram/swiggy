import { DISH_IMAGE } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addToCart } from "../utils/cartSlice";

const MenuItemList = (items) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
      dispatch(addToCart(item));
    }

    return (
      <div className="resMenu">
        <ul>
          {items.items.map((item) => (
            <li key={item?.card?.info?.id}>
              <div className="dishCard" data-testid="dish-card">
                <div className="dc-left">
                  <h4>{item?.card?.info?.name}</h4>
                  <h5>
                    ₹
                    {item?.card?.info?.defaultPrice / 100 ||
                      item?.card?.info?.price / 100}
                  </h5>
                  <h6>{item?.card?.info?.description}</h6>
                </div>
                <div className="dc-right">
                  <div className="dishImageWrapper">
                    <img
                      className="dishimg"
                      src={DISH_IMAGE + item?.card?.info?.imageId}
                    />
                    <button  className="add-btn" onClick={() => handleAddItem(item)}>Add  +</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
}

export default MenuItemList; 


            // <div className="dishCard">
            //   <div className="dc-left">
            //     <h4>{item?.card?.info?.name}</h4>
            //     <h5>
            //       ₹
            //       {item?.card?.info?.defaultPrice / 100 ||
            //         item?.card?.info?.price / 100}
            //     </h5>
            //     <h6>{item?.card?.info?.description}</h6>
            //   </div>
            //   <div className="dc-right">
            //     <div className="dishImageWrapper">
            //       <img
            //         className="dishimg"
            //         src={DISH_IMAGE + item?.card?.info?.imageId}
            //       />
            //     </div>
            //   </div>
            // </div>;
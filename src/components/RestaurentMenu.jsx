import Shimmer from "./Shimmer";
import { COST_ICON, DISH_IMAGE, TIME_ICON } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo =
    useRestaurentMenu(
      resId
    ); /** using our own custom hook for fetching restaurant details */

  // const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    locality,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  /**
   * ? swiggy keeps on changing the data structure so make sure  to check it out before using this code     like in the above example after REGULAR, it maybe cards[2] or cards[1] or cards[3] so keep an eye on it and then update the data structure for your self accordingly
   */

  // console.log(itemCards);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card); 

  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCategories);

  return (
    <div className="resParent">
      <div className="resDetails">
        <div className="rd-left">
          <h1>{name}</h1>
          <h6>{cuisines.join(",")}</h6>
          <h4>
            {locality}, {sla.lastMileTravelString}
          </h4>
          <div className="rdl-bottom">
            <div className="time-wrapper">
              <h4>{TIME_ICON}</h4>
              <h5>{sla.slaString}</h5>
            </div>
            <div className="cost-wrapper">
              <h4>{COST_ICON}</h4>
              <h5>{costForTwoMessage}</h5>
            </div>
          </div>
        </div>
        <div className="rd-right">
          <h5>★{" " + avgRating}</h5>
          <h6>{totalRatingsString}</h6>
        </div>
      </div>

      {/** categories accordians */}

      <div className="acc-container">
        {itemCategories.map((category, index) => (
          <MenuCategory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={false}
            // showItems={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

      {/** <MenuCategory/> is a controlled component, it is being controlled by the <RestaurentMenu/> */}

      {/* <div className="resMenu">
          <h2>Recommended {"(" + itemCards.length + ")"}</h2>
          <ul>
            {itemCards.map((item) => (
              
              <li key={item?.card?.info?.id}>
                <div className="dishCard">
                  <div className="dc-left">
                    <h4>{item?.card?.info?.name}</h4>
                    <h5>₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</h5>
                    <h6>{item?.card?.info?.description}</h6>
                  </div>
                  <div className="dc-right">
                    <div className="dishImageWrapper">
                        <img className="dishimg" src={DISH_IMAGE + item?.card?.info?.imageId} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
    </div>
  );
};

export default RestaurentMenu;

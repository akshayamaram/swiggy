
import { RES_IMG_CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  // console.log(resData);

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } = resData?.info;

  return (
    <div className="res-card" data-testid= "res-card">
      <img className="res-img" src={RES_IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h4 className="rating">
        <span className="star">★</span> {avgRating} <span className="eta">. {costForTwo} </span>
      </h4>
      <h4 className="cuisine">{cuisines.join(", ")} </h4>
      {/* <h4 className="cuisine">
        {cuisines[0] + ", " + cuisines[1] + ", " + "..."}
      </h4> */}
      <h4 className="address">{areaName}</h4>
    </div>
  );
};

export default RestaurentCard;

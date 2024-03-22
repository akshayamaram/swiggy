import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SEARCH_ICON } from "../utils/constants";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";

const Hero = () => {
  /* useState() Hook for restaurant data */
  const [listOFRestaurents, setListOfRestaurents] = useState([]);

  const [filteredRestaurantsByName, setFilteredRestaurantsByName] = useState([]);

  const [filteredListByRating, setFilteredListByRating] = useState([]);

  /* whenever state variables(useState, useEffect) update , react triggers a reconciliation cycle(re-renders the component) */
  const [searchText, setSearchText] = useState("");

  // console.log(listOFRestaurents);

  /* useEffect() {takes two args: 1. call back func, 2. dependency array}  Hook for Fetching Data From API */
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    // const data = await fetch(
    //   "https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D16.3272642%26lng%3D80.439145%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3090883&lng=80.44249860000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    /**
     * ! swiggy keeps on changing their api, so make sure to check it twice  before using this code
     * ? use cors proxy , otherwise u will not get the correct response back (here using cors plugin chrome extension but only works with locally)
     * * use https://thingproxy.freeboard.io/fetch/
     */

    const jsonData = await data.json();

    // console.log(jsonData);

    /* optional chaining */
    const restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurents(restaurantData);
    setFilteredRestaurantsByName(restaurantData);
    setFilteredListByRating(restaurantData);
  };


  const onlineStaus = useUserStatus();  /** using our own custom hook for user status*/
  if(onlineStaus === false) {
    return (
      <h1>Looks like u are offline 🚫 ! Please check ur internet connection 🌐</h1>
    )
  }

 
  /* conditional rendering */
  // if(listOFRestaurents.length === 0) {
  //   return <Shimmer/>
  // }

  /* using the above conditional rendering as terneray operator */
  return listOFRestaurents.length === 0 ? (
    <Shimmer/>
    
  ) : (
    <div className="hero">
      <div className="search">
        <input
          type="text"
          data-testid = "search-input"
          placeholder="Search for restaurents and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-logo"
          data-testid = "search-btn"
          onClick={() => {
            /* filter the restaurents by name */
            // console.log(searchText);
            const filteredRestaurantsByName = listOFRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurantsByName(filteredRestaurantsByName);
          }}
        >
          {SEARCH_ICON}
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          data-testid = "filter-btn"
          onClick={() => {
            /* filter the restaurents by rating */
            const filteredListByRating = listOFRestaurents.filter(
              (e) => e.info.avgRating > 4.2
            );
            setFilteredRestaurantsByName(filteredListByRating);
            console.log(filteredListByRating);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantsByName.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurant/" + restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />   {/** here we are passing data as props */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { RES_MENU_API } from "../utils/constants";

/** This is our custom hook */

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3090883&lng=80.44249860000001&restaurantId=697204&catalog_qa=undefined&submitAction=ENTER"
    // );

    const data = await fetch(RES_MENU_API + resId);
    /**
     * ?  use cors proxy , otherwise u will not get the correct response back (here using cors plugin chrome extension but only works with locally)
     */

    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurentMenu;

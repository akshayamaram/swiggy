import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuCategory = ({data}) => {
    // console.log(data);
    // const handleClick = () => {
    //   setShowIndex();
    // }

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
      setShowItems(!showItems);
    };

    return (
      <div>
        {/** Accordian header */}
        <div className="acc-header-wrapper">
          <div className="acc-header" onClick={handleClick}>
            <div className="acc-title">
              <h2>{data.title + " " + "(" + data.itemCards.length + ")"}</h2>
            </div>
            <div className="acc-downarrow">▼</div>
          </div>

          {/** Accordian body */}

          {showItems && <MenuItemList items={data.itemCards} />}
        </div>
      </div>
    );
}

export default MenuCategory;
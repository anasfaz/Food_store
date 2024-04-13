import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItemIndexes, setShowItemIndexes] = useState([]);


  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(showItemIndexes, "res");
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(showItemIndexes, "index");
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //  refactor later array :index key change to card title is the key 
  if (showItemIndexes.length === 0 && categories.length > 0) {
    const initialShowItemIndices = Array(categories.length).fill(true);
    setShowItemIndexes(initialShowItemIndices);
  }
  const toggleCategory = (index) => {
    const updatedShowItemIndices = [...showItemIndexes];
    updatedShowItemIndices[index] = !updatedShowItemIndices[index];
    setShowItemIndexes(updatedShowItemIndices);
  };
  return (
    <div className="mx-[calc(10%+50px)] menu">
      <div className="pt-5 ">
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      {/* card restaurant */}
      <div>
        <div></div>
      </div>
      <h4 className="text-sm font-semibold py-1">{cuisines}</h4>
      <h3 className="text-sm font-semibold py-1">{costForTwoMessage}</h3>
      <h2>Menu</h2>

      <div>
        <hr className="my-4" />
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItem={showItemIndexes[index]}
            setItemsIndex={() => toggleCategory(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

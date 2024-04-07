import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo, "res");
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR, "name");
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories, "categories");
  // console.info(itemCards,'itemcard');
  return (
    <div className="mx-[calc(20%+50px)] menu">
      <div className="pt-5 ">
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      {/* card resturant */}
      <div>
        <div></div>
      </div>
      <h4>{cuisines}</h4>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>

      <div>
        <hr className="my-4" />
      {categories.map((category) => (
        <RestaurantCategory data={ category?.card?.card} />
      ))}
      </div>
      
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"RS:"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

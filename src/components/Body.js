import RestaurantCard from "./RestaurantCard";
import { useState, useEffect,useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CategoryCarousal from "./CategoryCarousal";
import useOnScreen from "../utils/useOnScreen";
const Body = () => {
  //Local  state Variable by react - Super powered variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryImage, setCategoryImage] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  // mobile width api call url "https://www.swiggy.com/mapi/homepage/getCards?lat=10.7837491&lng=76.0076374"
  // web width api "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.7837491&lng=76.0076374&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  const fetchData = async () => {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await Data.json();

    const { data } = json;

    console.log(data, "json");
    setListOfRestaurants(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCategoryImage(data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if (onlineStatus === false) {
    return <h1>Your internet connection lost please check.......</h1>;
  }

  if (!listOfRestaurants || listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="">
        <CategoryCarousal ImageData={categoryImage} />
      </div>
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-2 rounded-lg p-2  border-green-300"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-md
            "
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFiltered(filteredRes);

            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 filter-btn rounded-md bg-orange-300"
            onClick={() => {
              //Filter Logic here
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4.1;
              });
              console.log(filteredList);
              setFiltered(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="mx-[calc(10%+30px)]  ">
        <div className="grid grid-cols-[repeat(4,1fr)]  gap-5 mx-4 my-8 p-0">
          {filtered.map((restaurant, index) => {
          
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard  resData={restaurant}  />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  console.log("render UI");
  //Local  state Variable by react - Super powered variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, SetSearchText] = useState("");

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
      data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic here
            setListOfRestaurants();

            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./ResturantCard";
import {useState,useEffect} from "react"
import RES_LIST from "../utils/mockData";
const Body = () => {

    //Local  state Variable by react - Super powered variable
    const [listOfRestaurants,setListOfRestaurants]=useState([])
    //normal js variable

  useEffect(() => {
   fetchData()
 },[])
 const postData = {
  lat: 10.7837491,
  lng: 76.0076374,
  nextOffset: "COVCELQ4KICQ3ZDemazzHDCnEzgE",
  widgetOffset: {
    collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
    inlineFacetFilter: "",
    restaurantCountWidget: ""
  },
  filters: {},
  seoParams: {
    seoUrl: "https://www.swiggy.com/",
    pageType: "FOOD_HOMEPAGE",
    apiName: "FoodHomePage"
  },
  page_type: "DESKTOP_WEB_LISTING",
  _csrf: "ZhScg6fUfcEA-Oz1a2ekdeeTCU8a8umAZL1k4DG0"
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };
  const fetchData = async () => {
    const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await Data.json();
    
   
    console.log(json, 'json');
    setListOfRestaurants(data.cards.card)
  }
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
              //Filter Logic here
              setListOfRestaurants()
              
            const filteredList = listOfRestaurants.filter((res) => {
           return   res.info.avgRating >4;
            });
              setListOfRestaurants(filteredList)
              
          }}
              >

          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          console.log(restaurant,'res');
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

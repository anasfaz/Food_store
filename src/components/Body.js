import RestaurantCard from "./ResturantCard";
import RES_LIST from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {RES_LIST.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} resData={restaurant } />;
          })}
        </div>
      </div>
    );
};
  
export default Body;
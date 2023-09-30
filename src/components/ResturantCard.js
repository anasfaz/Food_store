import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#dff0de",
};

const RestaurantCard = (props) => {
  console.log('card ui');
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="card-img" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

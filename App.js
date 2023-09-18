import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo-img"
          src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>contact</li>
          <li>About as</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#dff0de",
};
const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="card-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData?.cloudinaryImageId}
        alt=""
      />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(",")} </h4>
      <h4>{resData?.avgRating}</h4>
      <h4>{resData?.deliveryTime}</h4>
      <h4>{resData?.costForTwo}</h4>
    </div>
  );
};

const resData = {
  id: "536136",
  name: "Planet Cafe",
  cloudinaryImageId: "njubpnicjyizmdwv44ar",
  locality: "Thrissur - Kunnamkulam Rd,",
  areaName: "Edappal Locality",
  costForTwo: "₹249 for two",
  cuisines: ["Beverages", "Desserts", "Fast Food"],
  avgRating: 3.5,
  feeDetails: {
    restaurantId: "536136",
    fees: [
      {
        name: "BASE_DISTANCE",
        fee: 700,
      },
      {
        name: "BASE_TIME",
      },
      {
        name: "ANCILLARY_SURGE_FEE",
      },
    ],
    totalFee: 700,
  },
  parentId: "9095",
  avgRatingString: "3.5",
  totalRatingsString: "20+",
  promoted: true,
  adTrackingId:
    "cid=8238341~p=1~eid=0000018a-8f2a-c8d9-2da4-9589001a0120~srvts=1694619060441~45995",
  sla: {
    deliveryTime: 17,
    lastMileTravel: 0.9,
    serviceability: "SERVICEABLE",
    slaString: "17 mins",
    lastMileTravelString: "0.9 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2023-09-13 22:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  aggregatedDiscountInfoV2: {},
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textExtendedBadges: {},
      textBased: {},
    },
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard resData={resData} />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

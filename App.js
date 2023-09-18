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
  console.log(props, "props-----");
  const { resData } = props;
  console.log(resData?.info, "resdarta");

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
      <img
        className="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")} </h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// const resData = {
//   id: "536136",
//   name: "Planet Cafe",
//   cloudinaryImageId: "njubpnicjyizmdwv44ar",
//   locality: "Thrissur - Kunnamkulam Rd,",
//   areaName: "Edappal Locality",
//   costForTwo: "₹249 for two",
//   cuisines: ["Beverages", "Desserts", "Fast Food"],
//   avgRating: 3.5,
//   feeDetails: {
//     restaurantId: "536136",
//     fees: [
//       {
//         name: "BASE_DISTANCE",
//         fee: 700,
//       },
//       {
//         name: "BASE_TIME",
//       },
//       {
//         name: "ANCILLARY_SURGE_FEE",
//       },
//     ],
//     totalFee: 700,
//   },
//   parentId: "9095",
//   avgRatingString: "3.5",
//   totalRatingsString: "20+",
//   promoted: true,
//   adTrackingId:
//     "cid=8238341~p=1~eid=0000018a-8f2a-c8d9-2da4-9589001a0120~srvts=1694619060441~45995",
//   sla: {
//     deliveryTime: 17,
//     lastMileTravel: 0.9,
//     serviceability: "SERVICEABLE",
//     slaString: "17 mins",
//     lastMileTravelString: "0.9 km",
//     iconType: "ICON_TYPE_EMPTY",
//   },
//   availability: {
//     nextCloseTime: "2023-09-13 22:00:00",
//     opened: true,
//   },
//   badges: {},
//   isOpen: true,
//   aggregatedDiscountInfoV2: {},
//   type: "F",
//   badgesV2: {
//     entityBadges: {
//       imageBased: {},
//       textExtendedBadges: {},
//       textBased: {},
//     },
//   },
//   differentiatedUi: {
//     displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     differentiatedUiMediaDetails: {
//       mediaType: "ADS_MEDIA_ENUM_IMAGE",
//       lottie: {},
//       video: {},
//     },
//   },
//   reviewsSummary: {},
//   displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   restaurantOfferPresentationInfo: {},
// };

const resList = [
  {
    info: {
      id: "536140",
      name: "Chicking",
      cloudinaryImageId: "vioc3sjtwganuterpuxx",
      locality: "Vattamkulam",
      areaName: "Edappal",
      costForTwo: "₹249 for two",
      cuisines: ["Burgers", "Pizzas"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "536140",
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
      parentId: "251",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/chicking-vattamkulam-edappal-malappuram-536140",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "582115",
      name: "Food City",
      cloudinaryImageId: "ixtyibvo2iquokususgi",
      locality: "Edappal",
      areaName: "Changaramkulam",
      costForTwo: "₹199 for two",
      cuisines: ["Chinese", "North Indian", "Burgers", "Ice Cream", "Biryani"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "582115",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "81101",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-city-edappal-changaramkulam-malappuram-582115",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "598176",
      name: "Fruit Bae",
      cloudinaryImageId: "ibjua3lazqdspy5oppke",
      locality: "Vattamkulam",
      areaName: "Edappal Locality",
      costForTwo: "₹199 for two",
      cuisines: ["Beverages", "Desserts", "Ice Cream"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "598176",
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
      parentId: "19982",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/fruit-bae-vattamkulam-edappal-locality-malappuram-598176",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "536129",
      name: "Al-Baik",
      cloudinaryImageId: "vnoltqyuzbjvuf9g2rg5",
      locality: "Ponnani Road\n",
      areaName: "Edappal Locality",
      costForTwo: "₹249 for two",
      cuisines: ["Burgers", "Pizzas"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "536129",
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
      parentId: "29746",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/al-baik-ponnani-road-edappal-locality-malappuram-536129",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "594987",
      name: "Bbq Restaurants",
      cloudinaryImageId: "ntdonidyhnskugyzdum3",
      locality: "Edappal",
      areaName: "Changaramkulam",
      costForTwo: "₹299 for two",
      cuisines: ["Chinese", "North Indian", "Burgers", "Ice Cream"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "594987",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "355901",
      avgRatingString: "3.3",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bbq-restaurants-edappal-changaramkulam-malappuram-594987",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "721756",
      name: "Bubblee U",
      cloudinaryImageId: "9dd207369b13b0f712f75ae0a0ce3bb3",
      locality: "2Nd Flour",
      areaName: "Edappal",
      costForTwo: "₹200 for two",
      cuisines: ["Juices"],
      avgRating: 4.7,
      feeDetails: {
        restaurantId: "721756",
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
      parentId: "430451",
      avgRatingString: "4.7",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bubblee-u-2nd-flour-edappal-malappuram-721756",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "750668",
      name: "French Turks",
      cloudinaryImageId: "70be2869d95a57a46ab18866393516d5",
      locality: "Edappal Hospital Road",
      areaName: "Edappal",
      costForTwo: "₹299 for two",
      cuisines: ["Indian", "Beverages", "Fast Food"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "750668",
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
      parentId: "444509",
      avgRatingString: "4.6",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/french-turks-hospital-road-edappal-malappuram-750668",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "582116",
      name: "Boxo Fiz",
      cloudinaryImageId: "lifvyuipdiilmsvwhi14",
      locality: "Calicut Road \n",
      areaName: "Edappal",
      costForTwo: "₹299 for two",
      cuisines: ["Chinese", "North Indian", "Ice Cream", "Biryani"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "582116",
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
      parentId: "455939",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/boxo-fiz-calicut-road-edappal-malappuram-582116",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "598185",
      name: "Oven Restaurant",
      cloudinaryImageId: "ijbtetmc3rhdh3fbazef",
      locality: "Changaramkulam",
      areaName: "Edappal",
      costForTwo: "₹199 for two",
      cuisines: ["Arabian", "Biryani", "North Indian"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "598185",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2400,
      },
      parentId: "357445",
      avgRatingString: "3.6",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-restaurant-changaramkulam-edappal-malappuram-598185",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "601212",
      name: "Mexican Shawarma (Nila Bakery And Cool Bar)",
      cloudinaryImageId: "xwpvzp9e1skynd9gtsfa",
      locality: "Vattamkulam",
      areaName: "Edappal Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "601212",
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
      parentId: "358730",
      avgRatingString: "3.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "12 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mexican-shawarma-nila-bakery-and-cool-bar-vattamkulam-edappal-locality-malappuram-601212",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "536143",
      name: "Charcoal Bay",
      cloudinaryImageId: "hpgsltc4iw0i7ilqsojy",
      locality: "Kunnamkulam Road",
      areaName: "Edappal Locality",
      costForTwo: "₹249 for two",
      cuisines: ["Chinese"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "536143",
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
      parentId: "314434",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/charcoal-bay-kunnamkulam-road-edappal-locality-malappuram-536143",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "613927",
      name: "Food Wagon",
      cloudinaryImageId: "dd48unpj3bn31akq9p9n",
      locality: "Ponnani Road\n",
      areaName: "Edappal",
      costForTwo: "₹300 for two",
      cuisines: ["Juices", "Beverages", "Chinese"],
      avgRating: 2.5,
      feeDetails: {
        restaurantId: "613927",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4400,
      },
      parentId: "82125",
      avgRatingString: "2.5",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 9,
        serviceability: "SERVICEABLE",
        slaString: "39 mins",
        lastMileTravelString: "9.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-18 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/food-wagon-ponnani-road-edappal-malappuram-613927",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "627589",
      name: "Tawook Restaurant",
      cloudinaryImageId: "psia9rjm7pjigqz4npxr",
      locality: "Naduvattam",
      areaName: "Edappal Locality",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Biryani", "Kerala", "Beverages"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "627589",
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
      parentId: "374033",
      avgRatingString: "3.5",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 6 pm, today",
      },
      badges: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/tawook-restaurant-naduvattam-edappal-locality-malappuram-627589",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "738476",
      name: "Aadhi Bhavan",
      cloudinaryImageId: "ad15b80d338b439a3ad8438d8370eebe",
      locality: "Pattambi Road",
      areaName: "Edappal",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "738476",
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
      parentId: "438553",
      avgRatingString: "4.2",
      totalRatingsString: "5",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11 am, tomorrow",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/aadhi-bhavan-pattambi-road-edappal-malappuram-738476",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "582124",
      name: "Franky'S",
      cloudinaryImageId: "oesullsfalx726whb2wd",
      locality: "Emitats Mall\n",
      areaName: "Edappal Locality",
      costForTwo: "₹360 for two",
      cuisines: ["Fast Food", "Chinese", "Pastas", "Snacks"],
      avgRating: 3.4,
      feeDetails: {
        restaurantId: "582124",
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
      parentId: "348500",
      avgRatingString: "3.4",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextOpenTimeMessage: "Opens next at 11:10 am, tomorrow",
      },
      badges: {},
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {
      context: "seo-data-700ad4cd-311d-4122-8988-6287a0417f38",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/frankys-emitats-mall-edappal-locality-malappuram-582124",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant } />;
        })}
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

import React, { Children, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import Cart from "./components/Cart";
const About = lazy(() => import("./components/About"));
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

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

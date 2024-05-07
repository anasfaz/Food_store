import { useEffect, useState } from "react";
import useDebounce from "../utils/useDebounce";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import ItemList from "./ItemList";
import { SearchItemList } from "./SearchItemList";
const imageUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";
const Search = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery, 1000);
  const [searchParams, setSearchParam] = useSearchParams();
  const [itemsList, setItemList] = useState([]);
  const [show, setShow] = useState(false)
  useEffect(() => {
    searchFetch();
  }, [debouncedValue, itemsList]);

  const searchFetch = async () => {
    const endpoint = "https://www.swiggy.com/dapi/restaurants/search/suggest";
    const lat = 9.938136399999992;
    const lng = 76.3217758;

    // Construct the full URL with parameters
    const url = `${endpoint}?lat=${lat}&lng=${lng}&str=${debouncedValue}`;

    // Make the fetch request
    const response = await fetch(url);

    const { data } = await response.json();
    console.log(data, "responser");
    setSearchList(data?.suggestions);
  };
  // const fetchData = async () => {
  //   const url = "https://www.swiggy.com/dapi/restaurants/search/v3";
  //   const params = new URLSearchParams({
  //     lat: 9.938136399999992,
  //     lng: 76.3217758,
  //     str: "Biryani",
  //     trackingId: "null",
  //     submitAction: "SUGGESTION",
  //     queryUniqueId: "6c64b17a-4a0a-bede-365c-32680547bade",
  //     metaData: JSON.stringify({
  //       type: "DISH",
  //       data: {
  //         vegIdentifier: "NA",
  //         cloudinaryId:
  //           "FOOD_CATALOG/IMAGES/CMS/2024/4/5/c4486c61-f69f-40f2-8c79-14bc39c7a694_d3a3e242-7c10-4ec6-87ce-3d3133f87e20.JPG",
  //         dishFamilyId: "846613",
  //         dishFamilyIds: ["846613"],
  //       },
  //       businessCategory: "SWIGGY_FOOD",
  //       displayLabel: "Dish",
  //     }),
  //   });

  //   try {
  //     const response = await fetch(`${url}?${params}`);
  //     console.log(response, "res");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //     // Process the data further as needed
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const queryFetch = async (queryStr) => {
    // Define a function to generate a unique queryUniqueId
    function generateQueryUniqueId() {
      // Generate a UUID
      const uuid = () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            const r = (Math.random() * 16) | 0,
              v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }
        );
      };

      // Generate a timestamp
      const timestamp = new Date().getTime();

      // Combine UUID and timestamp to create a unique identifier
      return `${uuid()}-${timestamp}`;
    }

    // Example usage
    const queryUniqueId = generateQueryUniqueId();
    console.log(queryUniqueId); // Output will be something like "229edc4f-f1c5-932d-c923-754c4d368a17-1644600792476"

    // Define your dynamic values
    const lat = 9.938136399999992;
    const lng = 76.3217758;
    const str = `${queryStr}`;
    // Generate a unique queryUniqueId

    // Construct the URL with dynamic values
    const url = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${encodeURIComponent(
      str
    )}&trackingId=null&submitAction=SUGGESTION&queryUniqueId=${queryUniqueId}&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A4761%2C%22primaryRestaurantId%22%3A52574%2C%22cloudinaryId%22%3A%22ufoidiletnquihcuwrnh%22%2C%22brandId%22%3A4761%2C%22dishFamilyId%22%3A%22846718%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D`;

    // Perform the fetch request
    const response = await fetch(url);

    console.log(response, "res");

    const { data } = await response.json();
    console.log(
      data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card
        .restaurants,
      "data"
    );
    setItemList(
      data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card
        .restaurants
    );
  };
  const handleOnSearch = (event) => {
    setSearchQuery(event.target.value)
    setShow(false)
  }

  const handleItemClick = (item) => {
    console.log(item);
    setSearchParam({ query: `${item?.text}` });
    const queryValue = searchParams.get("query");
    console.log(queryValue);
    queryFetch(queryValue);
    setShow(true)
  };
  return (
    <div>
      <div className="flex justify-center mt-8">
        <input
          onChange={(e) => handleOnSearch(e)}
          value={searchQuery}
          className="border-2 border-gray-500 w-6/12 p-2"
          type="text"
        />
      </div>
      <div className="flex justify-center  pt-5">
        <div className="w-6/12">
          {show == false ? (
            <div>
              {searchList &&
                searchList.map((item, index) => {
                  return (
                    <div
                      onClick={() => handleItemClick(item)}
                      key={index}
                      className="flex items-center hover:bg-slate-100 p-4"
                    >
                      <div className=" ">
                        <img
                          className="rounded-lg"
                          src={imageUrl + item.cloudinaryId}
                          alt=""
                        />
                      </div>
                      <div className="ml-2">
                        <h5 className="font-Grote font-medium">{item.text}</h5>
                        <h6 className="font-normal">{item.subCategory}</h6>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="grid grid-cols-2 bg-slate-100 pt-5 gap-3">
              {itemsList.map((item, index) => {
                console.log(item);
                return (
                
                   <SearchItemList key={index} data={item} />
                  
                );
              })}
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Search;

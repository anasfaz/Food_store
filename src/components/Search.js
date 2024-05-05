import { useEffect, useState } from "react";
import useDebounce from "../utils/useDebounce";

const Search = () => {
  const [searchList, setSearchList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery, 2000);
  useEffect(() => {
    searchFetch();
  }, [debouncedValue]);

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
    setSearchList(data);
  };

  return (
    <div className="flex justify-center mt-8">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className="border-2 border-gray-500 w-6/12 p-2"
        type="text"
      />
    </div>
  );
};

export default Search;

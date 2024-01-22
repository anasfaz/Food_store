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
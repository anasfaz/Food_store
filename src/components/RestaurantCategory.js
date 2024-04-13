import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setItemsIndex }) => {
  const handleClick = () => {
    console.log("onclick ", setItemsIndex);
    console.log(showItem, "showitem");
    setItemsIndex();
  };
  return (
    <div className="">
      {/* heder */}
      <div className="flex justify-between bg-white mt-6 mb-4 mx-4   ">
        <span className="font-Grote text-lg font-bold">
          {data?.title} ({data.itemCards.length})
        </span>
        <button
          className={`w-8 h-8 ${showItem && "rotate-180"} cursor-pointer `}
          onClick={handleClick}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="arrow"
            >
              <path
                fill="#134563"
                d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                transform="translate(237 335)"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {/* acordian */}

      {showItem && <ItemList items={data?.itemCards} />}
      <div className=" h-[16px] border-b-[16px] border-b-[rgba(2,6,12,0.0509803922)] border-solid "></div>
    </div>
  );
};

export default RestaurantCategory;

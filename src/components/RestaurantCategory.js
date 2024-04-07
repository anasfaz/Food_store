import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

  return (
    <div>
      {/* heder */}
      <div className="flex justify-between bg-white mt-6 mb-4 mx-4  ">
        <span className="font-Grote text-lg font-bold">{data?.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
      </div>
      {/* acordian */}
      <ItemList items={data?.itemCards} />
      <div className=" h-[16px] border-b-[16px] border-b-[rgba(2,6,12,0.0509803922)] border-solid "></div>
    </div>
  );
};

export default RestaurantCategory;

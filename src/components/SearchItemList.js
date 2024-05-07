import React from "react";
const imagUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";
export const SearchItemList = ({ data }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    data.info;

  return (
    
      <div className="flex pl-2 m-2 bg-white h-36 items-center rounded-lg">
        <div>
          <img className="w-20 h-24 object-cover rounded-lg" src={imagUrl + cloudinaryImageId} alt="" />
        </div>

        <div className="pl-2 pt-2">
          <div>
            <h3 className="font-Grote font-semibold">{name}</h3>
          </div>
          <div className="font-mono font-light text-gray-700">
            <span>{avgRating}</span>. <span>{sla.slaString}</span>
            <span>{costForTwo}</span>
          </div>
          <div className="font-mono font-thin text-gray-500 text-sm">{cuisines}</div>
          </div>
          
      </div>
   
  );
};

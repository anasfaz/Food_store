import React from "react";
import { CDN_URL } from "../utils/constant";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  //console.log(items, "items");
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="px-6 pt-0 overflow-hidden   ">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between text-left border-b-2 border-gray-200 "
        >
          <div className="w-9/12 h-auto">
            <span>
              {item.card.info.isVeg == 1 ? (
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                  alt="vegetarian-food-symbol"
                />
              ) : (
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png"
                  alt="non-vegetarian-food-symbol"
                />
              )}
            </span>
            <p className="font-semibold font-Grote text-lg">
              {item.card.info.name}
            </p>
            <p className="font-semibold">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="break-words">{item.card.info.description}</p>
          </div>

          <div className=" flex justify-center ">
            <button
              onClick={()=>handleAddCart(item)}
              className="p-2 bg-white border-green-500 border-2 text-green-600 rounded-md  w-32 absolute mt-28 "
            >
              Add +
            </button>
            <img
              className="w-[156px] h-[144px] object-cover rounded-md m-2"
              src={CDN_URL + item.card.info.imageId}
              alt="item image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

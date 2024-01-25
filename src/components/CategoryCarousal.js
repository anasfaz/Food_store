import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CDN_URL, CDN_URL_CATEGORY } from "../utils/constant";

function CategoryCarousal(props) {
  const sliderRef = useRef(null);
  const scrollAmount = 500;
  console.log(props, "categoryImage");
  const { ImageData } = props;

  return (
    <>
      <div className="mx-[calc(10%+34px)] p-5">
        <div
          className="m-1 w-full flex justify-between
                        overflow-hidden relative "
        >
          <h2 className="text-2xl font-bold ">What's on your mind?</h2>
          <div className="flex ">
            <button
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount;

                console.log(container.scrollLeft);
              }}
            >
              <p>⬅️</p>
            </button>
            <button
              onClick={() => {
                const container = sliderRef.current;
                console.log(container, "container");
                container.scrollLeft += scrollAmount;
                console.log(container.scrollLeft);
              }}
            >
              <p>➡️</p>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="product-container  flex overflow-x-hidden overflow-y-hidden 
        overflow-scroll scroll-smooth transition duration-300 ease-in-out"
        >
          {ImageData.map((image) => {
            const { id, imageId } = image;
            
            return (
              <img
                key={id}
                className="h-[180px]  w-[144px] min-w-[144px] min-h-[180px] bg-slate-500"
                src={CDN_URL_CATEGORY + imageId}
                alt=""
              />
            );
          })}
          {/* <Link to={''}>

          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CategoryCarousal;

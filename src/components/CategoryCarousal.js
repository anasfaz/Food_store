import React, { useRef } from "react";

function CategoryCarousal() {
  const sliderRef = useRef(null);
  const scrollAmount = 500;

  return (
    <>
      <div
        className=" mx-[calc(10%+34px)] bg-slate-500 w-full flex justify-around 
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
        className="product-container mx-[calc(10%+34px)] flex overflow-x-hidden overflow-y-hidden 
        overflow-scroll scroll-smooth transition duration-300 ease-in-out"
      >
        <div className="h-[180px]  w-[144px] min-w-[144px] min-h-[180px] bg-slate-500">
          1
        </div>
        <div className=" min-w-[144px] min-h-[180px] bg-slate-500">2</div>
        <div className=" min-w-[144px] min-h-[180px] bg-green-300">3</div>
        <div className=" min-w-[144px] min-h-[180px] bg-red-500">4</div>
        <div className=" min-w-[144px] min-h-[180px] bg-orange-500">1</div>
        <div className=" min-w-[144px] min-h-[180px] bg-blue-500">5</div>
        <div className=" min-w-[144px] min-h-[180px] bg-white-500">1</div>
        <div className=" min-w-[144px] min-h-[180px] bg-slate-500">7</div>
        <div className=" min-w-[144px] min-h-[180px] bg-black-500">8</div>
        <div className=" min-w-[144px] min-h-[180px] bg-slate-500">9</div>
        <div className=" min-w-[144px] min-h-[180px] bg-yellow-500">10</div>
        <div className=" min-w-[144px] min-h-[180px] bg-blue-500">5</div>
        <div className=" min-w-[144px] min-h-[180px] bg-white-500">1</div>
        <div className=" min-w-[144px] min-h-[180px] bg-slate-500">7</div>
        <div className=" min-w-[144px] min-h-[180px] bg-black-500">8</div>
        <div className=" min-w-[144px] min-h-[180px] bg-slate-500">9</div>
        <div className=" min-w-[144px] min-h-[180px] bg-yellow-500">10</div>
      </div>
    </>
  );
}

export default CategoryCarousal;

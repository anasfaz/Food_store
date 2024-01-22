import React, { useRef } from "react";

function CategoryCarousal() {
    let box = useRef(null)
    // const btnPressNext = () => {
    //     let width = box.clientWidth || box.getBoundingClientRect().width
    //     let box.scrollLeft=
    // }
    function handleScrollToFirstCat() {
        
    }
  return (
    <>
      <div
        className="bg-slate-500 w-full flex justify-around 
    overflow-hidden relative "
      >
        <h2 className="text-2xl font-bold ">What's on your mind?</h2>
        <div className="flex ">
          <button>
            <p>⬅️</p>
          </button>
          <button>
            <p>➡️</p>
          </button>
        </div>
      </div>
      <div ref={box} className="flex overflow-x-hidden scroll-smooth">
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
        <div className="h-[180px] w-[144px] bg-slate-500">1</div>
      </div>
    </>
  );
}

export default CategoryCarousal;

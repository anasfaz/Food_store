import { Fragment } from "react";

const WithAdOrOffer = (SearchItemList) => {

    return (props) => {
        //     position: relative;
    //top: 55px;
        //left: 10px;

        ///------
        //    position: absolute;
   // z-index: 10;
    /* top: 100px; */
   // margin-top: 99px;
    //text-align: center;
   // margin-left: 20px;

        console.log(props?.data.info);
        return (
            <div className="flex h-auto">
                {props?.data.info.promoted && <span className="top-14 left-3 bg-[#3e4152] text-[hsla(0,0%,100%,0.9)] opacity-90 relative rounded-sm ">AD</span>}
                {/* {props?.data?.info?.aggregatedDiscountInfoV3?.header && <div className="z-10 mt-24 ml-6 text-center w-16 ">
                    <div className="bg-white rounded-md text-orange-500">
                        <div>
                            {props?.data.info.aggregatedDiscountInfoV3.header}
                        </div>
                        <div>
                            {props?.data.info.aggregatedDiscountInfoV3.header}
                        </div>
                    </div>
                </div>} */}
                <SearchItemList {...props} />
            </div>
        )
    }
}

export default WithAdOrOffer;
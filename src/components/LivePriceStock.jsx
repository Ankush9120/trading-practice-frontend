import React from "react";

const LivePriceStock = (props) => {
  return (
    <div className={`liveAction myShadow p-2 px-3 grid place-items-center gap-1 rounded-2xl ${props.high || props.low}`}>
      <div className="flex items-center gap-4">
        <div className="companyLogo h-6 w-6 rounded-full overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/040/306/original/paytm-logo-icon-free-vector.jpg"
            className=" object-contain scale-125"
          />
        </div>
      </div>
      <div className="text-sky-400 inline p-0.5 px-2 rounded-md w-min whitespace-nowrap">
        Paytm Pvt Ltd
      </div>
      <p className=" whitespace-nowrap">New High</p>

      <span className="ltp">{props.ltp}</span>
    </div>
  );
};

export default LivePriceStock;

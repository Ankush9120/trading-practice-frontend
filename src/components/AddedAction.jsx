import React from "react";

const AddedAction = (props) => {
  return (
    <div className="addedAction grid place-items-center gap-2 myShadow p-2 rounded-2xl text-xs">
      <div className="flex items-center gap-4">
        <div className="companyLogo h-6 w-6 rounded-full overflow-hidden">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/040/306/original/paytm-logo-icon-free-vector.jpg"
            className=" object-contain scale-125"
          />
        </div>
      </div>
      <div className="stockName">Paytm Pvt Ltd.</div>

      <div className="ltp">451.76</div>
      <div className={`change text-center ${props.high || props.low}`}>
        14.5%
      </div>
    </div>
  );
};

export default AddedAction;

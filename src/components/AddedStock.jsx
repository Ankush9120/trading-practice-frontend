import React from "react";
import Graph from "./Graph";
import IntraGraph from "./IntraGraph";
import { useDispatch, useSelector } from "react-redux";
import { tradeBoxToggle } from "../store/slices/tradeBoxSlice";

const AddedStock = ({ data, value }) => {
  const dispatch = useDispatch();

  const toggleTradeBox = () => {
    dispatch(tradeBoxToggle());
  };

  const isIntraMode = useSelector((state) => {
    return state.intraMode;
  });

  return (
    <div className={`addedStock relative rounded-2xl px-2 ${value}`}>
      <div
        onClick={toggleTradeBox}
        className="addedStockInside grid place-items-center"
      >
        <div className="flex items-center gap-4">
          <div className="companyLogo h-8 w-8 rounded-full overflow-hidden">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/040/306/original/paytm-logo-icon-free-vector.jpg"
              className=" object-contain scale-125"
            />
          </div>
        </div>
        <div className="grid gap-1 place-items-center">
          <div className="stockName">{data.stockName}</div>

          {isIntraMode ? <IntraGraph /> : <Graph />}
        </div>

        <div className="stockData text-center">
          <div className="ltp blink-green">{data.ltp}</div>

          <div className="flex items-center gap-1">
            <div
              className={`text-center ${
                data.change >= 0 ? "text-green-400" : "text-red-500"
              } text-green-400 relative right-1`}
            >
              {data.change}
            </div>
            <div
              className={`change ${
                data.change >= 0 ? "text-green-400" : "text-red-500"
              } text-center`}
            >
              ( {((data.change / data.ltp) * 100).toFixed(2)}% )
            </div>
          </div>
        </div>

        {/* Trade Box  */}
      </div>
    </div>
  );
};

export default AddedStock;

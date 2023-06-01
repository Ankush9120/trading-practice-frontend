import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tradeBoxToggle } from "../store/slices/tradeBoxSlice";
import Graph from "./Graph";
import IntraGraph from "./IntraGraph";

const TradeBox = () => {
  const dispatch = useDispatch();

  const isIntraMode = useSelector((state) => {
    return state.intraMode;
  });

  const toggleTradeBox = () => {
    dispatch(tradeBoxToggle());
  };
  return (
    <>
      <div className="tradeBox col-span-3 p-4 rounded-3xl myShadow">
        <div className="grid grid-cols-[min-content,1fr,1fr] place-items-center">
          <div className="flex items-center gap-4">
            <div className="companyLogo h-8 w-8 rounded-full overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/040/306/original/paytm-logo-icon-free-vector.jpg"
                className=" object-contain scale-125"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <div className="stockName">Paytm Pvt Ltd.</div>

            {isIntraMode ? <IntraGraph /> : <Graph />}
          </div>

          <div className="stockData text-center">
            <div className="ltp blink-green">145.56</div>

            <div className="flex items-center gap-1">
              <div className="text-center text-green-400 relative right-1">
                145.3
              </div>
              <div className="change text-green-400 text-center">( 14.5% )</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div>
            <div className="myText">Open</div>
            <div>542.65</div>
          </div>
          <div>
            <div className="myText">High</div>
            <div>542.65</div>
          </div>
          <div>
            <div className="myText">Expiry</div>
            <div>15 Dec</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input type="tel" placeholder="quantity" />
          <input type="tel" placeholder="price" />
        </div>

        <div className="flex justify-center gap-4 relative">
          <div className="relative w-full">
            <select>
              <option value="intra">Intraday</option>
              <option value="long">Longterm</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-3 fill-neutral-600 top-1/2 -translate-y-1/2 left-3"
              viewBox="0 0 512 512"
            >
              <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" />
            </svg>
          </div>

          <div className="relative w-full">
            <select>
              <option value="market">Market</option>
              <option value="long">Limit</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-3 fill-neutral-600 top-1/2 -translate-y-1/2 right-3"
              viewBox="0 0 512 512"
            >
              <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" />
            </svg>
          </div>
        </div>

        <div className="flex gap-4">
          <input type="tel" placeholder="stoploss" />
          <input type="tel" placeholder="target" />
        </div>

        <div className="abButtons flex justify-center gap-5">
          <button className="askBtn">
            <span>401</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path d="M384 160a32 32 0 1132-32 32 32 0 01-32 32z" />
            </svg>
          </button>

          <button className="bidBtn">
            <span>700</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                d="M435.25 48h-122.9a14.46 14.46 0 00-10.2 4.2L56.45 297.9a28.85 28.85 0 000 40.7l117 117a28.85 28.85 0 0040.7 0L459.75 210a14.46 14.46 0 004.2-10.2v-123a28.66 28.66 0 00-28.7-28.8z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path d="M384 160a32 32 0 1132-32 32 32 0 01-32 32z" />
            </svg>
          </button>
        </div>
      </div>

      <div onClick={toggleTradeBox} className="blurEverything"></div>
    </>
  );
};

export default TradeBox;

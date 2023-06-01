import React, { useState } from "react";
import Graph from "./Graph";
import IntraGraph from "./IntraGraph";
import { useSelector } from "react-redux";

const AddedOrder = (props) => {
  const [moreData, setMoreData] = useState(false);
  const [handleOrders, setHandleOrders] = useState(0);

  const isIntraMode = useSelector((state) => {
    return state.intraMode;
  });

  return (
    <div>
      <div
        className={`addedOrder myShadow myBorder ${
          (handleOrders != 0 || moreData) && "OrderinIndex"
        }`}
      >
        {/* Shown Data  */}

        <div
          onClick={() => setMoreData(!moreData)}
          className="grid grid-cols-3 gap-3 place-items-center"
        >
          <div className="flex items-center w-full col-span-2 text-left">
            <div className="stock-name ml-3 mr-2">Paytm Pvt Ltd</div>
            <div className="text-sky-400">
              <span className="mr-1">x</span>
              {props.qty}
            </div>
          </div>

          <div className="pnl text-green-400">2324.34</div>

          <div>
            <div className="text">Price</div>
            <div>2342.45</div>
          </div>

          <div>
            <div className="text">Settled Price</div>
            <div>2342.45</div>
          </div>

          <div className="ltp">
            <div className="text">Ltp</div>
            <div>2312.45</div>
          </div>
        </div>

        {/* Hidden Data  */}

        {moreData && (
          <div className="moreData col-span-3 grid grid-cols-3 gap-3  w-full place-items-center">
            <div className="day">08 March</div>

            {isIntraMode ? <IntraGraph /> : <Graph />}

            <div className="time">02:20:55 PM</div>

            <div
              onClick={() => {
                setMoreData(false);
                setHandleOrders(1);
              }}
              className="btn bg-red-600 p-1 px-1.5 rounded-lg cursor-pointer"
            >
              Square
            </div>

            <div
              onClick={() => {
                setMoreData(false);
                setHandleOrders(2);
              }}
              className="btn bg-blue-600 p-1 px-1.5 rounded-lg cursor-pointer"
            >
              Stoploss
            </div>

            <div
              onClick={() => {
                setMoreData(false);
                setHandleOrders(3);
              }}
              className="btn bg-green-600 p-1 px-1.5 rounded-lg cursor-pointer"
            >
              Target
            </div>
          </div>
        )}
      </div>

      {/* Backdrop  */}

      {(moreData || handleOrders != 0) && (
        <div
          onClick={() => {
            setMoreData(false);
            setHandleOrders(0);
          }}
          className="blurEverything"
        ></div>
      )}

      {/* Square Box  */}

      {handleOrders == 1 && (
        <div className="squareBox handleOrders">
          <input type="tel" maxLength={8} placeholder="quantity" />

          <input type="tel" maxLength={8} placeholder="sqr price" />

          <button>Submit</button>
        </div>
      )}

      {handleOrders == 2 && (
        <div className="slBox handleOrders">
          <input type="tel" maxLength={8} placeholder="Quantity" />

          <input type="tel" maxLength={8} placeholder="sl price" />

          <button>Submit</button>
        </div>
      )}

      {handleOrders == 3 && (
        <div className="targetBox handleOrders">
          <input type="tel" maxLength={8} placeholder="Quantity" />

          <input type="tel" maxLength={8} placeholder="target price" />

          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddedOrder;

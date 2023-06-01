import React, { useState } from "react";
import CancelledOrders from "../components/CancelledOrders";
import SucessOrders from "../components/SuccessOrders";
import IntraSwitch from "../components/IntraSwitch";

const History = () => {
  const [orderType, setOrderType] = useState(1);

  return (
    <div
      className="historyBox grow text-white py-4"
      initial={{ translate: "100%" }}
      animate={{ translate: 0 }}
    >
      <div className="historyTableCover myScrollBlurY relative">
        <div className="historyTable px-4 pb-4">
          <table className="w-full relative">
            <thead>
              <tr>
                <th>B/S</th>
                <th className="relative">
                  <select
                    value={orderType}
                    onChange={(e) => setOrderType(e.target.value)}
                  >
                    <option value="1">Success</option>
                    <option value="2">Cancelled</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute h-3 fill-neutral-600 top-1/2 -translate-y-1/2 right-1/2 translate-x-12"
                    viewBox="0 0 512 512"
                  >
                    <path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"></path>
                  </svg>
                </th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>

            {orderType == 1 ? <SucessOrders /> : <CancelledOrders />}
          </table>

        </div>
      </div>

      <IntraSwitch />
    </div>
  );
};

export default History;

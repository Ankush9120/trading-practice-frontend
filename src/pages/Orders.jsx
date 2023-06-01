import React from "react";
import AddedOrder from "../components/AddedOrder";
import IntraSwitch from "../components/IntraSwitch";

const Orders = () => {

  return (
    <div className="orderPage grow text-white relative">
      {/* Overall Panel  */}

      <div className="overallData  mx-4 relative shadow-md grid grid-cols-4 place-items-center text-center rounded-md py-3">
        <div className="chainBox flex justify-between w-4/5 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="chain1"
          >
            <g data-name="Layer 2" id="Layer_2">
              <path d="M18.89,3.69a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-.8.8a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-2.4,2.4,1.41,1.41,2.4-2.4a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l.8-.8a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l2.4-2.4L21.29,1.29Zm-8.6,12.6-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L6.29,16.29,5.21,17.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L8.29,14.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,10.29,16.29Zm8-8-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L14.29,8.29,13.21,9.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L16.29,6.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,18.29,8.29Z" />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="chain2"
          >
            <g data-name="Layer 2" id="Layer_2">
              <path d="M18.89,3.69a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-.8.8a3.82,3.82,0,0,0-4.6.6l-2,2a3.82,3.82,0,0,0-.6,4.6l-2.4,2.4,1.41,1.41,2.4-2.4a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l.8-.8a3.79,3.79,0,0,0,4.6-.6l2-2a3.82,3.82,0,0,0,.6-4.6l2.4-2.4L21.29,1.29Zm-8.6,12.6-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L6.29,16.29,5.21,17.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L8.29,14.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,10.29,16.29Zm8-8-2,2a1.83,1.83,0,0,1-1.67.49l1.08-1.08L14.29,8.29,13.21,9.37a1.83,1.83,0,0,1,.49-1.67l2-2a1.81,1.81,0,0,1,1.67-.49L16.29,6.29l1.41,1.41,1.08-1.08A1.83,1.83,0,0,1,18.29,8.29Z" />
            </g>
          </svg>
        </div>

        <div>
          <div className="text">Margin</div>
          <div>542.65</div>
        </div>
        <div>
          <div className="text">Settled</div>
          <div>542.65</div>
        </div>
        <div>
          <div className="text">P&L</div>
          <div className="text-green-400">542.65</div>
        </div>
        <div>
          <div className="text">Total</div>
          <div>2343.45</div>
        </div>
      </div>

      {/* All Orders  */}

      <div className="addedOrdersCover myScrollBlurY">
        <div className="addedOrders px-4">
          <AddedOrder qty={401} />
          <AddedOrder qty={401} />
          <AddedOrder qty={401} />
          <AddedOrder qty={401} />
          <AddedOrder qty={401} />
        </div>
      </div>

      <IntraSwitch />
    </div>
  );
};

export default Orders;

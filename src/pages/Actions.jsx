import React, { useState } from "react";
import AddedAction from "../components/AddedAction";
import { motion } from "framer-motion";
import LivePriceStock from "../components/LivePriceStock";

const Actions = () => {
  const [lowTab, setLowTab] = useState(false);
  return (
    <div
      className="actionBox grow text-white py-4 gap-3"
      initial={{ translate: "100%" }}
      animate={{ translate: 0 }}
    >
      <header className="font-semibold mx-4">Top 5 Gainers / Loosers</header>

      <div
        className={`highLowTabs mx-4 grid grid-cols-2 place-items-center ${
          lowTab && "lowTabActive"
        }`}
      >
        <div onClick={() => setLowTab(false)} className="tab">
          <div className="text">New High's</div>
          <div className="activeBg"></div>
        </div>
        <div onClick={() => setLowTab(true)} className="tab text">
          New Low's
        </div>
      </div>

      {/* High Stock Lists  */}

      {!lowTab && (
        <section className="addedActions px-4 grid grid-cols-1 gap-2">
          <AddedAction high={"text-green-400"} />
          <AddedAction high={"text-green-400"} />
          <AddedAction high={"text-green-400"} />
          <AddedAction high={"text-green-400"} />
          <AddedAction high={"text-green-400"} />
        </section>
      )}

      {/* Low Stock Lists  */}

      {lowTab && (
        <section className="addedActions px-4 grid grid-cols-1 gap-2">
          <AddedAction low={"text-red-500"} />
          <AddedAction low={"text-red-500"} />
          <AddedAction low={"text-red-500"} />
          <AddedAction low={"text-red-500"} />
        </section>
      )}

      {/* Highs & Lows Live Data   */}
      <header className="flex items-center mx-4 font-semibold">
        Screener <div className="liveDataBlink"></div>
      </header>
      <div className="screenerCover relative myScrollBlurY">
        <section className="text-sm px-4 grid gap-2 pb-8">
          <LivePriceStock ltp={454} high={"modifyHigh"} />
          <LivePriceStock ltp={345} low={"modifyLow"} />
          <LivePriceStock ltp={454} high={"modifyHigh"} />
          <LivePriceStock ltp={345} low={"modifyLow"} />
          <LivePriceStock ltp={454} high={"modifyHigh"} />
          <LivePriceStock ltp={345} low={"modifyLow"} />
        </section>
      </div>
    </div>
  );
};

export default Actions;

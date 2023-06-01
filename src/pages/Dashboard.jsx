import React, { useState } from "react";
import AddedStock from "../components/AddedStock";
import SearchStock from "../components/SearchStock";
import { toast } from "react-toastify";

// hook to dispatch actions
import { useDispatch } from "react-redux";
// importing actions from store
import {
  addWatchlist,
  removeWatchlist,
  renameWatchlist,
} from "../store/slices/watchlistSlice";
// hook to get data from store
import { useSelector } from "react-redux";
import TradeBox from "../components/TradeBox";

const Dashboard = () => {
  const [addStock, setAddStock] = useState(false);
  const [counter, setCounter] = useState(2);

  const [watchlistIndex, setWatchlistIndex] = useState(0);

  const dispatch = useDispatch();

  // Creating New Watchlist
  const addNewWatchlist = () => {
    dispatch(addWatchlist(`List ${counter}`));
    setCounter(counter + 1);
  };

  // Removing Watchlist
  const removeCurrentWatchlist = () => {
    dispatch(removeWatchlist(watchlistIndex));
    setWatchlistIndex(watchlistIndex - 1);
    toast.success("Watchlist Deleted !");
  };

  // Renaming Watchlist
  const renameCurrentWatchlist = (e) => {
    const value = e.target.value;
    dispatch(renameWatchlist([watchlistIndex, value]));
  };

  // Getting Data from store
  const watchlistData = useSelector((state) => {
    return state.watchlist;
  });

  // Toggle TradeBox
  
  const isTradeBox = useSelector((state) => {
    return state.tradeBox;
  });

  return (
    <div className="dashboard text-white gap-5 grow">
      {addStock && <SearchStock closeBox={setAddStock} />}

      {/* Watch List Selection Tab  */}
      <div className="watchTab px-4 pt-4 grid gap-4">
        <header className="font-bold text-xl">Watchlists</header>
        <div className="flex items-center gap-[0.8rem] whitespace-nowrap">
          <ul className="flex gap-3 items-center overflow-x-auto">
            {watchlistData.map((e, i) => (
              <li
                key={i}
                onClick={() => setWatchlistIndex(i)}
                className={`inline p-1.5 px-3 shadow-md rounded-2xl text-md min-h-[36px] ${
                  i === watchlistIndex && "active"
                }`}
              >
                {e}
              </li>
            ))}
          </ul>
          <button
            onClick={() => addNewWatchlist()}
            className="createBtn px-2 py-1 rounded-md flex-shrink-0 active:scale-95"
          >
            Add
          </button>
        </div>
      </div>

      {/* Watchlist edit  */}

      <div className="grid px-4 grid-cols-2">
        <div>
          <div className="flex items-center">
            <div className="relative mr-2 px-2">
              <input
                type="text"
                onChange={renameCurrentWatchlist}
                value={watchlistData[watchlistIndex]}
                maxLength="10"
                className="opacity-1 bg-transparent right-0 left-0 pr-2 z-10 absolute w-full"
              />
              <div className="opacity-0 min-h-[24px]">
                {watchlistData[watchlistIndex]}
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </div>
          <div className="stockItems text-sm">40 items</div>
        </div>

        {!watchlistIndex == 0 && (
          <div
            onClick={removeCurrentWatchlist}
            className="bg-neutral-600 p-1.5 px-2 rounded-md justify-self-end text-sm row-span-2 items my-auto active:scale-95"
          >
            Delete
          </div>
        )}
      </div>

      {/* Add Stock Button  */}

      <button
        onClick={() => setAddStock(true)}
        className="addstockBtn mx-4 bg-black3 h-12 rounded-md"
      >
        Add Stocks
      </button>

      {/* Added Stocks List  */}
      <div className="addedStocksCover myScrollBlurY">
        <div className="addedStocks px-4 pb-8 flex flex-col gap-4">
          <AddedStock value={"negative"} />

          <AddedStock value={"positive"} />
          <AddedStock value={"positive"} />
          <AddedStock value={"positive"} />
          <AddedStock value={"positive"} />
        </div>
      </div>

      {/* Global Trade Box  */}

      {isTradeBox && <TradeBox />}
    </div>
  );
};

export default Dashboard;

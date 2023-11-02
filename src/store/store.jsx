import { configureStore } from "@reduxjs/toolkit";
import intraSlice from "./slices/intraSlice";
import watchlistReducer from "./slices/watchListDataSlice";
import tradeBoxSlice from "./slices/tradeBoxSlice";
import orderSlice from "./slices/orderSlice";
import allStockDataSlice from "./slices/stockListDataSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    intraMode: intraSlice,
    tradeBox: tradeBoxSlice,
    order: orderSlice,
    stockListData: allStockDataSlice
  },
});

export default store;

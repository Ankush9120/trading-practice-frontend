import { configureStore } from "@reduxjs/toolkit";
import intraSlice from "./slices/intraSlice";
import watchlistReducer from "./slices/watchlistSlice";
import tradeBoxSlice from "./slices/tradeBoxSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    intraMode: intraSlice,
    tradeBox: tradeBoxSlice,
    order: orderSlice,
  },
});

export default store;

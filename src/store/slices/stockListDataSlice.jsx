import { createSlice } from "@reduxjs/toolkit";

const stockListDataSlice = createSlice({
  name: "stockListData",
  initialState: {
    stockListData: [],
    stockListDataLoading: false,
  },

  reducers: {
    setStockListData: (state, action) => {
      state.stockListData = action.payload;
    },

    setStockListDataLoadingOn: (state) => {
      state.stockListDataLoading = true;
    },
    setStockListDataLoadingOff: (state) => {
      state.stockListDataLoading = false;
    },
  },
});

export const {
  setStockListData,
  setStockListDataLoadingOn,
  setStockListDataLoadingOff,
} = stockListDataSlice.actions;

export default stockListDataSlice.reducer;

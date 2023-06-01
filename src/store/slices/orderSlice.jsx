import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [
    {
      stockName: "Paytm Pvt Ltd 1",
      qty: 656,
      pnl: 4217,
      price: 2114.5,
      settled: 1245.5,
      ltp: 145.56,
      day: "05 March",
      time: "05:51:05 PM",
    },
    {
      stockName: "Paytm Pvt Ltd 2",
      qty: 678,
      price: 5414.5,
      settled: 4125.5,
      ltp: 114.56,
      day: "08 March",
      time: "01:10:06 PM",
    },
  ],
});

export default orderSlice.reducer;

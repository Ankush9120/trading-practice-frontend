import { createSlice } from "@reduxjs/toolkit";

const tradeBoxSlice = createSlice({
  name: "tradebox",
  initialState: false,
  reducers: {
    tradeBoxToggle(state) {
      return !state;
    },
  },
});

export const { tradeBoxToggle } = tradeBoxSlice.actions;
export default tradeBoxSlice.reducer;

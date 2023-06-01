import { createSlice } from "@reduxjs/toolkit";

const intramodeSlice = createSlice({
  name: "intramode",
  initialState: localStorage.getItem("intraMode") === "true",

  reducers: {
    switchIntra(state) {
      return !state;
    },
  },
});

export const { switchIntra } = intramodeSlice.actions;
export default intramodeSlice.reducer;

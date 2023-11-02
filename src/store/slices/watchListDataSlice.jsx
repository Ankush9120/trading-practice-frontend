import { createSlice } from "@reduxjs/toolkit";

const watchListDataSlice = createSlice({
  name: "watchlist",
  initialState: ["List 1"],

  // making functions to change states inside reducer
  reducers: {
    addWatchlist(state, action) {
      state.push(action.payload);
    },
    removeWatchlist(state, action) {
      state.splice(action.payload, 1);
    },
    renameWatchlist(state, action) {
      const [index, value] = action.payload;
      state[index] = value;
    },
  },
});

export const { addWatchlist, removeWatchlist, renameWatchlist } =
  watchListDataSlice.actions;
export default watchListDataSlice.reducer;

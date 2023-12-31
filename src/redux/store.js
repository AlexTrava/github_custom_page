import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";
import fetchSlice from "./slices/fetchSlice";
import fetchRepoSlice from "./slices/fetchRepoSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    fetch: fetchSlice,
    fetchRepo: fetchRepoSlice,
  },
});

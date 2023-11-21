import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRepo = createAsyncThunk(
  "fetchRepo/fetchRepoInfo",
  async (searchValue) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${searchValue}/repos`,
    );
    return data.map(({ name, description, html_url, id }) => {
      return {
        name: name,
        description: description,
        url: html_url,
        id: id,
      };
    });
  },
);

const initialState = {
  items: [],
  status: "loading", //loading, error, succes
};

const fetchRepoSlice = createSlice({
  name: "fetchRepos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepo.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchRepo.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succes";
    },
    [fetchRepo.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default fetchRepoSlice.reducer;

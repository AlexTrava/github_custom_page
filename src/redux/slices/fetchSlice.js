import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "fetch/fetchUserInfo",
  async (searchValue) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${searchValue}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: "loading", //loading, error, succes
};

const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.items = {
        avatar: action.payload.avatar_url,
        userName: action.payload.login,
        name: action.payload.name,
        follower: action.payload.followers,
        following: action.payload.following,
        repos: action.payload.public_repos,
        url: action.payload.html_url,
      };
      state.status = "succes";
    },
    [fetchUser.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default fetchSlice.reducer;

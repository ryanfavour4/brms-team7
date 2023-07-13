// create a user slice
import { createSlice } from "@reduxjs/toolkit";
import adminsArray from "../../dummy.json";

const initialState = {
  data: adminsArray,
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {},
});

export const admins = (state) => state.admins.data;

export default adminsSlice.reducer;
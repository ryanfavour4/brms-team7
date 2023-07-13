// create a user slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routesTable: {
    storeColumn: [],
    storeRow: []
  }
};

const routesSlice = createSlice({
  name: "routesStore",
  initialState,
  reducers: {
    setStoreTable: (state, action) => {
      const { storeColumn, storeRow } = action.payload;
      state.routesTable = {
        ...state.routesTable,
        storeColumn,
        storeRow
      };

      console.log(state.routesTable);
    }
  }
});

export const routesTable = (state) => state.routes.routesTable;
export const { setStoreTable } = routesSlice.actions;
export default routesSlice.reducer;

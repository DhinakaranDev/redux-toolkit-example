import { createSlice } from "@reduxjs/toolkit";

const CommonSlice = createSlice({
  name: "Common",
  initialState: {
    loadingProducts: false,
    productList: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.loadingProducts = true;
    },
    getProductsSuccess: (state, action) => {
      state.productList = action.payload;
      state.loadingProducts = false;
    },
    getProductsFailure: (state, action) => {
      state.loadingProducts = false;
    },
  },
});

export const { getProducts } = CommonSlice.actions;
export default CommonSlice.reducer;

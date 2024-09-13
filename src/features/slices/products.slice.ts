import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { productsTypes, productTypeData } from "../slices/type";
import { RootState } from "../../store";

const initialState: productsTypes = {
  products: [],
  cart: [],
  qty: 0,
  totalPrice: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products = [...state.products, action.payload];
    },
    addCart: (state, action: PayloadAction<productTypeData>) => {
      const productToAdd = action.payload;
      const itemExists = state.cart.some(
        (item: { id: number }) => item.id === productToAdd.id
      );
      if (!itemExists) {
        state.cart.push(productToAdd);
      } 
    },
    removeCart: (state, action: PayloadAction<productTypeData>) => {
      state.cart = state.cart.filter(
        (item: { id: number }) => item.id !== action.payload.id
      );
    },
    setQty: (state, action: PayloadAction<number>) => {
      state.qty = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { addProduct, addCart, removeCart, setQty, setTotalPrice } =
  productsSlice.actions;

//selectors

export const selectTotalPrice = (state: RootState) =>
  state.products.products.reduce(
    (acc: number, item: any) => (acc += item.price),
    0
  );

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;

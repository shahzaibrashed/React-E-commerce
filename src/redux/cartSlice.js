import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast"; 

const initialState = {
  cart: [],
  quantity: 0,
};

const cartSystem = createSlice({
  name: "cartsItem",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        toast.error("This product already exists in your Cart");
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cart.push(tempvar);
        state.quantity += 1;
        toast.success("This product has been added to your cart");
      }
    },
    RemoveProduct: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.quantity -= state.cart[findIndex].quantity;
        state.cart.splice(findIndex, 1);
        toast.success("This product remove from cart!");
      }
    },
    IncrementQuantity: (state, action) => {
      const find = state.cart.find((item) => item.id === action.payload.id);
      if (find) {
        find.quantity += 1;
        state.quantity += 1;
      }
    },
    DecrementQuantity: (state, action) => {
      const find = state.cart.find((item) => item.id === action.payload.id);
      if (find && find.quantity > 1) {
        find.quantity -= 1;
        state.quantity -= 1;
      } else if (find && find.quantity === 1) {
        toast.error("Minimum quantity reached!");
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.quantity = 0;
      toast.success("Cart has been cleared!");
    },
  },
});

export const { AddCart, RemoveProduct, IncrementQuantity, DecrementQuantity, clearCart } = cartSystem.actions;
export default cartSystem.reducer;

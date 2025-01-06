import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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
        Swal.fire({
          title: "This product already exists in your Cart",
          icon: "error",
          draggable: true,
        });
      } else {
        const tempvar = { ...action.payload, quantity: 1 }; 
        state.cart.push(tempvar);
        state.quantity += 1; 
        Swal.fire({
          title: "This product has been added to your cart",
          icon: "success",
          draggable: true,
        });
      }
    },
    RemoveProduct: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.quantity -= state.cart[findIndex].quantity;
        state.cart.splice(findIndex, 1);
        Swal.fire({
          title: "Item removed from cart!",
          icon: "success",
          draggable: true,
        });
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
        Swal.fire({
          title: "Minimum quantity reached!",
          icon: "info",
          draggable: true,
        });
      }
    },
    
  },
});

export const { AddCart, RemoveProduct, IncrementQuantity,DecrementQuantity } = cartSystem.actions;
export default cartSystem.reducer;
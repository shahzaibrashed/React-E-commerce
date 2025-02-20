import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    compare: [],
    quantity: 0,
  };
  
  const compareSlice = createSlice({
    name: "compareItem",
    initialState,
    reducers: {
      AddCompre: (state, action) => {
        const find = state.compare.findIndex((item) => item.id === action.payload.id);
        if (find >= 0) {
          toast.error("This product already Compare");
        } else {
          const tempvar = { ...action.payload, quantity: 1 }; 
          state.compare.push(tempvar);
          state.quantity += 1; 
          toast.success(" Product added to Compare");
        }
      },
       RemoveCompare: (state, action) => {
            const findIndex = state.compare.findIndex((item) => item.id === action.payload.id);
            if (findIndex >= 0) {
              state.quantity -= state.compare[findIndex].quantity;
              state.compare.splice(findIndex, 1);
              toast.success("Product removed from Compare")
            }
          },

    },
});

export const { AddCompre,RemoveCompare } = compareSlice.actions;
export default compareSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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
          Swal.fire({
            title: "This product already Compare",
            icon: "error",
            draggable: true,
          });
        } else {
          const tempvar = { ...action.payload, quantity: 1 }; 
          state.compare.push(tempvar);
          state.quantity += 1; 
          Swal.fire({
            title: "This product has been added to Compare",
            icon: "success",
            draggable: true,
          });
        }
      },
       RemoveCompare: (state, action) => {
            const findIndex = state.compare.findIndex((item) => item.id === action.payload.id);
            if (findIndex >= 0) {
              state.quantity -= state.compare[findIndex].quantity;
              state.compare.splice(findIndex, 1);
              Swal.fire({
                title: "Item removed from Compare",
                icon: "success",
                draggable: true,
              });
            }
          },

    },
});

export const { AddCompre,RemoveCompare } = compareSlice.actions;
export default compareSlice.reducer;
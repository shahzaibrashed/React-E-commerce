import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

let wishlistData = [];
try {
    const storedWishlist = localStorage.getItem('wishlistItem');
    wishlistData = storedWishlist ? JSON.parse(storedWishlist) : [];
} catch (error) {
    console.error('Error parsing wishlist data from localStorage:', error);
    wishlistData = [];
}

const initialState = {
    wishlistItem: wishlistData,
};

const wishSystem = createSlice({
    name: "wishlists",
    initialState,
    reducers: {

        addWish: (state, action) => {
            if (!state.wishlistItem) {
                state.wishlistItem = [];
            }
        
            const existsItemIndex = state.wishlistItem?.findIndex(item => item.id === action.payload?.id);
        
            if (existsItemIndex >= 0) {
                Swal.fire({
                    title: "This product already exists in your favorite List",
                    icon: "error",
                    draggable: true
                });
            } else {
                const buildWishlist = { ...action.payload, isFavourite: true };
                state.wishlistItem.push(buildWishlist);
                localStorage.setItem("wishlistItem", JSON.stringify(state.wishlistItem));
        
                Swal.fire({
                    title: "Item Add from favorite list!",
                    icon: "success",
                    draggable: true
                });
            }
        },
        


        removeWish: (state, action) => {
            const existsItemIndex = state.wishlistItem?.findIndex(item => item.id === action.payload?.id);
            if (existsItemIndex >= 0) {
                state.wishlistItem.splice(existsItemIndex, 1);
                localStorage.setItem("wishlistItem", JSON.stringify(state.wishlistItem));
                Swal.fire({
                    title: "Item removed from favorite list!",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    title: "Item not found in the favorite list!",
                    icon: "error",
                    draggable: true
                });
            }
        }
        

    },
});


export const { addWish,removeWish } = wishSystem.actions;
export default wishSystem.reducer;
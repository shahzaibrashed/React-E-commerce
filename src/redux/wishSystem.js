import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
                toast.error("This product already exists in your Wishlist List");
            } else {
                const buildWishlist = { ...action.payload, isFavourite: true };
                state.wishlistItem.push(buildWishlist);
                localStorage.setItem("wishlistItem", JSON.stringify(state.wishlistItem));
                toast.success("Item added to Wishlist list!");
            }
        },
        removeWish: (state, action) => {
            const existsItemIndex = state.wishlistItem?.findIndex(item => item.id === action.payload?.id);
            if (existsItemIndex >= 0) {
                state.wishlistItem.splice(existsItemIndex, 1);
                localStorage.setItem("wishlistItem", JSON.stringify(state.wishlistItem));
                toast.success("Item removed from Wishlist list!");
            } else {
                toast.error("Item not found in the Wishlist list!");
            }
        },
        clearWishlist: (state) => {
            state.wishlistItem = [];
            toast.success("WishList has been cleared!");
          },
    },
});

export const { addWish, removeWish ,clearWishlist} = wishSystem.actions;
export default wishSystem.reducer;

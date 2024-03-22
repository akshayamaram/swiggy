import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // mutating the state here 
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id!== action.payload);
            // state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // state.items = [];
        },
    },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions; // this will contain all of our actions
export default cartSlice.reducer;
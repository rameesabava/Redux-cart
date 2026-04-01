import { createSlice } from "@reduxjs/toolkit"


const wishlistSlice = createSlice({
name:'wishlist',
initialState:[],
reducers:{
    // add to wishlist -view component, payload - entire product object
    addToWishlist:(state,action)=>{
        state.push(action.payload)
    },
    // remove wishlist - wishlist component, payload - product id
    removeWishlistItem:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
    }
}
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer
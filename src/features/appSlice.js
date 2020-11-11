import {createSlice} from "@reduxjs/toolkit";

export const appSlice=createSlice({
    name:"app",
    initialState:{
        cartTotal:0.0,
    },
    reducers:{
        setCartTotal:(state,action)=>{
            state.cartTotal+=action.payload.itemValue;
        },
        decCartTotal:(state,action)=>{
            console.log(`prev value ${state.cartTotal}`);
            console.log(`value to be subtracted ${action.payload.itemValue}`);
            state.cartTotal-=action.payload.itemValue;
            
            console.log(state.cartTotal);
        }
    },
});

export const {setCartTotal, decCartTotal}=appSlice.actions;

export const selectCartValue=(state)=>state.app.cartTotal;

export default appSlice.reducer;
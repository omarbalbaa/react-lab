import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        incrementAction: (state,action)=>{
            state.counter = state.counter + action.payload;
        },
        decrementAction: (state, action)=>{
            state.counter = state.counter - action.payload;
        }
    }
})

export const { incrementAction, decrementAction} = counterSlice.actions
export default counterSlice.reducer
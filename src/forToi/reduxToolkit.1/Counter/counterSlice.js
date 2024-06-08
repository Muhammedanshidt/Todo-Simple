import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "count",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
         },
        decerement: (state) => { 
            state.count -=1
        },
        reset: (state,action) => {
            state.count = 0
            // console.log(actionf)
         }
    }
})

export const {increment,decerement,reset} = counterSlice.actions
export default counterSlice.reducer
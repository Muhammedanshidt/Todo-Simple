import { configureStore } from "@reduxjs/toolkit";
import couterReducer from './Counter/counterSlice'
const store = configureStore(  {
        reducer: {
            count: couterReducer
        },

    });
export default store
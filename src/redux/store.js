import { configureStore } from "@reduxjs/toolkit";
import bgSlice from "./bgSlice";

export const store = configureStore({
    reducer:{
        // key value pairs
        bgColor:bgSlice
    }
})
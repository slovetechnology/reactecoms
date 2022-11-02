import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Data"

export default configureStore({
    reducer: {
        data: dataReducer,
    },
})
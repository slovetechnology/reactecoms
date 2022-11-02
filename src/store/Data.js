import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
    name: 'data',
    initialState: {
        value: 1,
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { changeValue } = DataSlice.actions
export default DataSlice.reducer
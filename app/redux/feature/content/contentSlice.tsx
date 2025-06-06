import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
    isContentScreenFocued: boolean
};

const initialState: InitialStateType = {
    isContentScreenFocued: false,
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setIsContentScreenFocued: (state: { isContentScreenFocued: boolean; }, action: { payload: boolean; }) => {
            state.isContentScreenFocued = action.payload;
        },
    },
});

export const { setIsContentScreenFocued } = contentSlice.actions;
export default contentSlice.reducer;
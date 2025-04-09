import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface Post {
    sections: [any];
    _id: string;
}

export interface initialState {
    post: null | Post;
    video: any;
}

const initialState: initialState = {
    post: null,
    video: []
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost: (state, action: PayloadAction<any>) => {
            state.post = action.payload;
        },
        addVideo: (state, action: PayloadAction<any>) => {
            state.video = [...state.video, action.payload]
        },
        clearVideo: (state) => {
            state.video = [];
        },
    },
});

export const { setPost, addVideo, clearVideo } = postSlice.actions;

// ===> SELECTORS
export const postSelector = (s: any) => s.post.post;
export const postVideoSelector = (s: any) => s.post.video;

export default postSlice.reducer;

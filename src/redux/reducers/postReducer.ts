import { createSlice } from "@reduxjs/toolkit";

interface PostState {
  loading: boolean;
  data: Array<IPost>;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

const initialState: PostState = {
  loading: false,
  data: [],
};

const PostReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPostRequest: (state, _) => {
      state.loading = true;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    fetchPostError: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchPostRequest, fetchPostSuccess, fetchPostError } =
  PostReducer.actions;
export default PostReducer.reducer;

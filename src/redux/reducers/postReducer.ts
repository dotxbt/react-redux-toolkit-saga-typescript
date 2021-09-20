import { createSlice } from "@reduxjs/toolkit";
interface PostState {
  loading: boolean;
  data: Array<IPost>;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  isChecked?: boolean;
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
      state.data = action.payload.data.map((e: IPost) => {
        return {
          ...e,
          title: e.title.substring(0, 32),
          body: e.body.substring(0, 32),
        }
      });
    },
    fetchPostError: (state) => {
      state.loading = false;
    },
    checkboxChange: (state, action) => {
      state.data = state.data.map((e: IPost) =>
        e.id === action.payload.id
          ? {
              ...e,
              isChecked: action.payload.isChecked,
              title: action.payload.isChecked
                ? e.title + " - [CHECKED]"
                : e.title.toString().split(" - [CHECKED]")[0],
            }
          : e
      );
    },
  },
});

export const {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostError,
  checkboxChange,
} = PostReducer.actions;
export default PostReducer.reducer;

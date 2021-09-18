import { call, put, takeLatest } from "@redux-saga/core/effects";
import {
  fetchPostError,
  fetchPostSuccess,
  fetchPostRequest,
  IPost,
} from "../redux/reducers/postReducer";
import { getPost } from "../services/postService";

function* fethPostFromApi(payload: any) {
  try {
    console.log("PAYLOAD " + payload.payload.name);
    const response: IPost[] = yield call(getPost);
    console.log(response.toString());
    yield put(fetchPostSuccess({ data: response }));
  } catch (e) {
    yield put(fetchPostError());
  }
}

export function* postSaga() {
  yield takeLatest(fetchPostRequest, fethPostFromApi);
}

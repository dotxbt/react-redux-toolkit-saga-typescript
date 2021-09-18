import axios from "axios";
import { IPost } from "../redux/reducers/postReducer";

export const getPost = async () => {
  const res = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.data;
};

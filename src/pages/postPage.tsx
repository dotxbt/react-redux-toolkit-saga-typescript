import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPostRequest } from "../redux/reducers/postReducer";
import { Box, Button, Tile } from "../styles/styles";

const Counter = () => {
  const { data: dataPost, loading: isLoading } = useAppSelector(
    (state) => state.post
  );
  const [refresh, setrefresh] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchPostRequest({
        name: "Sabituddin Bigbang",
        callName: "Sabit Aja",
      })
    );
  }, [dispatch, refresh]);

  return (
    <Box>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Button
            onClick={() => {
              refresh ? setrefresh(false) : setrefresh(true);
            }}
          >
            Refresh
          </Button>
          <a href="https://jsonplaceholder.typicode.com/posts">API Example</a>
        </div>
      )}
      {dataPost.map((post) => (
        <div key={post.id}>
          <Tile>
            <h1>{post.title}</h1>
            <p style={{ fontSize: 20 }}>{post.body}</p>
          </Tile>
        </div>
      ))}
    </Box>
  );
};

export default Counter;

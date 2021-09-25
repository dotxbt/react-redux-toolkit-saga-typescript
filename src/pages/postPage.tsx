import { useEffect, useState } from "react";
import { TileComponent } from "../components/tileComponent";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  checkboxChange,
  fetchPostRequest,
} from "../redux/reducers/postReducer";
import { Checkbox } from "../styles/input.style";
import { Box, Button, Column } from "../styles/styles";
import { TextTitle } from "../styles/text.style";

const PostPage = () => {
  const { data: dataPost, loading: isLoading } = useAppSelector(
    (state) => state.post
  );
  let checked = 0;
  const total = dataPost.length;
  if (!isLoading) {
    dataPost.forEach((e) => {
      if (e.isChecked) {
        checked++;
      }
    });
  }

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px 40px",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={() => {
            refresh ? setrefresh(false) : setrefresh(true);
          }}
        >
          Request Data
        </Button>
        <a href="https://jsonplaceholder.typicode.com/posts">API Example</a>
        <span>
          <h4 style={{ color: "#ffffff", margin: "0px 20px" }}>
            Total
            <br />
            <span style={{ color: "#ff0000", fontSize: "1.5em" }}>{total}</span>
          </h4>
        </span>
        <span>
          <h4 style={{ color: "#ffffff", margin: "0px 20px" }}>
            checked
            <br />
            <span style={{ color: "#ff0000", fontSize: "1.5em" }}>
              {checked}
            </span>
          </h4>
        </span>
      </div>
      {dataPost.map((post) => (
        <TileComponent key={post.id}>
          <Column>
            <TextTitle size={"16px"} padding={"3px 0px"}>
              {post.title}
            </TextTitle>
            <p
              style={{
                fontSize: 12,
                color: "#969393",
                padding: "6px 0px",
                margin: 0,
              }}
            >
              {post.body.substring(0, 100)}
            </p>
          </Column>
          <Checkbox
            checked={post.isChecked}
            type="checkbox"
            value={"checked"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(
                checkboxChange({
                  isChecked: e.target.checked,
                  id: post.id,
                })
              );
            }}
          />
        </TileComponent>
      ))}
    </Box>
  );
};

export default PostPage;

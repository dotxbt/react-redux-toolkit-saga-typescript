import { FC } from "react";
import { RoundedImage } from "../styles/image.style";
import { ItemLayout } from "../styles/layout.styled";

export const TileComponent: FC<{}> = ({children }) => {
  return (
    <ItemLayout alignItems={"center"} direction={"row"}>
      <RoundedImage src="https://www.w3schools.com/howto/img_avatar.png" />
      {children}
    </ItemLayout>
  );
};
